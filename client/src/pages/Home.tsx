/* ============================================================
   Next Level AI Services — Web Development Landing Page
   Design: Black + Orange High-Impact Branding
   Colors: #1A1A1A base, #FF6B35 orange, #FFFFFF text
   Fonts: Syne (display 800) + DM Sans (body 400/500)
   Layout: Full-page sections with bento grid and glassmorphism
   ============================================================ */

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Zap, Globe, Bot, Shield, Clock, Star, ChevronRight,
  Code2, Rocket, Users, CheckCircle2, ArrowRight, Menu, X,
  BookOpen, Play, Award, TrendingUp, Mail, ExternalLink
} from "lucide-react";

// Animated counter
function Counter({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// Fade-in section wrapper
function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Navbar
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Course", href: "#course" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(26, 26, 26, 0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255, 107, 53,0.1)" : "none",
      }}
    >
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #FF6B35, #FF6B35)" }}>
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight" style={{ fontFamily: "Syne, sans-serif", color: "#FFFFFF" }}>
            Next Level<span style={{ color: "#FF6B35" }}>Forge</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium transition-colors hover:text-orange-500"
              style={{ color: "#FFFFFF" }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button className="hidden md:flex px-6 py-2 rounded-lg font-medium transition-all" style={{ background: "#FF6B35", color: "#FFFFFF" }}>
          Get Started
        </button>

        {/* Mobile menu button */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t" style={{ borderColor: "rgba(255, 107, 53,0.1)", background: "rgba(26, 26, 26, 0.95)" }}>
          <div className="container py-4 space-y-3">
            {links.map(l => (
              <a key={l.label} href={l.href} className="block py-2" style={{ color: "#FFFFFF" }}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "#1A1A1A" }}>
      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(26,26,26,1) 0%, rgba(40,40,60,0.8) 50%, rgba(26,26,26,1) 100%)" }} />
      </div>

      {/* Animated grid overlay */}
      <div className="absolute inset-0 z-0 opacity-10" style={{
        backgroundImage: "linear-gradient(rgba(255, 107, 53,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 107, 53,0.3) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black leading-tight mb-6"
            style={{ fontFamily: "Syne, sans-serif", color: "#FFFFFF" }}
          >
            Build the Web.<br />
            <span style={{ color: "#FF6B35" }}>Empower the Future.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl md:text-2xl mb-8 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.8)", fontFamily: "DM Sans, sans-serif" }}
          >
            Next Level AI Services delivers lightning-fast website development and AI agent training. Launch your project in 48 hours with cutting-edge automation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105" style={{ background: "#FF6B35", color: "#FFFFFF" }}>
              Start Your Project
            </button>
            <button className="px-8 py-4 rounded-lg font-bold text-lg transition-all border-2" style={{ borderColor: "#FF6B35", color: "#FF6B35", background: "transparent" }}>
              Learn More
            </button>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t" style={{ borderColor: "rgba(255, 107, 53,0.2)" }}>
            <div>
              <div className="text-3xl font-bold" style={{ color: "#FF6B35" }}><Counter end={48} suffix="h" /></div>
              <p style={{ color: "rgba(255,255,255,0.6)" }}>Delivery Time</p>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{ color: "#FF6B35" }}><Counter end={99} suffix="%" /></div>
              <p style={{ color: "rgba(255,255,255,0.6)" }}>Automation</p>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{ color: "#FF6B35" }}><Counter end={500} suffix="+" /></div>
              <p style={{ color: "rgba(255,255,255,0.6)" }}>Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Services Section
function Services() {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites built with React, Tailwind, and modern frameworks. Fully responsive, SEO-optimized, and production-ready.",
      price: "$299 - $1,299",
    },
    {
      icon: Bot,
      title: "AI Agent Setup",
      description: "Deploy Manus, Claude Code, and Open Interpreter safely. Complete automation training and integration.",
      price: "$49 - $249",
    },
    {
      icon: Rocket,
      title: "Full-Stack Solutions",
      description: "Backend integration, database setup, and API development. Scale your application with confidence.",
      price: "Custom Quote",
    },
  ];

  return (
    <section id="services" className="py-24 relative" style={{ background: "#1A1A1A" }}>
      <div className="container">
        <FadeIn>
          <h2 className="text-5xl font-black mb-4" style={{ fontFamily: "Syne, sans-serif", color: "#FFFFFF" }}>
            Our Services
          </h2>
          <p className="text-xl mb-16" style={{ color: "rgba(255,255,255,0.6)" }}>
            Everything you need to build and automate.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((svc, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                className="p-8 rounded-2xl backdrop-blur-xl border transition-all hover:scale-105"
                style={{
                  background: "rgba(255, 107, 53, 0.05)",
                  borderColor: "rgba(255, 107, 53, 0.2)",
                }}
              >
                <svc.icon className="w-12 h-12 mb-4" style={{ color: "#FF6B35" }} />
                <h3 className="text-2xl font-bold mb-3" style={{ color: "#FFFFFF" }}>{svc.title}</h3>
                <p className="mb-6" style={{ color: "rgba(255,255,255,0.7)" }}>{svc.description}</p>
                <p className="text-lg font-bold" style={{ color: "#FF6B35" }}>{svc.price}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorks() {
  const steps = [
    { num: 1, title: "Brief", desc: "Share your vision via intake form" },
    { num: 2, title: "Design", desc: "We create your custom design" },
    { num: 3, title: "Build", desc: "AI-assisted development begins" },
    { num: 4, title: "Launch", desc: "Your site goes live in 48 hours" },
  ];

  return (
    <section className="py-24 relative" style={{ background: "linear-gradient(to bottom, #1A1A1A, #2A2A3A)" }}>
      <div className="container">
        <FadeIn>
          <h2 className="text-5xl font-black mb-4" style={{ fontFamily: "Syne, sans-serif", color: "#FFFFFF" }}>
            How It Works
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-4 gap-6 mt-12">
          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="relative">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl mb-4 mx-auto"
                  style={{ background: "#FF6B35", color: "#FFFFFF" }}
                >
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-center mb-2" style={{ color: "#FFFFFF" }}>{step.title}</h3>
                <p className="text-center" style={{ color: "rgba(255,255,255,0.6)" }}>{step.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 -right-3">
                    <ChevronRight className="w-6 h-6" style={{ color: "#FF6B35" }} />
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function Testimonials() {
  const testimonials = [
    { name: "Sarah Chen", role: "Startup Founder", text: "Next Level AI Services delivered our website in 2 days. The quality is exceptional." },
    { name: "Marcus Johnson", role: "Tech Entrepreneur", text: "The AI agent setup course was incredibly detailed. Highly recommended!" },
    { name: "Emma Rodriguez", role: "Business Owner", text: "Professional, fast, and affordable. Exactly what we needed." },
  ];

  return (
    <section className="py-24 relative" style={{ background: "#1A1A1A" }}>
      <div className="container">
        <FadeIn>
          <h2 className="text-5xl font-black mb-4" style={{ fontFamily: "Syne, sans-serif", color: "#FFFFFF" }}>
            Loved by Clients
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                className="p-8 rounded-2xl backdrop-blur-xl border"
                style={{
                  background: "rgba(255, 107, 53, 0.05)",
                  borderColor: "rgba(255, 107, 53, 0.2)",
                }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" style={{ color: "#FF6B35" }} />
                  ))}
                </div>
                <p className="mb-4" style={{ color: "rgba(255,255,255,0.8)" }}>"{t.text}"</p>
                <p className="font-bold" style={{ color: "#FFFFFF" }}>{t.name}</p>
                <p style={{ color: "rgba(255,255,255,0.6)" }}>{t.role}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTA() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #FF6B35 0%, #FF8555 100%)" }}>
      <div className="container text-center">
        <FadeIn>
          <h2 className="text-5xl font-black mb-6" style={{ fontFamily: "Syne, sans-serif", color: "#FFFFFF" }}>
            Ready to Launch?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.9)" }}>
            Join hundreds of businesses using Next Level AI Services to build faster and smarter.
          </p>
          <button className="px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105" style={{ background: "#1A1A1A", color: "#FF6B35" }}>
            Start Your Project Now
          </button>
        </FadeIn>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-12 border-t" style={{ background: "#1A1A1A", borderColor: "rgba(255, 107, 53,0.2)" }}>
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-4" style={{ color: "#FFFFFF" }}>Next Level AI Services</h4>
            <p style={{ color: "rgba(255,255,255,0.6)" }}>Building the future, one project at a time.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4" style={{ color: "#FFFFFF" }}>Services</h4>
            <ul style={{ color: "rgba(255,255,255,0.6)" }}>
              <li><a href="#" className="hover:text-orange-500">Web Development</a></li>
              <li><a href="#" className="hover:text-orange-500">AI Training</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4" style={{ color: "#FFFFFF" }}>Company</h4>
            <ul style={{ color: "rgba(255,255,255,0.6)" }}>
              <li><a href="#" className="hover:text-orange-500">About</a></li>
              <li><a href="#" className="hover:text-orange-500">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4" style={{ color: "#FFFFFF" }}>Legal</h4>
            <ul style={{ color: "rgba(255,255,255,0.6)" }}>
              <li><a href="#" className="hover:text-orange-500">Privacy</a></li>
              <li><a href="#" className="hover:text-orange-500">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t pt-8 text-center" style={{ borderColor: "rgba(255, 107, 53,0.2)", color: "rgba(255,255,255,0.6)" }}>
          <p>&copy; 2026 Next Level AI Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// Main App
export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#1A1A1A" }}>
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
