import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiDownload, FiPhone, FiGithub, FiFacebook, FiExternalLink, FiSend, FiServer, FiShield, FiMonitor, FiCpu, FiHardDrive, FiWifi, FiDatabase, FiLock, FiSettings, FiActivity, FiCloud, FiTerminal } from 'react-icons/fi';
import profilePhoto from '@/assets/profile-photo.jpg';

export default function Portfolio() {
  const fadeInUp = { 
    hidden: { opacity: 0, y: 20 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } 
  };
  
  const stagger = { 
    visible: { 
      transition: { staggerChildren: 0.1 } 
    } 
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with actual form handling
    alert('Thanks for your message! I\'ll get back to you soon.');
  };

  return (
    <main className="min-h-screen bg-gradient-hero text-foreground">
      {/* NAVIGATION */}
      <nav className="w-full glass sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.a 
            href="#hero" 
            className="text-xl font-bold text-brand-primary"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Varney Fahnbulleh
          </motion.a>
          
          <div className="hidden md:flex gap-8 items-center text-sm font-medium">
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Work</a>
            <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">Skills</a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
            <a href="#contact" className="btn-primary">
              <FiMail className="w-4 h-4" />
              Contact
            </a>
          </div>
          
          <div className="md:hidden">
            <a href="#contact" className="btn-primary">
              <FiMail className="w-4 h-4" />
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header id="hero" className="max-w-6xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-start gap-12">
        <motion.section 
          initial="hidden" 
          animate="visible" 
          variants={stagger} 
          className="flex-1"
        >
          <motion.h1 
            variants={fadeInUp} 
            className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-brand-primary via-brand-primary-light to-brand-accent bg-clip-text text-transparent text-neon"
          >
            Enterprise Infrastructure & Network Solutions
          </motion.h1>

          <motion.p 
            variants={fadeInUp} 
            className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            Experienced System Administrator and Network Engineer specializing in enterprise infrastructure, 
            network security, and high-availability systems. I design, implement, and maintain robust IT 
            environments that keep businesses running smoothly and securely.
          </motion.p>

          <motion.div 
            variants={fadeInUp} 
            className="mt-8 flex flex-wrap gap-4"
          >
            <a href="#projects" className="btn-hero">
              See my work
            </a>
            <a href="/resume.pdf" className="btn-secondary">
              <FiDownload className="w-4 h-4" />
              Resume
            </a>
          </motion.div>

          <motion.div 
            variants={fadeInUp} 
            className="mt-8 p-4 rounded-xl glass"
          >
            <div className="text-sm text-muted-foreground">
              <strong className="text-brand-primary">Specialties:</strong> Windows Server, Linux Administration, Network Security, 
              VMware vSphere, Cisco Networking, Active Directory, PowerShell Automation, Disaster Recovery.
            </div>
          </motion.div>
        </motion.section>

        <motion.aside 
          initial={{ opacity: 0, x: 30 }} 
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-96"
        >
          <div className="gradient-surface rounded-2xl p-6 shadow-neon">
            <div className="text-center mb-6">
              <img 
                src={profilePhoto} 
                alt="Varney Fahnbulleh - AI Developer and Digital Marketing Expert"
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-brand-primary/40 shadow-neon"
              />
              <h3 className="font-semibold text-lg text-brand-primary">Varney Fahnbulleh</h3>
              <p className="text-sm text-muted-foreground">Senior System Administrator & Network Engineer</p>
            </div>

            <div className="rounded-xl glass p-4">
              <h4 className="text-sm font-medium text-brand-primary">Availability</h4>
              <p className="mt-2 font-medium">Available for contract work & infrastructure consulting</p>

              <div className="mt-4 space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Typical project</span>
                  <span className="font-medium">2–6 months</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Focus</span>
                  <span className="font-medium text-brand-primary">Infrastructure + Security</span>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <a href="mailto:humbletech2019@gmail.com" className="flex-1 btn-primary justify-center">
                  Discuss Project
                </a>
                <a href="#contact" className="flex-1 btn-secondary justify-center">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </motion.aside>
      </header>

      {/* ABOUT SECTION */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-16">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={stagger}
        >
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-6">About</motion.h2>
          
          <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed mb-6">
            With over 8 years of experience in enterprise IT, I've built and maintained critical 
            infrastructure for organizations ranging from small businesses to large corporations. 
            My expertise spans server administration, network design, security implementation, 
            and disaster recovery planning.
          </motion.p>

          <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed">
            I specialize in creating robust, scalable infrastructure solutions that minimize downtime 
            and maximize performance. Whether it's migrating to cloud platforms, implementing security 
            protocols, or optimizing network performance, I deliver solutions that keep businesses 
            running efficiently and securely.
          </motion.p>
        </motion.div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="bg-surface/30 border-y border-border/50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-4">Skills & Tools</motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-2xl mb-8">
              Enterprise-grade infrastructure management with focus on security, reliability, and performance.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "System Administration",
                  icon: FiServer,
                  skills: [
                    "Windows Server 2012-2022",
                    "Linux (RHEL, Ubuntu, CentOS)",
                    "Active Directory & Group Policy",
                    "PowerShell & Bash Scripting"
                  ]
                },
                {
                  title: "Network Engineering",
                  icon: FiWifi,
                  skills: [
                    "Cisco Routing & Switching",
                    "VLAN Configuration & Management",
                    "VPN Setup & Maintenance",
                    "Network Monitoring & Troubleshooting"
                  ]
                },
                {
                  title: "Security & Compliance",
                  icon: FiShield,
                  skills: [
                    "Firewall Configuration",
                    "Security Policies & Procedures",
                    "Vulnerability Assessment",
                    "Compliance (SOX, HIPAA, PCI-DSS)"
                  ]
                },
                {
                  title: "Virtualization & Cloud",
                  icon: FiCloud,
                  skills: [
                    "VMware vSphere & Hyper-V",
                    "AWS & Azure Administration",
                    "Container Technologies (Docker)",
                    "Backup & Disaster Recovery"
                  ]
                }
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  variants={fadeInUp}
                  className="p-6 rounded-xl gradient-surface shadow-lg hover:shadow-neon transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <category.icon className="w-5 h-5 text-brand-primary" />
                    <h4 className="font-semibold text-brand-primary">{category.title}</h4>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="leading-relaxed flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary/60"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-12">Featured Infrastructure Projects</motion.h2>

          <div className="space-y-8">
            {[
              {
                title: "Enterprise Network Infrastructure Overhaul",
                description: "Led complete network redesign for a 500+ employee organization, implementing redundant systems and enhanced security protocols.",
                impact: "Reduced network downtime by 95% and improved overall network performance by 60%.",
                tech: "Cisco Catalyst switches, FortiGate firewalls, VMware vSphere, Windows Server 2019.",
                role: "Lead Network Engineer, project management, implementation.",
                highlights: ["Zero-downtime migration", "Redundant network paths", "Enhanced security posture"],
                icon: FiWifi
              },
              {
                title: "Hybrid Cloud Migration & Disaster Recovery",
                description: "Migrated critical business applications to AWS while maintaining on-premises infrastructure for sensitive data.",
                impact: "Achieved 99.9% uptime SLA and reduced infrastructure costs by 35%.",
                tech: "AWS EC2, RDS, S3, VPC, Site-to-Site VPN, VMware vSphere, Veeam Backup.",
                role: "Systems Architect, migration planning, disaster recovery design.",
                highlights: ["Seamless cloud integration", "Automated backup solutions", "Multi-site redundancy"],
                icon: FiCloud
              },
              {
                title: "Active Directory Security Hardening",
                description: "Implemented comprehensive AD security measures including privileged access management and security monitoring.",
                impact: "Eliminated security vulnerabilities and achieved compliance with industry standards.",
                tech: "Active Directory, Group Policy, PowerShell DSC, Microsoft SCOM, CyberArk PAM.",
                role: "Security implementation, policy design, monitoring setup.",
                highlights: ["Privileged access controls", "Real-time monitoring", "Compliance reporting"],
                icon: FiShield
              },
              {
                title: "Virtualization Infrastructure Consolidation",
                description: "Consolidated 40+ physical servers into a high-availability VMware environment with centralized management.",
                impact: "Reduced hardware costs by 70% and improved resource utilization by 85%.",
                tech: "VMware vSphere 7.0, vCenter, vSAN, Cisco UCS servers, NetApp storage.",
                role: "Virtualization architect, implementation lead, performance optimization.",
                highlights: ["Hardware consolidation", "High availability setup", "Centralized management"],
                icon: FiServer
              }
            ].map((project, index) => (
              <motion.article
                key={index}
                variants={fadeInUp}
                className="grid lg:grid-cols-3 gap-8 p-6 rounded-xl glass shadow-lg hover:shadow-neon transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="lg:col-span-2 space-y-4">
                  <div className="flex items-center gap-3">
                    <project.icon className="w-6 h-6 text-brand-primary" />
                    <h3 className="text-xl font-semibold text-brand-primary">{project.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  <div className="space-y-3 text-sm">
                    <div><strong className="text-foreground">Impact:</strong> <span className="text-muted-foreground">{project.impact}</span></div>
                    <div><strong className="text-foreground">Technologies:</strong> <span className="text-muted-foreground">{project.tech}</span></div>
                    <div><strong className="text-foreground">Role:</strong> <span className="text-muted-foreground">{project.role}</span></div>
                  </div>
                </div>

                <aside className="lg:col-span-1">
                  <div className="text-sm">
                    <div className="font-semibold mb-3 text-brand-primary">Key Achievements</div>
                    <div className="space-y-2 text-muted-foreground">
                      {project.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </aside>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="bg-gradient-to-br from-surface/50 to-background border-y border-border/50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-8">What People Say</motion.h2>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  quote: "Varney's expertise in network infrastructure saved us from multiple potential disasters. His proactive monitoring and security implementation gave us complete peace of mind.",
                  author: "Marcus Thompson, IT Director at TechCorp Solutions"
                },
                {
                  quote: "The server migration was flawless. Zero downtime, enhanced performance, and excellent documentation. Varney is a true professional who delivers on his promises.",
                  author: "Sarah Chen, CTO at DataFlow Systems"
                }
              ].map((testimonial, index) => (
                <motion.blockquote
                  key={index}
                  variants={fadeInUp}
                  className="p-6 rounded-xl glass shadow-lg hover:shadow-glow transition-all duration-300"
                >
                  <p className="text-muted-foreground leading-relaxed mb-4">"{testimonial.quote}"</p>
                  <footer className="text-sm font-medium text-brand-primary">— {testimonial.author}</footer>
                </motion.blockquote>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <footer id="contact" className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-4">Ready to Secure Your Infrastructure?</motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8">
            I help organizations build robust, secure, and scalable IT infrastructure. 
            Contact me for system administration, network engineering, or infrastructure consulting.
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div variants={fadeInUp} className="p-6 rounded-xl glass shadow-lg">
              <h4 className="font-semibold mb-4 text-brand-primary">Get in touch</h4>
              <p className="text-sm text-muted-foreground mb-6">Available for infrastructure projects and consultations — typically respond within 24 hours.</p>

              <div className="space-y-4 text-sm">
                {[
                  { icon: FiMail, label: "humbletech2019@gmail.com", href: "mailto:humbletech2019@gmail.com" },
                  { icon: FiPhone, label: "+233245916697", href: "tel:+233245916697" },
                  { icon: FiFacebook, label: "facebook.com/varney.fahnbulleh.52", href: "https://web.facebook.com/varney.fahnbulleh.52" },
                  { icon: FiGithub, label: "github.com/varney", href: "https://github.com/varney" }
                ].map((contact, index) => (
                  <div key={index} className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                    <contact.icon className="w-4 h-4" />
                    <a href={contact.href} className="hover:text-brand-primary transition-colors">
                      {contact.label}
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <a href="/resume.pdf" className="btn-secondary">
                  <FiDownload className="w-4 h-4" />
                  Resume
                </a>
                <a href="#projects" className="btn-primary">
                  <FiExternalLink className="w-4 h-4" />
                  Case Studies
                </a>
              </div>
            </motion.div>

            <motion.form variants={fadeInUp} onSubmit={handleSubmit} className="p-6 rounded-xl glass shadow-lg">
              <h4 className="font-semibold mb-4 text-brand-primary">Quick message</h4>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Your name</label>
                  <input 
                    id="name"
                    type="text"
                    className="w-full rounded-xl border border-brand-primary/20 bg-surface/50 backdrop-blur-sm px-3 py-2 text-sm focus:ring-2 focus:ring-brand-primary focus:border-brand-primary/50 transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    id="email"
                    type="email"
                    className="w-full rounded-xl border border-brand-primary/20 bg-surface/50 backdrop-blur-sm px-3 py-2 text-sm focus:ring-2 focus:ring-brand-primary focus:border-brand-primary/50 transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    id="message"
                    rows={4}
                    className="w-full rounded-xl border border-brand-primary/20 bg-surface/50 backdrop-blur-sm px-3 py-2 text-sm focus:ring-2 focus:ring-brand-primary focus:border-brand-primary/50 transition-all resize-none"
                    required
                  />
                </div>

                <div className="flex gap-3">
                  <button type="submit" className="btn-primary">
                    <FiSend className="w-4 h-4" />
                    Send message
                  </button>
                  <button type="reset" className="btn-secondary">
                    Clear
                  </button>
                </div>
              </div>
            </motion.form>
          </div>

          <motion.div variants={fadeInUp} className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Varney Fahnbulleh — AI-powered growth & web development
          </motion.div>
        </motion.div>
      </footer>
    </main>
  );
}