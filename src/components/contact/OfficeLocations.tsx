import { useInView } from '@/hooks/useInView';
import { MapPin, Mail, Phone, Globe2, ArrowUpRight } from 'lucide-react';
import { OFFICE_LOCATIONS, CONTACT_INFO } from '@/lib/constants';

export default function OfficeLocations() {
  const { ref, inView } = useInView();

  return (
    <div ref={ref} className={`space-y-10 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      
      {/* Direct Contact Strip */}
      <div className="glass-panel rounded-2xl p-6 border-aquiline-500/20">
        <h3 className="text-sm font-semibold text-slate-300 mb-5 flex items-center gap-2">
          <Globe2 className="h-4 w-4 text-aquiline-500" />
          Direct Channels
        </h3>
        <div className="space-y-4">
          <a 
            href={CONTACT_INFO.emailHref} 
            className="group flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-aquiline-500/10 border border-aquiline-500/20 text-aquiline-500">
              <Mail className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500">General Inquiries</p>
              <p className="text-sm font-medium text-white group-hover:text-aquiline-400 transition-colors">
                {CONTACT_INFO.email}
              </p>
            </div>
            <ArrowUpRight className="ml-auto h-4 w-4 text-slate-600 group-hover:text-aquiline-500 transition-colors" />
          </a>

          <a 
            href={CONTACT_INFO.phoneHref} 
            className="group flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-aquiline-500/10 border border-aquiline-500/20 text-aquiline-500">
              <Phone className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500">Direct Telephone</p>
              <p className="text-sm font-medium text-white group-hover:text-aquiline-400 transition-colors">
                {CONTACT_INFO.phone}
              </p>
            </div>
            <ArrowUpRight className="ml-auto h-4 w-4 text-slate-600 group-hover:text-aquiline-500 transition-colors" />
          </a>
        </div>
      </div>

      {/* Office Locations */}
      <div>
        <h3 className="text-sm font-semibold text-slate-300 mb-5 flex items-center gap-2">
          <MapPin className="h-4 w-4 text-aquiline-500" />
          Regional Headquarters
        </h3>
        <div className="space-y-4">
          {OFFICE_LOCATIONS.map((office, i) => (
            <div 
              key={office.id}
              className="group relative glass-panel rounded-xl p-5 hover:border-aquiline-500/30 transition-all duration-500"
              style={{ transitionDelay: inView ? `${150 + i * 100}ms` : '0ms' }}
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl leading-none" aria-hidden="true">{office.flag}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-base font-semibold text-white">{office.city}</h4>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-aquiline-500 bg-aquiline-500/10 px-2 py-0.5 rounded">
                      {office.label}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    {office.address}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Footprint Note */}
        <div className="mt-6 p-5 rounded-xl bg-slate-950/40 border border-white/5">
          <p className="text-xs text-slate-400 leading-relaxed">
            <span className="font-semibold text-white">Global Operations:</span> While our Nigerian 
            headquarters coordinate regional delivery, we maintain active operational hubs in the{' '}
            <span className="text-aquiline-400">United Kingdom</span>,{' '}
            <span className="text-aquiline-400">United States</span>,{' '}
            <span className="text-aquiline-400">Indonesia (APAC)</span>, and{' '}
            <span className="text-aquiline-400">Dubai (MENA)</span>. 
            Specify your region in the form, and we will route your inquiry to the appropriate delivery lead.
          </p>
        </div>
      </div>
    </div>
  );
}