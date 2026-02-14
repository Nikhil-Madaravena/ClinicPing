import { CheckCircle2, Shield, Zap, Clock } from 'lucide-react'

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Notification Bar */}
      <div className="w-full bg-primary/15 py-2 px-4 text-center">
        <p className="text-sm text-foreground">Transforming healthcare access globally →</p>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-primary" />
              <span className="text-base font-medium text-foreground">ClinicPing</span>
            </div>
            
            <div className="hidden md:flex items-center">
              <div className="flex items-center gap-1 bg-secondary/10 rounded-full px-2 py-2">
                <a href="#" className="px-3 py-1 text-sm text-foreground/70 hover:text-foreground hover:bg-white/40 rounded-full transition">Features</a>
                <a href="#" className="px-3 py-1 text-sm text-foreground/70 hover:text-foreground hover:bg-white/40 rounded-full transition">Solutions</a>
                <a href="#" className="px-3 py-1 text-sm text-foreground/70 hover:text-foreground hover:bg-white/40 rounded-full transition">Insights</a>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button className="px-5 py-2 text-sm text-foreground hover:text-foreground/60 transition font-medium">
                Login
              </button>
              <button className="px-5 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-block mb-6">
                  <span className="px-3 py-1.5 text-xs font-medium text-primary border border-primary/30 rounded-full">
                    Smart Healthcare Navigation
                  </span>
                </div>
                
                <h1 className="text-6xl lg:text-7xl font-light text-foreground leading-tight text-balance">
                  Healthcare That Adapts to You.
                </h1>
              </div>
              
              <p className="text-lg text-foreground/65 max-w-lg leading-relaxed font-light">
                Real-time visibility into hospital capacity, verified providers, and intelligent routing that finds the right care at the right time.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button className="px-7 py-3 bg-primary text-primary-foreground rounded-full font-medium text-base hover:bg-primary/90 transition">
                  Explore ClinicPing
                </button>
                <button className="px-7 py-3 border border-border text-foreground rounded-full font-medium text-base hover:bg-secondary/5 transition">
                  See How It Works
                </button>
              </div>
            </div>
            
            {/* Right Visual - Minimalist Product Visual */}
            <div className="relative h-96 lg:h-full flex items-center justify-center">
              <div className="relative w-full max-w-sm h-96 flex items-center justify-center">
                {/* Subtle background glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/8 to-transparent rounded-3xl blur-3xl" />
                
                {/* Central element - Healthcare icon representation */}
                <div className="relative flex flex-col items-center justify-center gap-6">
                  {/* Top capsule */}
                  <div className="w-12 h-20 bg-primary rounded-full shadow-xl" />
                  
                  {/* Center circle with crosshair */}
                  <div className="relative w-32 h-32 rounded-full border-2 border-primary/20 flex items-center justify-center">
                    <div className="w-0.5 h-12 bg-primary/40" />
                    <div className="w-12 h-0.5 bg-primary/40 absolute" />
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  
                  {/* Bottom capsule */}
                  <div className="w-12 h-20 bg-primary rounded-full shadow-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why ClinicPing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl lg:text-6xl font-light text-foreground text-balance mb-6">
                Healthcare Shouldn't Require Detective Work.
              </h2>
              <p className="text-lg text-foreground/65 leading-relaxed font-light mb-8">
                Fragmented systems, hidden availability, and manual scheduling waste everyone's time. ClinicPing connects all the pieces in real-time.
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                { problem: 'Patients navigate disconnected systems', solution: 'Single integrated platform' },
                { problem: 'Hospitals lack real-time capacity data', solution: 'Live availability sync' },
                { problem: 'Manual appointment logistics', solution: 'Intelligent recursive routing' }
              ].map((item, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-secondary/5 border border-border/40 hover:border-border/60 transition">
                  <div className="text-xs font-semibold text-primary uppercase mb-2">The Problem</div>
                  <p className="text-foreground text-sm mb-3 font-medium">{item.problem}</p>
                  <div className="text-xs font-semibold text-primary/70 uppercase mb-1">Our Solution</div>
                  <p className="text-foreground/70 text-sm">{item.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Modules Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl lg:text-6xl font-light text-foreground mb-4 text-balance">
              Four Pillars of Connected Care.
            </h2>
            <p className="text-lg text-foreground/65 max-w-2xl font-light">
              Integrated modules working together to streamline healthcare delivery and improve access.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Doctor's Network",
                description: "Verified provider profiles with real-time availability, specializations, and patient feedback.",
              },
              {
                title: "Hospital Intelligence",
                description: "Live dashboards of ICU capacity, equipment availability, and facility status across your network.",
              },
              {
                title: "Smart Scheduling",
                description: "Recursive routing that automatically finds optimal appointment slots and fallback options.",
              },
              {
                title: "Care Navigation",
                description: "Geo-aware routing that guides patients to the nearest appropriate facility in real-time.",
              }
            ].map((module, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-2xl bg-white border border-border/40 hover:border-border/80 hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">{module.title}</h3>
                  <p className="text-foreground/65 text-sm leading-relaxed">{module.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Scheduling Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl lg:text-6xl font-light text-foreground text-balance">
                Scheduling That Works Everywhere.
              </h2>
              <p className="text-lg text-foreground/65 leading-relaxed font-light">
                Our intelligent cascading system finds the right appointment, at the right facility, at the right time—without endless back-and-forth.
              </p>
              
              <div className="space-y-3">
                {[
                  'Automatic fallback routing',
                  'Multi-facility optimization',
                  'Real-time availability sync',
                  'Preference-aware intelligence'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/70 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Visual - Minimalist Flow */}
            <div className="relative h-96 rounded-2xl bg-secondary/5 border border-border/40 flex items-center justify-center overflow-hidden">
              <div className="space-y-4 w-full max-w-xs px-8">
                {[
                  { label: 'Request', color: 'bg-primary/10' },
                  { label: 'Match', color: 'bg-primary/20' },
                  { label: 'Confirm', color: 'bg-primary/30' }
                ].map((step, idx) => (
                  <div key={idx}>
                    <div className="text-xs font-semibold text-primary/70 mb-2">{step.label}</div>
                    <div className={`h-12 ${step.color} rounded-lg`} />
                    {idx < 2 && <div className="h-6 flex items-center justify-center text-primary/30">↓</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl lg:text-6xl font-light text-foreground mb-4">
              Enterprise Trust. Healthcare Grade.
            </h2>
            <p className="text-lg text-foreground/65 max-w-2xl font-light">
              Built from the ground up for healthcare's most demanding requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'HIPAA Compliant',
                description: 'Full encryption and compliance with healthcare privacy standards.'
              },
              {
                icon: Zap,
                title: 'Real-Time Sync',
                description: 'Sub-millisecond latency for critical availability and patient data.'
              },
              {
                icon: Clock,
                title: '99.99% Uptime',
                description: 'Enterprise redundancy ensuring healthcare access when needed.'
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-8 rounded-2xl bg-white border border-border/40">
                  <Icon className="w-7 h-7 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-foreground/65 text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl lg:text-6xl font-light text-foreground text-balance">
            Begin Your Healthcare Transformation Today.
          </h2>
          <p className="text-lg text-foreground/65 font-light max-w-2xl mx-auto">
            Join leading healthcare providers reimagining how care is accessed and delivered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition text-base">
              Get Started Free
            </button>
            <button className="px-8 py-3 border border-border text-foreground rounded-full font-medium hover:bg-secondary/5 transition text-base">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-background px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              {
                title: 'Product',
                links: ['Features', 'Pricing', 'Security', 'Roadmap']
              },
              {
                title: 'Company',
                links: ['About', 'Blog', 'Careers', 'Contact']
              },
              {
                title: 'Resources',
                links: ['Documentation', 'API Docs', 'Support', 'Status Page']
              },
              {
                title: 'Legal',
                links: ['Privacy Policy', 'Terms of Service', 'HIPAA', 'Compliance']
              }
            ].map((group, idx) => (
              <div key={idx}>
                <h4 className="font-semibold text-foreground text-sm mb-4">{group.title}</h4>
                <ul className="space-y-2">
                  {group.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a href="#" className="text-foreground/60 hover:text-foreground transition text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-foreground/50 text-sm font-light">
              © 2026 ClinicPing. All rights reserved.
            </div>
            <div className="flex items-center gap-8">
              <a href="#" className="text-foreground/60 hover:text-foreground transition text-sm font-medium">Twitter</a>
              <a href="#" className="text-foreground/60 hover:text-foreground transition text-sm font-medium">LinkedIn</a>
              <a href="#" className="text-foreground/60 hover:text-foreground transition text-sm font-medium">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
