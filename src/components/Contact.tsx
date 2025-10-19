import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Interested in cloud consulting, DevOps training, or project collaboration? Let's connect!
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>

              <div className="space-y-4">
                <a
                  href="mailto:vuligittipandu@gmail.com"
                  className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors group"
                >
                  <div className="p-3 bg-blue-600 text-white rounded-lg group-hover:bg-blue-700 transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 font-semibold">Email</p>
                    <p className="text-slate-900 font-medium">vuligittipandu@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+918106809841"
                  className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-emerald-50 transition-colors group"
                >
                  <div className="p-3 bg-emerald-600 text-white rounded-lg group-hover:bg-emerald-700 transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 font-semibold">Phone</p>
                    <p className="text-slate-900 font-medium">+91 8106809841</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                  <div className="p-3 bg-slate-600 text-white rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 font-semibold">Location</p>
                    <p className="text-slate-900 font-medium">Andhra Pradesh, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-200">
                <p className="text-sm text-slate-600 font-semibold mb-4">Connect on Social Media</p>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/pandurangaswamy-vuligitti"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-all transform hover:scale-110"
                    aria-label="GitHub"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-emerald-600 rounded-2xl p-8 shadow-md text-white">
              <h3 className="text-2xl font-bold mb-6">Services Offered</h3>

              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <h4 className="font-bold text-lg mb-2">Cloud Architecture & Consulting</h4>
                  <p className="text-sm text-white/90">
                    Design and implement scalable, secure AWS infrastructure tailored to your needs
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <h4 className="font-bold text-lg mb-2">DevOps Implementation</h4>
                  <p className="text-sm text-white/90">
                    Build CI/CD pipelines, automate deployments, and optimize development workflows
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <h4 className="font-bold text-lg mb-2">AWS Training & Mentorship</h4>
                  <p className="text-sm text-white/90">
                    Hands-on training sessions from fundamentals to advanced cloud concepts
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <h4 className="font-bold text-lg mb-2">Infrastructure Automation</h4>
                  <p className="text-sm text-white/90">
                    Terraform-based IaC solutions for repeatable, version-controlled infrastructure
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center bg-white rounded-2xl p-8 shadow-md">
            <Send className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to Transform Your Infrastructure?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Whether you need cloud consulting, DevOps implementation, or AWS training,
              I'm here to help you achieve your goals with proven expertise and practical solutions.
            </p>
            <a
              href="mailto:vuligittipandu@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Send Me an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
