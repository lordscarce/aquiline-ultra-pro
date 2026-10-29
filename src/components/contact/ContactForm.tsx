import { useState, useRef } from 'react'; // Added useRef
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useInView } from '@/hooks/useInView';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { SERVICE_OPTIONS } from '@/lib/constants';
import ReCAPTCHA from "react-google-recaptcha"; // Added ReCAPTCHA

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mljjdrve';

const ALL_COUNTRIES = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
  "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
  "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia",
  "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
  "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
  "Fiji", "Finland", "France",
  "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
  "Haiti", "Honduras", "Hungary",
  "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast",
  "Jamaica", "Japan", "Jordan",
  "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
  "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
  "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
  "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway",
  "Oman",
  "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
  "Qatar",
  "Romania", "Russia", "Rwanda",
  "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
  "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
  "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan",
  "Vanuatu", "Venezuela", "Vietnam",
  "Yemen",
  "Zambia", "Zimbabwe"
];

const contactSchema = z.object({
  fullName: z.string().min(2, 'Full name is required (min 2 characters).'),
  email: z.string().email('Please enter a valid corporate email address.'),
  organization: z.string().min(2, 'Organization name is required.'),
  region: z.string().min(1, 'Please select your region.'),
  serviceInterest: z.string().min(1, 'Please select a service area.'),
  message: z.string().min(20, 'Please provide at least 20 characters describing your project scope.'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const { ref, inView } = useInView();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  // Ref for the reCAPTCHA
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus('submitting');
    setErrorMessage('');

    // 1. Check if CAPTCHA is completed
    const token = recaptchaRef.current?.getValue();
    if (!token) {
      setErrorMessage("Please complete the 'I am not a robot' verification.");
      setStatus('error');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('fullName', data.fullName);
      formData.append('email', data.email);
      formData.append('organization', data.organization);
      formData.append('region', data.region);
      formData.append('serviceInterest', data.serviceInterest);
      formData.append('message', data.message);
      formData.append('_subject', `New Enterprise Inquiry: ${data.serviceInterest} - ${data.organization}`);
      formData.append('_replyto', data.email);
      
      // 2. Append the CAPTCHA token for Formspree
      formData.append('g-recaptcha-response', token);

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        reset();
        recaptchaRef.current?.reset(); // Reset CAPTCHA after success
      } else {
        const errorData = await response.json().catch(() => ({}));
        setErrorMessage(errorData.errors?.[0]?.message || `Failed to send message. Status: ${response.status}`);
        setStatus('error');
      }
    } catch (error) {
      setErrorMessage('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div
        ref={ref}
        className="glass-panel rounded-2xl p-10 lg:p-16 text-center border-emerald-500/30 animate-fade-in"
      >
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-6 mx-auto">
          <CheckCircle2 className="h-8 w-8 text-emerald-400" />
        </div>
        <h3 className="text-2xl font-display font-bold text-white">Inquiry Received.</h3>
        <p className="mt-4 text-slate-400 leading-relaxed max-w-md mx-auto">
          Thank you for contacting Aquiline Ultra Pro. Our enterprise team will review your 
          project scope and respond to your email within 24 business hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="btn-ghost mt-8"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`glass-panel rounded-2xl p-8 lg:p-10 border-aquiline-500/20 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="mb-8">
        <h2 className="text-2xl font-display font-bold text-white">Enterprise Inquiry Form</h2>
        <p className="mt-2 text-sm text-slate-400">
          Fields marked with <span className="text-aquiline-500">*</span> are required. 
          All submissions are encrypted and routed securely to our intake team.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        {/* Row 1: Name & Email */}
        <div className="grid sm:grid-cols-2 gap-6">
          <FormField
            label="Full Name"
            name="fullName"
            register={register}
            error={errors.fullName}
            placeholder="e.g., Jane Doe"
          />
          <FormField
            label="Corporate Email"
            name="email"
            type="email"
            register={register}
            error={errors.email}
            placeholder="jane.doe@company.com"
          />
        </div>

        {/* Row 2: Organization & Region */}
        <div className="grid sm:grid-cols-2 gap-6">
          <FormField
            label="Organization"
            name="organization"
            register={register}
            error={errors.organization}
            placeholder="e.g., Aquiline Ultra Pro Ltd"
          />
          <FormSelect
            label="Region / Country"
            name="region"
            register={register}
            error={errors.region}
            options={ALL_COUNTRIES}
          />
        </div>

        {/* Row 3: Service Interest */}
        <FormSelect
          label="Service Interest"
          name="serviceInterest"
          register={register}
          error={errors.serviceInterest}
          options={SERVICE_OPTIONS}
        />

        {/* Row 4: Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
            Project Scope / Message <span className="text-aquiline-500">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            {...register('message')}
            placeholder="Briefly describe your operational challenge, timeline, and desired outcomes..."
            className={`w-full rounded-xl bg-slate-950/40 border px-4 py-3 text-sm text-white placeholder-slate-600 
                       focus:outline-none focus:ring-2 focus:ring-aquiline-500/20 focus:border-aquiline-500 transition-all
                       ${errors.message ? 'border-red-500/50' : 'border-white/10'}`}
          />
          {errors.message && (
            <p className="mt-2 text-xs text-red-400 flex items-center gap-1.5">
              <AlertCircle className="h-3.5 w-3.5" /> {errors.message.message}
            </p>
          )}
        </div>

        {/* Error State */}
        {status === 'error' && (
          <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-300">{errorMessage}</p>
          </div>
        )}

        {/* Google reCAPTCHA Widget */}
        <div className="flex justify-center sm:justify-start">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LejRwYuAAAAAO7LWJa5uR226xhR8uqXSKU72LY_" // <--- PASTE YOUR SITE KEY HERE
            onChange={() => {}} 
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn-primary w-full sm:w-auto group disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Securing transmission...</span>
            </>
          ) : (
            <>
              <span>Submit Inquiry</span>
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}

/* -----------------------------------------------------------
   Reusable Form Field Components
   ----------------------------------------------------------- */
type FieldProps = {
  label: string;
  name: keyof ContactFormData;
  type?: string;
  placeholder?: string;
  register: any;
  error?: any;
  options?: readonly any[];
};

function FormField({ label, name, type = 'text', placeholder, register, error }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-slate-300 mb-2">
        {label} <span className="text-aquiline-500">*</span>
      </label>
      <input
        id={name}
        type={type}
        {...register(name)}
        placeholder={placeholder}
        className={`w-full rounded-xl bg-slate-950/40 border px-4 py-3 text-sm text-white placeholder-slate-600 
                   focus:outline-none focus:ring-2 focus:ring-aquiline-500/20 focus:border-aquiline-500 transition-all
                   ${error ? 'border-red-500/50' : 'border-white/10'}`}
      />
      {error && (
        <p className="mt-2 text-xs text-red-400 flex items-center gap-1.5">
          <AlertCircle className="h-3.5 w-3.5" /> {error.message}
        </p>
      )}
    </div>
  );
}

function FormSelect({ label, name, register, error, options }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-slate-300 mb-2">
        {label} <span className="text-aquiline-500">*</span>
      </label>
      <div className="relative">
        <select
          id={name}
          {...register(name)}
          className={`w-full appearance-none rounded-xl bg-slate-950/40 border px-4 py-3 text-sm text-white 
                     focus:outline-none focus:ring-2 focus:ring-aquiline-500/20 focus:border-aquiline-500 transition-all
                     ${error ? 'border-red-500/50' : 'border-white/10'}`}
        >
          <option value="" disabled>Select an option</option>
          {options?.map((opt, index) => {
            const val = typeof opt === 'string' ? opt : opt.value;
            const lbl = typeof opt === 'string' ? opt : opt.label;
            return (
              <option key={index} value={val} className="bg-slate-900 text-white">
                {lbl}
              </option>
            );
          })}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {error && (
        <p className="mt-2 text-xs text-red-400 flex items-center gap-1.5">
          <AlertCircle className="h-3.5 w-3.5" /> {error.message}
        </p>
      )}
    </div>
  );
}