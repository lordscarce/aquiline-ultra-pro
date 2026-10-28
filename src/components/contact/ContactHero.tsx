import { Link } from 'react-router-dom';
import { useInView } from '@/hooks/useInView';
import {  } from 'lucide-react';

export default function ContactHero() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      aria-labelledby="contact-heading"
      className="relative pt-32 lg:pt-40 pb-16 lg:pb-24 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-aquiline-500/8 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-xs text-slate-500">
            <li><Link to="/" className="hover:text-aquiline-500 transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-slate-300">Contact</li>
          </ol>
        </nav>

        <div className={`mt-8 max-w-3xl transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="section-eyebrow">Get in Touch</span>
          <h1 id="contact-heading" className="mt-6 font-display text-display-lg lg:text-display-xl text-white text-balance">
            Start the conversation.{' '}
            <span className="bg-gradient-to-r from-aquiline-400 to-aquiline-600 bg-clip-text text-transparent">
              Define the outcome.
            </span>
          </h1>
          <p className="mt-6 text-lg text-slate-400 leading-relaxed">
            Whether you are evaluating a sovereign AI deployment, modernizing legacy infrastructure, 
            or seeking an accountable partner for end-to-end delivery, our team is ready to establish 
            your baseline and architect the solution.
          </p>
        </div>
      </div>
    </section>
  );
}