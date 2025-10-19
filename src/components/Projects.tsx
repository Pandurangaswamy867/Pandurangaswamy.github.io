import { projects } from '../data/portfolio';
import { Rocket, CheckCircle2 } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Real-world implementations showcasing expertise in cloud architecture, automation, and scalability
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-2xl hover:shadow-blue-500/20 transition-all border border-slate-700"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-xl">
                  <Rocket className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h3>
                  <p className="text-lg text-blue-400 font-semibold">{project.subtitle}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-700 text-slate-200 rounded-lg text-sm font-medium border border-slate-600 hover:border-blue-500 hover:bg-slate-700/80 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-4">
                  Key Achievements
                </h4>
                <div className="space-y-3">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      </div>
                      <p className="text-slate-300 leading-relaxed">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
            <p className="text-xl font-bold mb-2">Looking for more details?</p>
            <p className="text-slate-400">
              Contact me to discuss these projects and how similar solutions can benefit your organization
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
