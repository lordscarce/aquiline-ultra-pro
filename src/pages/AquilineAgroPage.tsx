import { useInView } from '@/hooks/useInView';
import { ArrowRight, Sprout, TrendingUp, BarChart3, Wheat, CheckCircle2, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AquilineAgroPage() {
  const heroInView = useInView({ threshold: 0.1 });
  const overviewInView = useInView();
  const capabilitiesInView = useInView();
  const featuresInView = useInView();
  const outcomesInView = useInView();
  const ctaInView = useInView();

  return (
    <article className="relative">
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 border-b border-white/5">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <nav aria-label="Breadcrumb" className={`transition-all duration-700 ${heroInView.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <ol className="flex items-center gap-2 text-xs text-slate-500">
              <li><Link to="/" className="hover:text-aquiline-500 transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link to="/solutions" className="hover:text-aquiline-500 transition-colors">Solutions</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-slate-300">AquilineAgro™</li>
            </ol>
          </nav>

          <div ref={heroInView.ref} className={`mt-8 max-w-4xl transition-all duration-700 ${heroInView.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="section-eyebrow">Agri Value Chain Intelligence</span>
            <h1 className="mt-8 font-display text-display-lg lg:text-display-xl text-white text-balance">
              Optimize the entire agri value chain.{' '}
              <span className="text-slate-500">Powered by</span>{' '}
              <span className="bg-gradient-to-r from-aquiline-400 via-aquiline-500 to-aquiline-600 bg-clip-text text-transparent">sovereign food system intelligence.</span>
            </h1>
            <p className="mt-8 text-lg lg:text-xl text-slate-400 leading-relaxed max-w-3xl">
              AquilineAgro™ provides crop yield prediction from weather and historical data, automated inventory management via vision systems, and real-time market price forecasting for optimized sales decisions — from farm to market.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <a href="#capabilities" className="btn-primary group"><span>Explore Capabilities</span><ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></a>
              <a href="/contact" className="btn-ghost">Request a Demo</a>
            </div>
          </div>
        </div>
      </section>

      <section id="overview" ref={overviewInView.ref} className="relative py-24 lg:py-32 border-b border-white/5">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div className={`transition-all duration-700 ${overviewInView.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="section-eyebrow">The Challenge</span>
              <h2 className="mt-6 font-display text-3xl lg:text-4xl text-white">Agricultural operations lack data-driven decision intelligence.</h2>
            </div>
            <div className={`transition-all duration-700 delay-150 ${overviewInView.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-lg text-slate-400 leading-relaxed">Farmers rely on intuition and historical patterns for planting decisions. Inventory tracking is manual and error-prone. Market prices are discovered too late. Supply chain traceability is fragmented.</p>
              <p className="mt-6 text-lg text-slate-400 leading-relaxed">AquilineAgro™ brings enterprise-grade intelligence to agriculture — predicting yields, automating inventory, forecasting prices, and providing end-to-end value chain visibility for national food security and farmer profitability.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" ref={capabilitiesInView.ref} className="relative py-24 lg:py-32 border-b border-white/5">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${capabilitiesInView.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="section-eyebrow">Core Capabilities</span>
            <h2 className="mt-6 font-display text-3xl lg:text-4xl text-white">Intelligent agricultural infrastructure</h2>
          </div>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Sprout className="h-6 w-6" />, title: 'Crop Yield Prediction', description: 'Machine learning models analyze weather patterns, soil conditions, and historical data to forecast yields with high accuracy for strategic planning.' },
              { icon: <Package className="h-6 w-6" />, title: 'Automated Inventory Management', description: 'Computer vision systems track stock levels, monitor storage conditions, and automate reordering to prevent waste and shortages.' },
              { icon: <TrendingUp className="h-6 w-6" />, title: 'Market Price Forecasting', description: 'Real-time price intelligence across markets with predictive analytics to optimize sales timing and maximize farmer revenue.' },
              { icon: <Wheat className="h-6 w-6" />, title: 'Supply Chain Traceability', description: 'End-to-end tracking from farm to consumer with blockchain-verified provenance, quality certifications, and compliance documentation.' },
              { icon: <BarChart3 className="h-6 w-6" />, title: 'Weather & Climate Modeling', description: 'Hyperlocal weather forecasting and climate risk assessment for planting decisions, irrigation scheduling, and disaster prevention.' },
              { icon: <CheckCircle2 className="h-6 w-6" />, title: 'Farmer Engagement', description: 'Mobile-first extension services delivering personalized recommendations, best practices, and market linkage directly to farmers.' },
            ].map((cap, i) => (
              <div key={cap.title} className={`glass-panel rounded-2xl p-8 transition-all duration-700 hover:border-aquiline-500/40 hover:shadow-glow-orange ${capabilitiesInView.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="h-12 w-12 rounded-xl bg-aquiline-500/10 border border-aquiline-500/20 flex items-center justify-center text-aquiline-500 mb-6">{cap.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{cap.title}</h3>
                <p className="text-slate-400 leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" ref={featuresInView.ref} className="relative py-24 lg:py-32 border-b border-white/5">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className={`transition-all duration-700 ${featuresInView.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="section-eyebrow">How It Works</span>
            <h2 className="mt-6 font-display text-3xl lg:text-4xl text-white mb-16">From planting to market — data-driven optimization</h2>
          </div>
          <div className="space-y-24">
            {[
              { step: '01', title: 'Predictive Planting', description: 'AI analyzes soil health, weather forecasts, and historical yield data to recommend optimal planting schedules, crop varieties, and input requirements for maximum productivity.', metric: '41%', metricLabel: 'improvement in yield predictability' },
              { step: '02', title: 'Intelligent Monitoring', description: 'IoT sensors and satellite imagery track crop health, soil moisture, and pest threats in real-time, triggering automated interventions and alerts.', metric: '24/7', metricLabel: 'field monitoring coverage' },
              { step: '03', title: 'Automated Inventory', description: 'Computer vision systems in warehouses and silos automatically count, grade, and track produce with quality verification and spoilage prediction.', metric: '95%', metricLabel: 'inventory accuracy' },
              { step: '04', title: 'Market Intelligence', description: 'Real-time price aggregation across markets with demand forecasting and optimal sales timing recommendations to maximize farmer revenue.', metric: '23%', metricLabel: 'average revenue increase' },
            ].map((item, i) => (
              <div key={item.step} className={`grid lg:grid-cols-12 gap-8 lg:gap-16 items-center transition-all duration-700 ${featuresInView.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="lg:col-span-5"><span className="font-display text-6xl lg:text-7xl font-bold bg-gradient-to-br from-aquiline-400 to-aquiline-700 bg-clip-text text-transparent">{item.step}</span></div>
                <div className="lg:col-span-7">
                  <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-4">{item.title}</h3>
                  <p className="text-lg text-slate-400 leading-relaxed mb-6">{item.description}</p>
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-aquiline-500/5 border border-aquiline-500/20">
                    <span className="text-2xl font-bold text-aquiline-500">{item.metric}</span>
                    <span className="text-sm text-slate-400">{item.metricLabel}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="outcomes" ref={outcomesInView.ref} className="relative py-24 lg:py-32 border-b border-white/5">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${outcomesInView.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="section-eyebrow">Measured Outcomes</span>
            <h2 className="mt-6 font-display text-3xl lg:text-4xl text-white">Agricultural excellence, quantified</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { metric: '41%', label: 'Improvement in yield predictability', icon: <Sprout className="h-5 w-5" /> },
              { metric: '23%', label: 'Average revenue increase', icon: <TrendingUp className="h-5 w-5" /> },
              { metric: '95%', label: 'Inventory tracking accuracy', icon: <Package className="h-5 w-5" /> },
              { metric: '100%', label: 'Value chain traceability', icon: <CheckCircle2 className="h-5 w-5" /> },
            ].map((stat, i) => (
              <div key={stat.label} className={`glass-panel rounded-2xl p-8 text-center transition-all duration-700 hover:border-aquiline-500/40 ${outcomesInView.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-aquiline-500/10 border border-aquiline-500/20 text-aquiline-500 mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-white mb-2">{stat.metric}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={ctaInView.ref} className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className={`glass-panel rounded-3xl p-12 lg:p-20 text-center transition-all duration-700 ${ctaInView.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="font-display text-3xl lg:text-4xl text-white mb-6">Transform agricultural operations</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">Deploy AquilineAgro™ to bring data-driven intelligence to your agri value chain — from farm-level optimization to market linkage and national food security.</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="/contact" className="btn-primary group"><span>Deploy AquilineAgro™</span><ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></a>
              <a href="#features" className="btn-ghost">See How It Works</a>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}