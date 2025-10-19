import { skills } from '../data/portfolio';
import { Cloud, Box, GitBranch, Container, Settings, Activity, Shield, Code, Hammer, Database } from 'lucide-react';

const iconMap: { [key: string]: JSX.Element } = {
  'Cloud Platforms': <Cloud className="w-6 h-6" />,
  'Infrastructure as Code': <Box className="w-6 h-6" />,
  'CI/CD Tools': <GitBranch className="w-6 h-6" />,
  'Containerization & Orchestration': <Container className="w-6 h-6" />,
  'Configuration Management': <Settings className="w-6 h-6" />,
  'Monitoring & Observability': <Activity className="w-6 h-6" />,
  'Security Tools': <Shield className="w-6 h-6" />,
  'Version Control': <Code className="w-6 h-6" />,
  'Scripting & Programming': <Code className="w-6 h-6" />,
  'Build & Artifact Management': <Hammer className="w-6 h-6" />
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Comprehensive expertise across the modern DevOps and Cloud ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-blue-600 to-emerald-600 text-white rounded-lg">
                  {iconMap[skillGroup.category] || <Database className="w-6 h-6" />}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{skillGroup.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Operating Systems</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg font-semibold">
              Linux (Ubuntu, CentOS)
            </span>
            <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg font-semibold">
              Windows Server
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
