import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiDownload, FiPhone, FiGithub, FiLinkedin, FiExternalLink, FiSend } from 'react-icons/fi';
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
            className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent"
          >
            AI-powered growth for startups and agencies
          </motion.h1>

          <motion.p 
            variants={fadeInUp} 
            className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            I combine AI tools, modern web development, and performance-driven digital marketing to
            build products and campaigns that move the needle. Whether you need a prototype, a
            marketing funnel, or automation to scale, I create practical solutions that deliver results.
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
            className="mt-8 p-4 rounded-lg bg-surface/50 border border-border/50"
          >
            <div className="text-sm text-muted-foreground">
              <strong className="text-foreground">Specialties:</strong> AI automation, prompt engineering, React, Next.js, Headless CMS,
              SEO, paid ads (PPC), analytics & growth experiments.
            </div>
          </motion.div>
        </motion.section>

        <motion.aside 
          initial={{ opacity: 0, x: 30 }} 
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-96"
        >
          <div className="gradient-surface rounded-2xl p-6 shadow-lg border border-border/50">
            <div className="text-center mb-6">
              <img 
                src={profilePhoto} 
                alt="Varney Fahnbulleh - AI Developer and Digital Marketing Expert"
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-brand-primary/20 shadow-glow"
              />
              <h3 className="font-semibold text-lg">Varney Fahnbulleh</h3>
              <p className="text-sm text-muted-foreground">AI & Growth Specialist</p>
            </div>

            <div className="rounded-lg border border-border bg-surface p-4">
              <h4 className="text-sm font-medium text-muted-foreground">Availability</h4>
              <p className="mt-2 font-medium">Open for freelance consulting & select partnerships</p>

              <div className="mt-4 space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Typical engagement</span>
                  <span className="font-medium">4–12 weeks</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Focus</span>
                  <span className="font-medium text-brand-primary">AI + Growth</span>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <a href="mailto:varney@example.com" className="flex-1 btn-primary justify-center">
                  Start a project
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
            I started my career in digital marketing, building campaigns that grew audiences and
            revenue for small businesses. As AI tools matured, I began integrating automation and
            generative workflows into my work — everything from intelligent lead scoring to
            auto-generating landing page variants and streamlining content pipelines.
          </motion.p>

          <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed">
            Today I bridge strategy and execution: designing fast, SEO-friendly sites, launching
            data-driven marketing experiments, and shipping AI-powered solutions that reduce
            manual work and increase conversion. I love working with founders and teams who care
            about outcomes and are ready to iterate quickly.
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
              AI-first approach to growth, product design, and marketing execution.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "AI & Automation",
                  skills: [
                    "Prompt engineering & LLM integrations",
                    "Automation: Make, Zapier, RPA patterns",
                    "AI content workflows & personalization"
                  ]
                },
                {
                  title: "Web Development",
                  skills: [
                    "React, Next.js, Vite",
                    "Headless CMS (Strapi, Sanity, Contentful)",
                    "Performance & accessibility-first build"
                  ]
                },
                {
                  title: "Digital Marketing",
                  skills: [
                    "SEO, technical SEO audits",
                    "PPC strategy & conversion optimization",
                    "Analytics, attribution & CRO experiments"
                  ]
                },
                {
                  title: "Data & Tools",
                  skills: [
                    "Google Analytics / GA4, Looker Studio",
                    "SQL basics, data-driven A/B testing",
                    "Figma, design systems, rapid prototyping"
                  ]
                }
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  variants={fadeInUp}
                  className="p-6 rounded-lg gradient-surface border border-border/50 shadow-sm hover:shadow-md transition-all"
                >
                  <h4 className="font-semibold mb-3 text-brand-primary">{category.title}</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="leading-relaxed">{skill}</li>
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
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-12">Selected Case Studies</motion.h2>

          <div className="space-y-8">
            {[
              {
                title: "Growth automation for a SaaS launch",
                description: "Built an AI-assisted onboarding funnel that personalized email content and onboarding tasks based on user signals.",
                impact: "Increased trial-to-paid conversion by 24% within 8 weeks.",
                tech: "React, Next.js, HubSpot, custom LLM prompts, Zapier.",
                role: "Strategy, implementation, A/B testing.",
                highlights: ["Personalized onboarding emails", "Dynamic content via API", "Automated lead scoring"]
              },
              {
                title: "SEO + Content pipeline for early-stage marketplace",
                description: "Launched a content-driven growth strategy using automated topic clustering and data-informed content briefs.",
                impact: "Organic sessions grew 3x in 6 months; key marketplace pages moved into top-5 SERP for target queries.",
                tech: "Headless CMS, Next.js, custom crawl reports, LLM-assisted brief generation.",
                role: "Content strategy, tooling, technical SEO fixes.",
                highlights: ["Automated brief generator", "Topic cluster map", "Edge-cached landing pages"]
              },
              {
                title: "Landing page A/B system for an agency client",
                description: "Designed and built a rapid A/B testing workflow for high-traffic landing pages and used AI to propose and generate variations.",
                impact: "Improved lead capture rate by 18% after 4 weeks of iterative tests.",
                tech: "React, Vercel, Optimizely-style experiment setup, LLM-driven copy variants.",
                role: "Frontend, experiment design, copy generation.",
                highlights: ["Data-backed creative", "Automated variant generation", "Fast deployment pipeline"]
              },
              {
                title: "Prototype — AI-powered sales assistant",
                description: "Developed a prototype assistant that summarizes meetings, drafts follow-ups, and surfaces next-best actions for SDRs.",
                impact: "Pilot users reported a 30% time savings on follow-ups.",
                tech: "Node, OpenAI, React dashboard, simple vector search.",
                role: "Product direction, MVP build, user testing.",
                highlights: ["Meeting summarization", "Next action recommendations", "Easy export to CRM"]
              }
            ].map((project, index) => (
              <motion.article
                key={index}
                variants={fadeInUp}
                className="grid lg:grid-cols-3 gap-8 p-6 rounded-lg border border-border bg-surface shadow-sm hover:shadow-md transition-all"
              >
                <div className="lg:col-span-2 space-y-4">
                  <h3 className="text-xl font-semibold text-brand-primary">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  <div className="space-y-3 text-sm">
                    <div><strong className="text-foreground">Impact:</strong> <span className="text-muted-foreground">{project.impact}</span></div>
                    <div><strong className="text-foreground">Tech:</strong> <span className="text-muted-foreground">{project.tech}</span></div>
                    <div><strong className="text-foreground">Role:</strong> <span className="text-muted-foreground">{project.role}</span></div>
                  </div>
                </div>

                <aside className="lg:col-span-1">
                  <div className="text-sm">
                    <div className="font-semibold mb-3 text-brand-primary">Highlights</div>
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
                  quote: "Varney quickly understood our goals and built a growth-ready funnel. His AI-driven approach cut manual work in half and lifted conversions.",
                  author: "Alex K., Head of Growth at BrightMarket"
                },
                {
                  quote: "Practical, fast, and communicative. Delivered a clean, SEO-first site and a content plan that started ranking in weeks.",
                  author: "Priya S., Founder, MarketLane"
                }
              ].map((testimonial, index) => (
                <motion.blockquote
                  key={index}
                  variants={fadeInUp}
                  className="p-6 rounded-lg bg-surface border border-border shadow-sm"
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
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-4">Let's Work Together</motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8">
            I help startups and agencies ship AI-infused products and marketing that scale. 
            Reach out for consulting, partnerships, or freelance work.
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div variants={fadeInUp} className="p-6 rounded-lg border border-border bg-surface">
              <h4 className="font-semibold mb-4">Get in touch</h4>
              <p className="text-sm text-muted-foreground mb-6">Email is best — I typically respond within 48 hours.</p>

              <div className="space-y-4 text-sm">
                {[
                  { icon: FiMail, label: "varney@example.com", href: "mailto:varney@example.com" },
                  { icon: FiPhone, label: "+1 (234) 567-890", href: "tel:+1234567890" },
                  { icon: FiLinkedin, label: "linkedin.com/in/varney", href: "https://www.linkedin.com/in/varney" },
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

            <motion.form variants={fadeInUp} onSubmit={handleSubmit} className="p-6 rounded-lg border border-border bg-surface">
              <h4 className="font-semibold mb-4">Quick message</h4>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Your name</label>
                  <input 
                    id="name"
                    type="text"
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:ring-2 focus:ring-ring focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    id="email"
                    type="email"
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:ring-2 focus:ring-ring focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    id="message"
                    rows={4}
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
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