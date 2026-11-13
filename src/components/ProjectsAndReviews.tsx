import { useState } from 'react';
import { ArrowUpRight, CheckCircle2, X } from 'lucide-react';
import {
  PROJECTS,
  ProjectCaseStudy,
  ProjectCategory,
  TESTIMONIALS,
} from '../data/tawkanData';
import { SafeImage } from './SafeImage';

interface ProjectsAndReviewsProps {
  onRequestSimilar: (projectTitle: string, category: string) => void;
}

const CATEGORIES: ProjectCategory[] = [
  'All Projects',
  'Solar & Inverters',
  'Commercial Wiring',
  'Interior Lighting',
];

export function ProjectsAndReviews({ onRequestSimilar }: ProjectsAndReviewsProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All Projects');
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);

  const filteredProjects =
    activeCategory === 'All Projects'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Projects & Gallery Section */}
      <section id="projects" className="py-16 lg:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div>
              <p className="text-sm font-semibold text-amber-700 tracking-wide">
                Recent Installations
              </p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-900 [text-wrap:balance]">
                Completed Electrical &amp; Solar Projects Across Lagos
              </h2>
            </div>

            {/* Interactive Segmented Filter Controls */}
            <div
              role="group"
              aria-label="Filter projects by category"
              className="inline-flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-xl border border-slate-200 self-start lg:self-auto"
            >
              {CATEGORIES.map((category) => {
                const active = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    aria-pressed={active}
                    className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                      active
                        ? 'bg-navy-900 text-white shadow-xs'
                        : 'text-slate-600 hover:text-navy-900 hover:bg-white/70'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col"
              >
                <div className="relative aspect-[16/10] bg-navy-900 overflow-hidden">
                  <SafeImage
                    src={project.image}
                    alt={project.alt}
                    fallbackTitle={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Zero-pill unboxed metadata with typographic separators */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-slate-500">
                      <span>{project.location}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono tabular-nums text-slate-700">
                        {project.systemSpec}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{project.duration}</span>
                    </div>

                    <h3 className="mt-2.5 font-display text-xl font-bold text-navy-900">
                      {project.title}
                    </h3>

                    <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <p className="text-xs font-semibold text-navy-900 tabular-nums">
                      Outcome: <span className="text-amber-700">{project.outcomeMetric}</span>
                    </p>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 hover:text-amber-700 transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm self-start sm:self-auto"
                    >
                      <span>View Technical Specs</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Client Reviews Section (Adjacent Proof) */}
      <section id="reviews" className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-semibold text-amber-700 tracking-wide">Client Feedback</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-900 [text-wrap:balance]">
              Trusted by Homeowners and Facility Leads Across Lagos
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((item) => (
              <blockquote
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <p className="text-xs font-semibold text-amber-700 tracking-wide">
                    {item.projectType}
                  </p>
                  <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                    “{item.quote}”
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 space-y-3">
                  <p className="text-xs font-semibold text-navy-900">{item.outcome}</p>
                  <div>
                    <p className="font-display text-sm font-bold text-navy-900">{item.name}</p>
                    <p className="text-xs text-slate-500">
                      {item.role} · {item.location}
                    </p>
                  </div>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specification Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/75 backdrop-blur-xs"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-2xl border border-slate-200 max-w-2xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] bg-navy-900">
              <SafeImage
                src={selectedProject.image}
                alt={selectedProject.alt}
                fallbackTitle={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="absolute top-3 right-3 w-10 h-10 rounded-lg bg-navy-950/80 text-white hover:bg-navy-900 flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-solar-400"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-slate-500">
                <span>{selectedProject.category}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedProject.location}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono tabular-nums text-slate-700">
                  {selectedProject.systemSpec}
                </span>
              </div>

              <h3
                id="project-modal-title"
                className="mt-2 font-display text-2xl font-extrabold text-navy-900"
              >
                {selectedProject.title}
              </h3>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="mt-5 pt-5 border-t border-slate-100">
                <p className="text-sm font-bold text-navy-900 mb-3">
                  Engineering Execution Highlights
                </p>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle2
                        className="w-4 h-4 text-amber-600 shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100">
                <span className="text-xs font-semibold text-amber-700">
                  {selectedProject.outcomeMetric}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    const proj = selectedProject;
                    setSelectedProject(null);
                    onRequestSimilar(proj.title, proj.category);
                  }}
                  className="px-5 py-2.5 text-xs font-bold text-navy-950 bg-solar-500 hover:bg-solar-400 rounded-lg transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-900"
                >
                  Request Similar Installation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
