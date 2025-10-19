import { Cloud, Mail, Linkedin, Github, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-lg">
                <Cloud className="w-6 h-6" />
              </div>
              <span className="font-bold text-xl">Y.V. Pandurangaswamy</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              AWS Certified DevOps Engineer specializing in cloud architecture,
              automation, and infrastructure optimization.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-slate-400 hover:text-blue-400 transition-colors">
                About Me
              </a>
              <a href="#skills" className="block text-slate-400 hover:text-blue-400 transition-colors">
                Technical Skills
              </a>
              <a href="#projects" className="block text-slate-400 hover:text-blue-400 transition-colors">
                Projects
              </a>
              <a href="#contact" className="block text-slate-400 hover:text-blue-400 transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <div className="flex gap-4 mb-4">
              <a
                href="mailto:vuligittipandu@gmail.com"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all transform hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/pandurangaswamy-vuligitti"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
            <p className="text-slate-400 text-sm">
              vuligittipandu@gmail.com<br />
              +91 8106809841
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-400 flex items-center justify-center gap-2">
            <span>&copy; {currentYear} Y.V. Pandurangaswamy. Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>and React</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
