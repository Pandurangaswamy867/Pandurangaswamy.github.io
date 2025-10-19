import { Cloud, Server, Code, Mail, Linkedin, Github } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="mb-8 flex justify-center gap-4">
          <div className="p-3 bg-blue-600/20 rounded-lg backdrop-blur-sm">
            <Cloud className="w-8 h-8 text-blue-400" />
          </div>
          <div className="p-3 bg-emerald-600/20 rounded-lg backdrop-blur-sm">
            <Server className="w-8 h-8 text-emerald-400" />
          </div>
          <div className="p-3 bg-orange-600/20 rounded-lg backdrop-blur-sm">
            <Code className="w-8 h-8 text-orange-400" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-emerald-400 to-orange-400 bg-clip-text text-transparent">
          Y.V. Pandurangaswamy
        </h1>

        <p className="text-2xl md:text-3xl text-slate-300 mb-4">
          AWS Certified DevOps Engineer
        </p>

        <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-3xl mx-auto">
          Cloud Architect | AWS Trainer | Infrastructure Automation Specialist
        </p>

        <p className="text-base md:text-lg text-slate-400 mb-12 max-w-4xl mx-auto leading-relaxed">
          Certified AWS & DevOps Engineer with 3+ years of hands-on experience in designing and managing
          cloud infrastructure, implementing CI/CD pipelines, automating deployments, and containerizing
          applications. Proven ability to deliver scalable, secure, and cost-effective cloud solutions.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="#contact"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/50"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            View Projects
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="mailto:vuligittipandu@gmail.com"
            className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all transform hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/pandurangaswamy-vuligitti"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all transform hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
