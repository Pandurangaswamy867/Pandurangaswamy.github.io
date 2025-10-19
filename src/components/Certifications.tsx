import { certifications } from '../data/portfolio';
import { Award, Cloud, Code, Box } from 'lucide-react';

const iconMap: { [key: string]: JSX.Element } = {
  cloud: <Cloud className="w-12 h-12" />,
  code: <Code className="w-12 h-12" />,
  box: <Box className="w-12 h-12" />
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Industry-recognized certifications validating expertise in cloud and infrastructure technologies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 border-2 border-slate-200 hover:border-blue-400"
            >
              <div className="inline-flex p-6 bg-gradient-to-br from-blue-600 to-emerald-600 text-white rounded-2xl mb-6 shadow-lg">
                {iconMap[cert.icon]}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                {cert.name}
              </h3>
              <p className="text-slate-600 font-medium">{cert.issuer}</p>
              <div className="mt-6 pt-6 border-t border-slate-300">
                <Award className="w-6 h-6 text-blue-600 mx-auto" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl p-6 border-2 border-slate-200">
            <p className="text-slate-700 font-semibold">
              Committed to continuous learning and staying current with evolving cloud technologies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
