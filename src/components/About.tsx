import { Award, Users, Briefcase, GraduationCap } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: '3+ Years',
      description: 'DevOps Experience'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: '3 Certifications',
      description: 'AWS & Terraform'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'AWS Trainer',
      description: 'Since 2022'
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'B.Tech',
      description: 'Computer Science'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl hover:shadow-lg transition-all transform hover:-translate-y-1"
            >
              <div className="inline-flex p-4 bg-blue-600 text-white rounded-full mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Professional Summary</h3>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                As a Certified AWS & DevOps Engineer, I specialize in designing and managing robust cloud
                infrastructure that powers modern applications. My expertise spans the entire DevOps lifecycle,
                from infrastructure provisioning to continuous deployment and monitoring.
              </p>
              <p>
                I have a proven track record of implementing automated CI/CD pipelines that have reduced
                deployment times by up to 40%, while maintaining 99.9% uptime through strategic use of
                containerization, orchestration, and cloud-native services.
              </p>
              <p>
                Beyond my engineering work, I am passionate about knowledge sharing and have been training
                students and professionals in AWS and DevOps practices since 2022. I guide learners through
                hands-on projects and help them achieve industry-recognized certifications.
              </p>
              <p>
                My approach combines technical excellence with practical business outcomes, ensuring that
                infrastructure investments deliver measurable value through improved security, scalability,
                and cost efficiency.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl p-6 border-2 border-slate-200">
            <p className="text-slate-700 font-semibold mb-2">Education</p>
            <p className="text-lg font-bold text-slate-900">Bachelor of Technology in Computer Science Engineering</p>
            <p className="text-slate-600">Rajiv Gandhi University of Knowledge Technologies IIIT Srikakulam</p>
            <p className="text-slate-500 mt-1">Graduated: 2023 | CGPA: 7.4</p>
          </div>
        </div>
      </div>
    </section>
  );
}
