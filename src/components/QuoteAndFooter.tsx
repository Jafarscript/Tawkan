import { useEffect, useState, type FormEvent } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  Zap,
} from 'lucide-react';
import { BUSINESS_INFO, LOAD_PRESETS, SERVICES } from '../data/tawkanData';
import { TawkanLogo } from './TawkanLogo';

interface QuoteAndFooterProps {
  preselectedService: string;
  preselectedNotes: string;
}

interface FormState {
  fullName: string;
  phone: string;
  location: string;
  service: string;
  notes: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  location?: string;
}

export function QuoteAndFooter({ preselectedService, preselectedNotes }: QuoteAndFooterProps) {
  const [selectedPresetId, setSelectedPresetId] = useState<string>(LOAD_PRESETS[1].id);
  const activePreset =
    LOAD_PRESETS.find((preset) => preset.id === selectedPresetId) || LOAD_PRESETS[0];

  const [form, setForm] = useState<FormState>({
    fullName: '',
    phone: '',
    location: '',
    service: SERVICES[0].title,
    notes: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedRequest, setSubmittedRequest] = useState<FormState | null>(null);

  useEffect(() => {
    if (preselectedService || preselectedNotes) {
      setForm((prev) => ({
        ...prev,
        service: preselectedService || prev.service,
        notes: preselectedNotes || prev.notes,
      }));
      setSubmittedRequest(null);
    }
  }, [preselectedService, preselectedNotes]);

  function applyPresetToForm() {
    setForm((prev) => ({
      ...prev,
      service: 'Hybrid Solar & Inverter Systems',
      notes: `Estimated property profile: ${activePreset.label} (${activePreset.recommendedKva}, ${activePreset.batteryKwh}, ${activePreset.solarArray}).`,
    }));
    setSubmittedRequest(null);
  }

  function validateForm(values: FormState): FormErrors {
    const nextErrors: FormErrors = {};
    if (values.fullName.trim().length < 2) {
      nextErrors.fullName = 'Enter your full name (at least 2 characters).';
    }
    const digitsOnly = values.phone.replace(/\D/g, '');
    if (digitsOnly.length < 10 || digitsOnly.length > 15) {
      nextErrors.phone = 'Enter a valid Lagos or Nigerian phone number (e.g. 0806 555 5451).';
    }
    if (values.location.trim().length < 3) {
      nextErrors.location = 'Specify your Lagos area or estate (e.g. Lekki Phase 1, Ikeja).';
    }
    return nextErrors;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationErrors = validateForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmittedRequest({ ...form });
  }

  const whatsappSummaryHref = submittedRequest
    ? `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
        `Hello TAWKAN Electrical Installation,\nName: ${submittedRequest.fullName}\nPhone: ${submittedRequest.phone}\nLocation: ${submittedRequest.location}\nService: ${submittedRequest.service}${
          submittedRequest.notes ? `\nNotes: ${submittedRequest.notes}` : ''
        }`
      )}`
    : `https://wa.me/${BUSINESS_INFO.whatsappNumber}`;

  return (
    <>
      {/* Lead Capture, Load Estimator & Direct Contact */}
      <section id="contact" className="py-16 lg:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Quick Solar Sizing Guide + Direct Lagos Contact Channels */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <p className="text-sm font-semibold text-amber-700 tracking-wide">
                  Book a Site Survey
                </p>
                <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-900 [text-wrap:balance]">
                  Request an Engineering Assessment &amp; Quote
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  Speak directly with our Lagos electrical team or use the property sizing guide
                  below before requesting your itemized quotation.
                </p>
              </div>

              {/* Interactive Solar & Load Sizing Quick Selector */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-4 h-4 text-amber-600 shrink-0" aria-hidden="true" />
                  <h3 className="font-display text-sm font-bold text-navy-900">
                    Quick Solar &amp; Inverter Sizing Guide
                  </h3>
                </div>

                <div
                  role="group"
                  aria-label="Select property profile"
                  className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-5"
                >
                  {LOAD_PRESETS.map((preset) => {
                    const active = preset.id === selectedPresetId;
                    return (
                      <button
                        key={preset.id}
                        type="button"
                        onClick={() => setSelectedPresetId(preset.id)}
                        aria-pressed={active}
                        className={`px-3 py-2 text-xs font-semibold rounded-lg border text-left transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                          active
                            ? 'bg-navy-900 text-white border-navy-900'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {preset.label}
                      </button>
                    );
                  })}
                </div>

                <dl className="grid grid-cols-3 gap-3 py-4 border-y border-slate-200">
                  <div>
                    <dt className="text-[11px] font-medium text-slate-500">Inverter</dt>
                    <dd className="mt-0.5 font-mono text-xs sm:text-sm font-semibold text-navy-900 tabular-nums">
                      {activePreset.recommendedKva}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-medium text-slate-500">Battery</dt>
                    <dd className="mt-0.5 font-mono text-xs sm:text-sm font-semibold text-navy-900 tabular-nums">
                      {activePreset.batteryKwh}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-medium text-slate-500">PV Array</dt>
                    <dd className="mt-0.5 font-mono text-xs sm:text-sm font-semibold text-navy-900 tabular-nums">
                      {activePreset.solarArray}
                    </dd>
                  </div>
                </dl>

                <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                  Typical coverage: {activePreset.typicalAppliances}
                </p>

                <button
                  type="button"
                  onClick={applyPresetToForm}
                  className="mt-4 w-full py-2.5 px-4 text-xs font-bold text-navy-900 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  Attach This Spec to Quote Form
                </button>
              </div>

              {/* Direct Contact Channels */}
              <div className="space-y-4 pt-2">
                <a
                  href={BUSINESS_INFO.hotlineHref}
                  className="flex items-center gap-3.5 text-sm text-slate-700 hover:text-navy-900 transition-colors"
                >
                  <span className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-navy-900 shrink-0">
                    <Phone className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs text-slate-500">Direct Hotline</span>
                    <span className="font-bold text-navy-900 tabular-nums">
                      {BUSINESS_INFO.hotlineDisplay}
                    </span>
                  </span>
                </a>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 text-sm text-slate-700 hover:text-navy-900 transition-colors"
                >
                  <span className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-navy-900 shrink-0">
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs text-slate-500">WhatsApp Desk</span>
                    <span className="font-bold text-navy-900 tabular-nums">
                      {BUSINESS_INFO.whatsappDisplay}
                    </span>
                  </span>
                </a>

                <div className="flex items-center gap-3.5 text-sm text-slate-700">
                  <span className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-navy-900 shrink-0">
                    <Clock className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs text-slate-500">Working Hours</span>
                    <span className="font-medium text-navy-900">{BUSINESS_INFO.hours}</span>
                  </span>
                </div>

                <div className="flex items-center gap-3.5 text-sm text-slate-700">
                  <span className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-navy-900 shrink-0">
                    <MapPin className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs text-slate-500">Service Coverage</span>
                    <span className="font-medium text-navy-900">
                      {BUSINESS_INFO.coverageSummary}
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Validated Lead Capture Form */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10">
                {submittedRequest ? (
                  <div className="py-6 space-y-5">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
                    </div>

                    <div>
                      <h3 className="font-display text-2xl font-bold text-navy-900">
                        Site Survey Request Prepared
                      </h3>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                        Thank you, <span className="font-semibold">{submittedRequest.fullName}</span>
                        . Your inquiry details are verified below. Send directly to our Lagos
                        engineering desk on WhatsApp or call{' '}
                        <a
                          href={BUSINESS_INFO.hotlineHref}
                          className="font-bold text-navy-900 underline tabular-nums"
                        >
                          {BUSINESS_INFO.hotlineDisplay}
                        </a>{' '}
                        for immediate dispatch.
                      </p>
                    </div>

                    <dl className="bg-white rounded-xl border border-slate-200 p-5 space-y-2.5 text-sm">
                      <div className="flex justify-between gap-4">
                        <dt className="text-slate-500">Phone</dt>
                        <dd className="font-medium text-navy-900 tabular-nums">
                          {submittedRequest.phone}
                        </dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt className="text-slate-500">Location</dt>
                        <dd className="font-medium text-navy-900">{submittedRequest.location}</dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt className="text-slate-500">Service</dt>
                        <dd className="font-medium text-navy-900 text-right">
                          {submittedRequest.service}
                        </dd>
                      </div>
                      {submittedRequest.notes && (
                        <div className="pt-2 border-t border-slate-100">
                          <dt className="text-slate-500 text-xs mb-1">Project Notes</dt>
                          <dd className="text-slate-700 text-xs leading-relaxed">
                            {submittedRequest.notes}
                          </dd>
                        </div>
                      )}
                    </dl>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <a
                        href={whatsappSummaryHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-navy-950 bg-solar-500 hover:bg-solar-400 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-900"
                      >
                        <MessageCircle className="w-4 h-4" aria-hidden="true" />
                        <span>Send Brief on WhatsApp</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => setSubmittedRequest(null)}
                        className="px-4 py-3 text-sm font-semibold text-slate-700 hover:text-navy-900 bg-white border border-slate-300 rounded-lg transition-colors cursor-pointer"
                      >
                        Edit Request
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div>
                      <h3 className="font-display text-xl font-bold text-navy-900">
                        Free Site Inspection &amp; Estimate Form
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-slate-600">
                        Fill in your property details and our lead engineer will follow up within
                        business hours.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="tawkan-name"
                          className="block text-xs font-semibold text-slate-700 mb-1.5"
                        >
                          Full Name
                        </label>
                        <input
                          id="tawkan-name"
                          type="text"
                          value={form.fullName}
                          onChange={(e) => {
                            setForm({ ...form, fullName: e.target.value });
                            if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                          }}
                          placeholder="e.g. Adebayo Ogunleye"
                          aria-invalid={Boolean(errors.fullName)}
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-navy-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        />
                        {errors.fullName && (
                          <p className="mt-1.5 flex items-center gap-1 text-xs text-red-700 font-medium">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                            <span>{errors.fullName}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="tawkan-phone"
                          className="block text-xs font-semibold text-slate-700 mb-1.5"
                        >
                          Phone / WhatsApp Number
                        </label>
                        <input
                          id="tawkan-phone"
                          type="tel"
                          value={form.phone}
                          onChange={(e) => {
                            setForm({ ...form, phone: e.target.value });
                            if (errors.phone) setErrors({ ...errors, phone: undefined });
                          }}
                          placeholder="e.g. 0806 555 5451"
                          aria-invalid={Boolean(errors.phone)}
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-navy-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        />
                        {errors.phone && (
                          <p className="mt-1.5 flex items-center gap-1 text-xs text-red-700 font-medium">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="tawkan-location"
                          className="block text-xs font-semibold text-slate-700 mb-1.5"
                        >
                          Lagos Location / Area
                        </label>
                        <input
                          id="tawkan-location"
                          type="text"
                          value={form.location}
                          onChange={(e) => {
                            setForm({ ...form, location: e.target.value });
                            if (errors.location) setErrors({ ...errors, location: undefined });
                          }}
                          placeholder="e.g. Lekki Phase 1, Ikeja GRA"
                          aria-invalid={Boolean(errors.location)}
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-navy-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        />
                        {errors.location && (
                          <p className="mt-1.5 flex items-center gap-1 text-xs text-red-700 font-medium">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                            <span>{errors.location}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="tawkan-service"
                          className="block text-xs font-semibold text-slate-700 mb-1.5"
                        >
                          Service Required
                        </label>
                        <select
                          id="tawkan-service"
                          value={form.service}
                          onChange={(e) => setForm({ ...form, service: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-navy-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        >
                          {SERVICES.map((svc) => (
                            <option key={svc.id} value={svc.title}>
                              {svc.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="tawkan-notes"
                        className="block text-xs font-semibold text-slate-700 mb-1.5"
                      >
                        Building Type, Appliances or Project Notes
                      </label>
                      <textarea
                        id="tawkan-notes"
                        rows={4}
                        value={form.notes}
                        onChange={(e) => setForm({ ...form, notes: e.target.value })}
                        placeholder="Describe your property (e.g., 4-bed duplex rewiring, 10 kVA solar inverter inquiry, or DB fault check)..."
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-navy-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-7 py-3.5 text-sm font-bold text-navy-950 bg-solar-500 hover:bg-solar-400 rounded-lg transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-900 focus-visible:ring-offset-2"
                    >
                      Submit Site Survey Request
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiet Footer */}
      <footer className="bg-navy-950 text-slate-300 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
            <div className="md:col-span-5 space-y-4">
              <TawkanLogo variant="dark" showSubtitle={true} />
              <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                Professional electrical wiring, hybrid solar inverter installations, and industrial
                power engineering serving homes and businesses across Lagos State.
              </p>
            </div>

            <div className="md:col-span-3">
              <p className="text-sm font-bold text-white mb-3">
                Navigation
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#about" className="hover:text-solar-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-solar-400 transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-solar-400 transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#reviews" className="hover:text-solar-400 transition-colors">
                    Client Reviews
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-solar-400 transition-colors">
                    Request Quote
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <p className="text-sm font-bold text-white mb-3">
                Lagos Contact Desk
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  Hotline:{' '}
                  <a
                    href={BUSINESS_INFO.hotlineHref}
                    className="text-white font-semibold hover:text-solar-400 tabular-nums"
                  >
                    {BUSINESS_INFO.hotlineDisplay}
                  </a>
                </li>
                <li>
                  WhatsApp:{' '}
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold hover:text-solar-400 tabular-nums"
                  >
                    {BUSINESS_INFO.whatsappDisplay}
                  </a>
                </li>
                <li className="text-slate-400">{BUSINESS_INFO.hours}</li>
                <li className="text-slate-400">Lagos Island &amp; Mainland, Nigeria</li>
              </ul>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-slate-400">
            <p>© {new Date().getFullYear()} TAWKAN Electrical Installation. All rights reserved.</p>
            <p>Safe, Code-Compliant Electrical &amp; Solar Engineering in Lagos</p>
          </div>
        </div>
      </footer>

      {/* Compact Floating WhatsApp Button (matches business mockup, respects <=15% sticky height) */}
      <a
        href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
          'Hello TAWKAN Electrical Installation, I need assistance with an electrical or solar project in Lagos.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with TAWKAN on WhatsApp"
        className="fixed bottom-5 right-5 z-40 w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg flex items-center justify-center transition-transform duration-150 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
      >
        <MessageCircle className="w-6 h-6" aria-hidden="true" />
      </a>
    </>
  );
}
