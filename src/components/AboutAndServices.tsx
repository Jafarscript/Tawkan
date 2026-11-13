import { ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { SERVICES } from '../data/tawkanData';
import { SafeImage } from './SafeImage';

interface AboutAndServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

const WHY_CHOOSE_POINTS = [
  {
    title: 'Certified & Safety-First Electricians',
    detail: 'Every circuit is continuity-tested, properly earthed, and labeled at handover.',
  },
  {
    title: 'Original Copper & Tier-1 Solar Hardware',
    detail: 'Zero undersized cables or counterfeit breakers—verified copper conductors only.',
  },
  {
    title: 'Transparent Itemized Quotations',
    detail: 'Clear bill of materials and labor breakdown before work starts—no hidden extras.',
  },
  {
    title: 'On-Schedule Commissioning',
    detail: 'Structured site execution across Mainland, Lekki, Ikoyi, VI, and Ikeja.',
  },
];

export function AboutAndServices({ onSelectService }: AboutAndServicesProps) {
  return (
    <>
      {/* About & Why Choose Us */}
      <section id="about" className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Brand Story & Craftsmanship Standards */}
            <div className="lg:col-span-7">
              <p className="text-sm font-semibold text-amber-700 tracking-wide">About TAWKAN</p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-900 [text-wrap:balance]">
                Powering Your World With Excellence
              </h2>
              <p className="mt-5 text-base text-slate-600 leading-relaxed max-w-2xl">
                TAWKAN Electrical Installation is a trusted provider of residential, commercial, and
                industrial electrical and solar solutions in Lagos, Nigeria. We engineer safe,
                load-balanced installations built to protect your property and appliances against
                grid instability.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-slate-200">
                <div>
                  <h3 className="font-display text-base font-bold text-navy-900">
                    Electrical Installations &amp; Rewiring
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                    Neat PVC and galvanized conduit routing, balanced three-phase DBs, earthing
                    grids, and full property rewiring without wall guesswork.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-navy-900">
                    Solar &amp; Hybrid Inverter Engineering
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                    Accurate appliance wattage audits, shade-free solar arrays, and lithium battery
                    storage designed for quiet 24/7 power autonomy.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Deep Navy Trust Panel (no thick left accent stripe) */}
            <div className="lg:col-span-5">
              <div className="bg-navy-900 text-white rounded-2xl p-6 sm:p-8 border border-navy-800">
                <div className="flex items-center gap-2.5 pb-5 border-b border-white/10">
                  <ShieldCheck className="w-5 h-5 text-solar-400 shrink-0" aria-hidden="true" />
                  <h3 className="font-display text-lg font-bold text-white">
                    Why Choose TAWKAN?
                  </h3>
                </div>

                <ul className="mt-6 space-y-5">
                  {WHY_CHOOSE_POINTS.map((point) => (
                    <li key={point.title} className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-5 h-5 text-solar-400 shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="text-sm font-semibold text-white">{point.title}</p>
                        <p className="mt-0.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {point.detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section: Asymmetric Bento Grid with Editorial Numbering */}
      <section id="services" className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-amber-700 tracking-wide">Core Capabilities</p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-900 [text-wrap:balance]">
                Electrical &amp; Solar Services Built for Lagos Properties
              </h2>
            </div>
            <p className="text-sm text-slate-600 max-w-sm">
              Select any service below to pre-fill your site survey request with the exact scope.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => {
              if (service.featured && service.image) {
                return (
                  <article
                    key={service.id}
                    className="md:col-span-2 bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col sm:flex-row"
                  >
                    <div className="sm:w-2/5 relative min-h-[220px] sm:min-h-full bg-navy-900 shrink-0">
                      <SafeImage
                        src={service.image}
                        alt={service.imageAlt || service.title}
                        fallbackTitle={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                      <div>
                        <h3 className="font-display text-xl font-bold text-navy-900">
                          <span className="text-amber-700 mr-1.5 font-mono text-base tabular-nums">
                            {service.number}
                          </span>
                          {service.title}
                        </h3>
                        <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                          {service.summary}
                        </p>
                        <ul className="mt-4 space-y-2">
                          {service.deliverables.map((line) => (
                            <li
                              key={line}
                              className="flex items-start gap-2 text-xs sm:text-sm text-slate-700"
                            >
                              <CheckCircle2
                                className="w-4 h-4 text-amber-600 shrink-0 mt-0.5"
                                aria-hidden="true"
                              />
                              <span>{line}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-100">
                        <button
                          type="button"
                          onClick={() => onSelectService(service.title)}
                          className="inline-flex items-center gap-1.5 text-sm font-bold text-navy-900 hover:text-amber-700 transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm"
                        >
                          <span>Request Quote for This Service</span>
                          <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              }

              return (
                <article
                  key={service.id}
                  className="md:col-span-1 lg:col-span-1 bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy-900">
                      <span className="text-amber-700 mr-1.5 font-mono text-sm tabular-nums">
                        {service.number}
                      </span>
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">{service.summary}</p>
                    <ul className="mt-4 space-y-1.5">
                      {service.deliverables.map((line) => (
                        <li key={line} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2
                            className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => onSelectService(service.title)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 hover:text-amber-700 transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm"
                    >
                      <span>Book Assessment</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
