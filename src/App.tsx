import { CheckCircle2, Shield, Zap, Clock, Lock, Activity, User, Building2, Calendar, MapPin } from 'lucide-react'

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
      <section className="pt-32 pb-32 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-10">
              <div>
                <div className="inline-block mb-8">
                  <span className="px-4 py-2 text-xs font-semibold text-foreground/60 border border-foreground/20 rounded-full bg-white/40">
                    Smart Healthcare Navigation
                  </span>
                </div>
                
                <h1 className="text-6xl lg:text-7xl font-light text-foreground leading-tight text-balance">
                  Healthcare That Adapts to You.
                </h1>
              </div>
              
              <p className="text-lg text-foreground/60 max-w-lg leading-relaxed font-light">
                Real-time visibility into hospital capacity, verified providers, and intelligent routing that finds the right care at the right time.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-3 bg-[#2d5a50] text-white rounded-full font-medium text-base hover:bg-[#234540] transition duration-200">
                  Explore ClinicPing
                </button>
                <button className="px-8 py-3 border border-foreground/20 text-foreground rounded-full font-medium text-base hover:bg-foreground/5 transition duration-200">
                  See How It Works
                </button>
              </div>
            </div>
            
            {/* Right Visual - Minimalist Product Visual */}
            <div className="relative h-96 lg:h-full flex items-center justify-center p-8">
              <div className="relative w-full max-w-sm h-96 flex items-center justify-center">
                {/* Top capsule */}
                <div className="absolute top-0 w-14 h-28 bg-[#2d5a50] rounded-full shadow-lg" />
                
                {/* Center circle with crosshair */}
                <div className="relative w-40 h-40 rounded-full border-2 border-foreground/15 flex items-center justify-center">
                  <div className="w-0.5 h-16 bg-foreground/20" />
                  <div className="w-16 h-0.5 bg-foreground/20 absolute" />
                  <div className="w-2.5 h-2.5 bg-[#2d5a50] rounded-full" />
                </div>
                
                {/* Bottom capsule */}
                <div className="absolute bottom-0 w-14 h-28 bg-[#2d5a50] rounded-full shadow-lg" />
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
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-widest text-foreground/50 uppercase">Core Platform Modules</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-light text-foreground text-balance">
              Four Intelligent Layers
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: User,
                title: "Doctor's Desk",
                description: "Verified physician profiles with real-time availability, specialty filters, and patient reviews.",
                features: ['Verified credentials', 'Live scheduling', 'Smart matching']
              },
              {
                icon: Building2,
                title: "Hospital Intelligence Dashboard",
                description: "Real-time visibility into ICU beds, equipment status, wait times, and facility capacity.",
                features: ['Live bed tracking', 'Equipment status', 'Crowd analytics']
              },
              {
                icon: Calendar,
                title: "Recursive Appointment Engine",
                description: "Automatic fallback scheduling that cascades to alternative providers when primary slots are unavailable.",
                features: ['Auto-cascading', 'Smart rebooking', 'Zero dead ends']
              },
              {
                icon: MapPin,
                title: "Geo-Based Care Navigation",
                description: "Interactive map-based discovery of nearby healthcare providers with intelligent routing.",
                features: ['Location-aware', 'Multi-modal routing', 'Proximity scoring']
              }
            ].map((layer, idx) => {
              const Icon = layer.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white border border-border/50 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#2d5a50] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground leading-tight pt-0.5">{layer.title}</h3>
                  </div>
                  <p className="text-foreground/65 text-sm leading-relaxed mb-5">{layer.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {layer.features.map((feature, featureIdx) => (
                      <span key={featureIdx} className="px-3 py-1.5 bg-foreground/8 text-foreground/70 text-xs font-medium rounded-full border border-foreground/10">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
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
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 text-center">
            <div className="inline-block mb-8">
              <span className="px-4 py-2 text-xs font-semibold tracking-widest text-foreground/50 bg-white/40 rounded-full">
                TRUST & INFRASTRUCTURE
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-light text-foreground mb-6 text-balance">
              Built on Clinical-Grade Security
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto font-light">
              Healthcare data demands the highest security standards. ClinicPing is designed with HIPAA compliance and enterprise reliability at its core.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            {[
              {
                icon: Shield,
                title: 'End-to-End Encryption',
                description: 'All patient data encrypted in transit and at rest with AES-256 standards.'
              },
              {
                icon: Zap,
                title: 'Real-Time Data Sync',
                description: 'Live hospital capacity and doctor availability updated every 30 seconds.'
              },
              {
                icon: Lock,
                title: 'Secure Authentication',
                description: 'Multi-factor authentication and role-based access control across the platform.'
              },
              {
                icon: Activity,
                title: '99.9% Uptime SLA',
                description: 'Enterprise-grade infrastructure built on redundant cloud architecture.'
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-8 shadow-sm">
                    <Icon className="w-8 h-8 text-foreground/70 stroke-1.5" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">{item.description}</p>
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
      <footer className="bg-[#1f3a2f] text-white px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 rounded-full bg-white/30" />
                <span className="text-lg font-semibold">ClinicPing</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                AI-powered healthcare navigation infrastructure for intelligent care access.
              </p>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="font-semibold text-white text-sm mb-4">Platform</h4>
              <ul className="space-y-3">
                {['Features', 'How It Works', 'Security', 'API Docs'].map((link, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-white/70 hover:text-white transition text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white text-sm mb-4">Company</h4>
              <ul className="space-y-3">
                {['About', 'Careers', 'Press Kit', 'Contact'].map((link, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-white/70 hover:text-white transition text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white text-sm mb-4">Legal</h4>
              <ul className="space-y-3">
                {['Privacy Policy', 'Terms of Service', 'HIPAA Compliance', 'Cookie Policy'].map((link, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-white/70 hover:text-white transition text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white/60 text-sm">
              © 2024 ClinicPing. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/70 hover:text-white transition text-sm">Twitter</a>
              <a href="#" className="text-white/70 hover:text-white transition text-sm">LinkedIn</a>
              <a href="#" className="text-white/70 hover:text-white transition text-sm">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
