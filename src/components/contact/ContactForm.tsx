import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useInView } from '@/hooks/useInView';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { SERVICE_OPTIONS, REGION_OPTIONS } from '@/lib/constants';

// ✅ UPDATED: Your actual Formspree endpoint
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mljjdrve';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Full name is required (min 2 characters).'),
  email: z.string().email('Please enter a valid corporate email address.'),
  organization: z.string().min(2, 'Organization name is required.'),
  // Changed from z.enum to z.string().min(1) to safely handle dynamic arrays from constants
  region: z.string().min(1, 'Please select your region.'),
  serviceInterest: z.string().min(1, 'Please select a service area.'),
  message: z.string().min(20, 'Please provide at least 20 characters describing your project scope.'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const { ref, inView } = useInView();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

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

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          _subject: `New Enterprise Inquiry: ${data.serviceInterest} - ${data.organization}`,
        }),
      });

      if (response.ok) {
        setStatus('success');
        reset();
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.errors?.[0]?.message || 'Failed to send message. Please try again.');
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
            options={REGION_OPTIONS}
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
  options?: readonly any[]
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
            // Safely handle both string arrays and { value, label } object arrays
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