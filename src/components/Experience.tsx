import { experiences } from '../data/portfolio';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="p-4 bg-gradient-to-br from-blue-600 to-emerald-600 text-white rounded-xl">
                    <Briefcase className="w-8 h-8" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{exp.title}</h3>
                    <p className="text-lg font-semibold text-blue-600 mb-2">{exp.company}</p>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <div key={respIndex} className="flex gap-3">
                        <div className="flex-shrink-0 mt-1.5">
                          <div className="w-2 h-2 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-full"></div>
                        </div>
                        <p className="text-slate-700 leading-relaxed">{resp}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {index === 0 && (
                <div className="mt-6 pt-6 border-t border-slate-300">
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-semibold text-sm">
                      40% Deployment Time Reduction
                    </span>
                    <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg font-semibold text-sm">
                      99.9% Uptime Achievement
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
