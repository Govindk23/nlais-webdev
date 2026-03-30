/* ============================================================
   Next Level AI Services — Web Development Landing Page
   Design: Black + Orange High-Impact Branding
   Colors: #1A1A1A base, #FF6B35 orange, #FFFFFF text
   Fonts: Syne (display 800) + DM Sans (body 400/500)
   Layout: Full-page sections with bento grid and glassmorphism
   ============================================================ */

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Zap, Globe, Bot, Shield, Clock, Star, ChevronRight,
  Code2, Rocket, Users, CheckCircle2, ArrowRight, Menu, X,
  BookOpen, Play, Award, TrendingUp, Mail, ExternalLink
} from "lucide-react";

// Next Level AI Services — Web Development Focus
// No external images needed for this focused landing page

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
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: "rgba(255, 255, 255,0.7)", fontFamily: "DM Sans, sans-serif" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#FF6B35")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255, 255, 255,0.7)")}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="btn-primary-glow text-sm" style={{ fontFamily: "DM Sans, sans-serif" }}>
            Get Started
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
            style={{ background: "rgba(5,11,24,0.98)", borderBottom: "1px solid rgba(255, 107, 53,0.15)" }}
          >
            <div className="container py-4 flex flex-col gap-4">
              {links.map(l => (
                <a key={l.label} href={l.href} className="text-sm font-medium py-2" style={{ color: "rgba(255, 255, 255,0.8)", fontFamily: "DM Sans, sans-serif" }} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              ))}
              <a href="#contact" className="btn-primary-glow text-sm text-center" style={{ fontFamily: "DM Sans, sans-serif" }}>
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "#1A1A1A" }}>
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img src={HERO_BG} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(5,11,24,0.3) 0%, rgba(5,11,24,0.6) 60%, rgba(5,11,24,1) 100%)" }} />
      </div>

      {/* Animated grid overlay */}
      <div className="absolute inset-0 z-0 opacity-10" style={{
        backgroundImage: "linear-gradient(rgba(255, 107, 53,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 107, 53,0.3) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-8"
            style={{ background: "rgba(255, 107, 53,0.1)", border: "1px solid rgba(255, 107, 53,0.3)", color: "#FF6B35", fontFamily: "DM Sans, sans-serif" }}
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            AI-Powered Agency — Est. 2024
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black leading-none mb-6"
            style={{ fontFamily: "Syne, sans-serif", color: "#FFFFFF", letterSpacing: "-0.02em" }}
          >
            Building the Web.
            <br />
            <span className="gradient-text">Empowering</span>
            <br />
            the Future.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl mb-10 max-w-2xl leading-relaxed"
            style={{ color: "rgba(255, 255, 255,0.7)", fontFamily: "DM Sans, sans-serif" }}
          >
            We build high-converting websites in 48 hours using advanced AI frameworks. We also teach you to deploy autonomous AI agents — Manus, Claude Code, and Open Interpreter — safely on any device.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#services" className="btn-primary-glow flex items-center justify-center gap-2" style={{ fontFamily: "DM Sans, sans-serif" }}>
              <Rocket className="w-4 h-4" />
              Build My Website
            </a>
            <a href="#course" className="btn-neon flex items-center justify-center gap-2" style={{ fontFamily: "DM Sans, sans-serif" }}>
              <Play className="w-4 h-4" />
              Get the AI Course
            </a>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Sites Delivered", value: 120, suffix: "+" },
            { label: "Avg. Delivery Time", value: 48, suffix: "hrs" },
            { label: "Client Satisfaction", value: 98, suffix: "%" },
            { label: "AI Agents Deployed", value: 500, suffix: "+" },
          ].map((stat, i) => (
            <div key={i} className="glass-card p-5 text-center">
              <div className="text-3xl font-black mb-1 text-cyan-glow" style={{ fontFamily: "Syne, sans-serif" }}>
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs uppercase tracking-widest" style={{ color: "rgba(255, 255, 255,0.5)", fontFamily: "DM Sans, sans-serif" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Services Section
function Services() {
  const services = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "The Starter Site",
      price: "$299",
      delivery: "48 Hours",
      color: "#FF6B35",
      features: ["3-Page Responsive Site", "Mobile Optimized", "Contact Form", "Basic SEO Setup", "1 Revision Round"],
      cta: "Order on Fiverr",
      href: "#contact",
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "The Business Pro",
      price: "$599",
      delivery: "4 Days",
      color: "#FF6B35",
      features: ["7-Page Full Site", "Newsletter Integration", "Booking System", "Analytics Setup", "2 Revision Rounds"],
      cta: "Order on Fiverr",
      href: "#contact",
      popular: true,
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "E-Commerce / Custom",
      price: "$1,299+",
      delivery: "7 Days",
      color: "#7B61FF",
      features: ["Full E-Commerce Store", "Payment Integration", "Product Management", "Custom Functionality", "3 Revision Rounds"],
      cta: "Get a Quote",
      href: "#contact",
    },
  ];

  return (
    <section id="services" className="py-24" style={{ background: "#1A1A1A" }}>
      <div className="container">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ background: "rgba(255, 107, 53,0.1)", border: "1px solid rgba(255, 107, 53,0.2)", color: "#FF6B35", fontFamily: "DM Sans, sans-serif" }}>
              <Zap className="w-3 h-3" /> Web Development Services
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "Syne, sans-serif", color: "#FFFFFF" }}>
              Agency Quality.<br /><span className="gradient-text">Startup Speed.</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255, 255, 255,0.6)", fontFamily: "DM Sans, sans-serif" }}>
              We leverage advanced AI frameworks to deliver stunning, high-performing websites at a fraction of the traditional cost and timeline.
            </p>
          </div>
        </FadeIn>

        {/* Service cards with featured image */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <FadeIn delay={0.1}>
            <div className="glass-card overflow-hidden h-full">
              <img src={WEBDEV_IMG} alt="Web Development" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "Syne, sans-serif", color: "#FFFFFF" }}>
                  AI-Accelerated Web Development
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255, 255, 255,0.6)", fontFamily: "DM Sans, sans-serif" }}>
                  Our proprietary AI-assisted development pipeline eliminates the bottlenecks of traditional web development. You get agency-quality results with startup-speed delivery. Every site is responsive, SEO-optimized, and built to convert.
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 gap-4 h-full">
              {[
                { icon: <Clock className="w-5 h-5" />, title: "48hr Delivery", desc: "Starter sites delivered in 2 business days", color: "#FF6B35" },
                { icon: <Shield className="w-5 h-5" />, title: "Satisfaction Guarantee", desc: "We revise until you're happy", color: "#FF6B35" },
                { icon: <TrendingUp className="w-5 h-5" />, title: "SEO Optimized", desc: "Built to rank from day one", color: "#7B61FF" },
                { icon: <Users className="w-5 h-5" />, title: "Dedicated Support", desc: "Direct access to your developer", color: "#FF6B35" },
              ].map((item, i) => (
                <div key={i} className="glass-card p-4 flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `${item.color}20`, color: item.color }}>
                    {item.icon}
                  </div>
                  <div className="font-bold text-sm" style={{ fontFamily: "Syne, sans-serif", color: "#FFFFFF" }}>{item.title}</div>
                  <div className="text-xs" style={{ color: "rgba(255, 255, 255,0.5)", fontFamily: "DM Sans, sans-serif" }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                className="glass-card p-6 flex flex-col h-full relative overflow-hidden transition-transform duration-300 hover:-translate-y-1"
                style={{ border: svc.popular ? `1px solid ${svc.color}50` : "1px solid rgba(255, 107, 53,0.15)" }}
              >
                {svc.popular && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
                    style={{ background: `${svc.color}20`, color: svc.color, border: `1px solid ${svc.color}40`, fontFamily: "DM Sans, sans-serif" }}>
                    Most Popular
                  </div>
                )}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `${svc.color}15`, color: svc.color }}>
                  {svc.icon}
                </div>
                <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "Syne, sans-serif", color: "#FFFFFF" }}>{svc.title}</h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-black" style={{ fontFamily: "Syne, sans-serif", color: svc.color }}>{svc.price}</span>
                </div>
                <div className="flex items-center gap-1 mb-4 text-xs" style={{ color: "rgba(255, 255, 255,0.5)", fontFamily: "DM Sans, sans-serif" }}>
                  <Clock className="w-3 h-3" /> {svc.delivery} delivery
                </div>
                <div className="section-divider mb-4" />
                <ul className="flex flex-col gap-2 mb-6 flex-1">
                  {svc.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-sm" style={{ color: "rgba(255, 255, 255,0.7)", fontFamily: "DM Sans, sans-serif" }}>
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: svc.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={svc.href}
                  className="w-full py-3 rounded-lg text-sm font-bold uppercase tracking-wider text-center transition-all duration-300 flex items-center justify-center gap-2"
                  style={{ background: `${svc.color}15`, border: `1px solid ${svc.color}40`, color: svc.color, fontFamily: "DM Sans, sans-serif" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = `${svc.color}25`; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = `${svc.color}15`; }}
                >
                  {svc.cta} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// Course Section
function Course() {
  const modules = [
    { num: "01", title: "Understanding AI Agents & Safety", desc: "Learn what autonomous agents are, how they differ from chatbots, and the critical safety protocols every user must follow." },
    { num: "02", title: "Deploying Open Interpreter", desc: "Step-by-step installation on Windows, macOS, and Linux. API key management, sandboxing with Docker, and your first automation." },
    { num: "03", title: "Deploying Claude Code", desc: "Install and authenticate Claude Code, navigate large codebases, and leverage it for real-world software engineering tasks." },
    { num: "04", title: "Deploying Manus AI", desc: "Access the Manus platform, define complex multi-step goals, and understand how cloud-based agents execute tasks safely." },
    { num: "05", title: "Building Automated Workflows", desc: "Chain multiple agents together, create automation pipelines, and integrate agents into your daily business operations." },
    { num: "06", title: "Advanced Configuration & Scaling", desc: "Cost optimization, billing limits, custom model configurations, and scaling your AI agent infrastructure." },
  ];

  const tiers = [
    { name: "The Playbook", price: "$49", format: "Comprehensive PDF Guide", features: ["All 6 Modules (Written)", "Copy-Paste Command Reference", "Troubleshooting Cheatsheet", "Lifetime Updates"], color: "#FF6B35" },
    { name: "The Masterclass", price: "$97", format: "PDF + Full Video Course", features: ["Everything in Playbook", "6+ Hours of Video Content", "Advanced Workflow Templates", "Private Community Access"], color: "#FF6B35", popular: true },
    { name: "VIP Setup", price: "$249", format: "Course + 1-on-1 Session", features: ["Everything in Masterclass", "60-Min Live Setup Call", "Custom Configuration Review", "Priority Email Support"], color: "#7B61FF" },
  ];

  return (
    <section id="course" className="py-24" style={{ background: "#070E1F" }}>
      <div className="container">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ background: "rgba(255,45,120,0.1)", border: "1px solid rgba(255,45,120,0.2)", color: "#FF6B35", fontFamily: "DM Sans, sans-serif" }}>
              <BookOpen className="w-3 h-3" /> AI Agent Mastery Course
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "Syne, sans-serif", color: "#FFFFFF" }}>
              Stop Chatting.<br /><span className="gradient-text">Start Deploying.</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255, 255, 255,0.6)", fontFamily: "DM Sans, sans-serif" }}>
              The definitive guide to installing and operating autonomous AI agents — Manus, Claude Code, and Open Interpreter — safely on any device.
            </p>
          </div>
        </FadeIn>

        {/* Course overview */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <FadeIn delay={0.1}>
            <div className="relative">
              <img src={COURSE_IMG} alt="AI Agent Course" className="rounded-2xl w-full" style={{ boxShadow: "0 0 60px rgba(255,45,120,0.2)" }} />
              <div className="absolute -bottom-4 -right-4 glass-card p-4 flex items-center gap-3" style={{ border: "1px solid rgba(255,45,120,0.3)" }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(255,45,120,0.2)", color: "#FF6B35" }}>
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold" style={{ color: "#FFFFFF", fontFamily: "Syne, sans-serif" }}>Certificate of Completion</div>
                  <div className="text-xs" style={{ color: "rgba(255, 255, 255,0.5)", fontFamily: "DM Sans, sans-serif" }}>Included with all tiers</div>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: "Syne, sans-serif", color: "#FFFFFF" }}>
                What You Will Learn
              </h3>
              <div className="flex flex-col gap-3">
                {modules.map((mod, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl transition-all duration-200 hover:bg-white/5" style={{ cursor: "default" }}>
                    <div className="text-2xl font-black flex-shrink-0 w-10" style={{ fontFamily: "Syne, sans-serif", color: "rgba(255, 107, 53,0.3)" }}>
                      {mod.num}
                    </div>
                    <div>
                      <div className="font-bold text-sm mb-1" style={{ fontFamily: "Syne, sans-serif", color: "#FFFFFF" }}>{mod.title}</div>
                      <div className="text-xs leading-relaxed" style={{ color: "rgba(255, 255, 255,0.5)", fontFamily: "DM Sans, sans-serif" }}>{mod.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Course pricing */}
        <FadeIn>
          <h3 className="text-2xl font-bold text-center mb-8" style={{ fontFamily: "Syne, sans-serif", color: "#FFFFFF" }}>
            Choose Your Path
          </h3>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                className="glass-card p-6 flex flex-col h-full relative transition-transform duration-300 hover:-translate-y-1"
                style={{ border: tier.popular ? `1px solid ${tier.color}50` : "1px solid rgba(255, 107, 53,0.15)" }}
              >
                {tier.popular && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
                    style={{ background: `${tier.color}20`, color: tier.color, border: `1px solid ${tier.color}40`, fontFamily: "DM Sans, sans-serif" }}>
                    Best Value
                  </div>
                )}
                <div className="font-bold text-lg mb-1" style={{ fontFamily: "Syne, sans-serif", color: "#FFFFFF" }}>{tier.name}</div>
                <div className="text-xs mb-3" style={{ color: "rgba(255, 255, 255,0.5)", fontFamily: "DM Sans, sans-serif" }}>{tier.format}</div>
                <div className="text-4xl font-black mb-4" style={{ fontFamily: "Syne, sans-serif", color: tier.color }}>{tier.price}</div>
                <div className="section-divider mb-4" />
                <ul className="flex flex-col gap-2 mb-6 flex-1">
                  {tier.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-sm" style={{ color: "rgba(255, 255, 255,0.7)", fontFamily: "DM Sans, sans-serif" }}>
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: tier.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="w-full py-3 rounded-lg text-sm font-bold uppercase tracking-wider text-center transition-all duration-300 flex items-center justify-center gap-2"
                  style={{ background: `${tier.color}15`, border: `1px solid ${tier.color}40`, color: tier.color, fontFamily: "DM Sans, sans-serif" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = `${tier.color}25`; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = `${tier.color}15`; }}
                >
                  Enroll Now <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// Process Section
function Process() {
  const steps = [
    { num: "01", title: "Submit Your Brief", desc: "Complete our 5-minute onboarding form detailing your brand, goals, and preferences. Our AI intake system processes it instantly.", icon: <Mail className="w-6 h-6" /> },
    { num: "02", title: "AI-Assisted Build", desc: "Our AI sub-agents generate the structure, copy, and design. A senior developer reviews and refines every element.", icon: <Bot className="w-6 h-6" /> },
    { num: "03", title: "Review & Refine", desc: "You receive a live staging link within the promised timeframe. Request revisions and we'll implement them within 24 hours.", icon: <Star className="w-6 h-6" /> },
    { num: "04", title: "Launch & Grow", desc: "We deploy your site, configure analytics, and provide a handover guide. Ongoing support available on request.", icon: <Rocket className="w-6 h-6" /> },
  ];

  return (
    <section className="py-24" style={{ background: "#1A1A1A" }}>
      <div className="container">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ background: "rgba(123,97,255,0.1)", border: "1px solid rgba(123,97,255,0.2)", color: "#7B61FF", fontFamily: "DM Sans, sans-serif" }}>
              <Zap className="w-3 h-3" /> How It Works
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "Syne, sans-serif", color: "#FFFFFF" }}>
              From Brief to Live<br /><span className="gradient-text">in Days, Not Weeks.</span>
            </h2>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="glass-card p-6 relative">
                <div className="text-5xl font-black mb-4 opacity-10" style={{ fontFamily: "Syne, sans-serif", color: "#FF6B35" }}>{step.num}</div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(255, 107, 53,0.1)", color: "#FF6B35" }}>
                  {step.icon}
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "Syne, sans-serif", color: "#FFFFFF" }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255, 255, 255,0.55)", fontFamily: "DM Sans, sans-serif" }}>{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 z-10">
                    <ChevronRight className="w-6 h-6" style={{ color: "rgba(255, 107, 53,0.3)" }} />
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

// Testimonials
function Testimonials() {
  const reviews = [
    { name: "Sarah K.", role: "Founder, Bloom Botanicals", text: "Next Level AI Services delivered my e-commerce site in 5 days. The quality was exceptional and the process was completely painless. I had zero technical involvement.", rating: 5, platform: "Fiverr" },
    { name: "Marcus T.", role: "Marketing Director, NovaTech", text: "The AI agent course was exactly what I needed. The step-by-step instructions worked perfectly on my Mac. I had Open Interpreter running in under an hour.", rating: 5, platform: "Gumroad" },
    { name: "Priya M.", role: "Solo Consultant", text: "I was skeptical about the 48-hour claim. They delivered in 36. The site looks better than anything I've seen from agencies charging 10x the price.", rating: 5, platform: "Upwork" },
    { name: "James R.", role: "CTO, Stackwise Labs", text: "The VIP setup session was worth every penny. They helped me configure Claude Code for our entire codebase and set up proper sandboxing. Game-changing.", rating: 5, platform: "Direct" },
  ];

  return (
    <section className="py-24" style={{ background: "#070E1F" }}>
      <div className="container">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ background: "rgba(255, 107, 53,0.1)", border: "1px solid rgba(255, 107, 53,0.2)", color: "#FF6B35", fontFamily: "DM Sans, sans-serif" }}>
              <Star className="w-3 h-3" /> Client Reviews
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "Syne, sans-serif", color: "#FFFFFF" }}>
              Trusted by <span className="gradient-text">Builders</span>
            </h2>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="glass-card p-6">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, si) => (
                    <Star key={si} className="w-4 h-4 fill-current" style={{ color: "#FFD700" }} />
                  ))}
                  <span className="ml-auto text-xs px-2 py-1 rounded-full" style={{ background: "rgba(255, 107, 53,0.1)", color: "#FF6B35", fontFamily: "DM Sans, sans-serif" }}>
                    via {r.platform}
                  </span>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255, 255, 255,0.75)", fontFamily: "DM Sans, sans-serif" }}>
                  "{r.text}"
                </p>
                <div>
                  <div className="font-bold text-sm" style={{ fontFamily: "Syne, sans-serif", color: "#FFFFFF" }}>{r.name}</div>
                  <div className="text-xs" style={{ color: "rgba(255, 255, 255,0.4)", fontFamily: "DM Sans, sans-serif" }}>{r.role}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// About Section
function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden" style={{ background: "#1A1A1A" }}>
      <div className="absolute inset-0 z-0">
        <img src={ABOUT_BG} alt="" className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(5,11,24,0.95) 50%, rgba(5,11,24,0.7) 100%)" }} />
      </div>
      <div className="container relative z-10">
        <div className="max-w-2xl">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ background: "rgba(255,45,120,0.1)", border: "1px solid rgba(255,45,120,0.2)", color: "#FF6B35", fontFamily: "DM Sans, sans-serif" }}>
              <Users className="w-3 h-3" /> About Next Level AI Services
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ fontFamily: "Syne, sans-serif", color: "#FFFFFF" }}>
              We Are the Future<br /><span className="gradient-text">of Digital Work.</span>
            </h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color: "rgba(255, 255, 255,0.7)", fontFamily: "DM Sans, sans-serif" }}>
              Next Level AI Services was founded on a single conviction: that the combination of human creativity and autonomous AI agents represents the most powerful force in modern business. We are not just a web development agency or a course provider — we are an AI-native operation that uses the same tools we teach to deliver the services we sell.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255, 255, 255,0.55)", fontFamily: "DM Sans, sans-serif" }}>
              Every website we build is accelerated by AI sub-agents that handle research, copywriting, and structural scaffolding. Every course we sell is the distilled knowledge from deploying these systems in production environments. Our clients get the benefit of both.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary-glow flex items-center gap-2" style={{ fontFamily: "DM Sans, sans-serif" }}>
                Work With Us <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#course" className="btn-neon flex items-center gap-2" style={{ fontFamily: "DM Sans, sans-serif" }}>
                <BookOpen className="w-4 h-4" /> View Course
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// Contact / CTA Section
function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24" style={{ background: "#070E1F" }}>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <FadeIn>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
                style={{ background: "rgba(255, 107, 53,0.1)", border: "1px solid rgba(255, 107, 53,0.2)", color: "#FF6B35", fontFamily: "DM Sans, sans-serif" }}>
                <Mail className="w-3 h-3" /> Get In Touch
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ fontFamily: "Syne, sans-serif", color: "#FFFFFF" }}>
                Ready to<br /><span className="gradient-text">Automate?</span>
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(255, 255, 255,0.6)", fontFamily: "DM Sans, sans-serif" }}>
                Whether you need a website built or want to deploy your first AI agent, we are here to make it happen. Send us a message and we will respond within 4 hours.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { icon: <ExternalLink className="w-4 h-4" />, label: "Fiverr Profile", value: "fiverr.com/nextlevelai", color: "#FF6B35" },
                  { icon: <ExternalLink className="w-4 h-4" />, label: "Upwork Profile", value: "upwork.com/nextlevelai", color: "#FF6B35" },
                  { icon: <Mail className="w-4 h-4" />, label: "Email", value: "hello@nextlevelaiservices.com", color: "#7B61FF" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${item.color}15`, color: item.color }}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs" style={{ color: "rgba(255, 255, 255,0.4)", fontFamily: "DM Sans, sans-serif" }}>{item.label}</div>
                      <div className="text-sm font-medium" style={{ color: item.color, fontFamily: "DM Sans, sans-serif" }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            {submitted ? (
              <div className="glass-card p-8 text-center">
                <CheckCircle2 className="w-16 h-16 mx-auto mb-4" style={{ color: "#FF6B35" }} />
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "Syne, sans-serif", color: "#FFFFFF" }}>Message Received!</h3>
                <p className="text-sm" style={{ color: "rgba(255, 255, 255,0.6)", fontFamily: "DM Sans, sans-serif" }}>
                  We will respond within 4 hours. Check your inbox.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card p-8 flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "rgba(255, 255, 255,0.5)", fontFamily: "DM Sans, sans-serif" }}>Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255, 107, 53,0.2)", color: "#FFFFFF", fontFamily: "DM Sans, sans-serif" }}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "rgba(255, 255, 255,0.5)", fontFamily: "DM Sans, sans-serif" }}>Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255, 107, 53,0.2)", color: "#FFFFFF", fontFamily: "DM Sans, sans-serif" }}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "rgba(255, 255, 255,0.5)", fontFamily: "DM Sans, sans-serif" }}>I'm Interested In</label>
                  <select
                    value={form.service}
                    onChange={e => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200"
                    style={{ background: "rgba(13,27,53,0.8)", border: "1px solid rgba(255, 107, 53,0.2)", color: "#FFFFFF", fontFamily: "DM Sans, sans-serif" }}
                  >
                    <option value="" style={{ background: "#0D1B35" }}>Select a service...</option>
                    <option value="starter" style={{ background: "#0D1B35" }}>Starter Site ($299)</option>
                    <option value="pro" style={{ background: "#0D1B35" }}>Business Pro ($599)</option>
                    <option value="ecommerce" style={{ background: "#0D1B35" }}>E-Commerce / Custom ($1,299+)</option>
                    <option value="course-playbook" style={{ background: "#0D1B35" }}>AI Course — The Playbook ($49)</option>
                    <option value="course-masterclass" style={{ background: "#0D1B35" }}>AI Course — Masterclass ($97)</option>
                    <option value="course-vip" style={{ background: "#0D1B35" }}>AI Course — VIP Setup ($249)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "rgba(255, 255, 255,0.5)", fontFamily: "DM Sans, sans-serif" }}>Message</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200 resize-none"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255, 107, 53,0.2)", color: "#FFFFFF", fontFamily: "DM Sans, sans-serif" }}
                    placeholder="Tell us about your project or goals..."
                  />
                </div>
                <button type="submit" className="btn-primary-glow w-full flex items-center justify-center gap-2" style={{ fontFamily: "DM Sans, sans-serif" }}>
                  Send Message <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-12" style={{ background: "#1A1A1A", borderTop: "1px solid rgba(255, 107, 53,0.1)" }}>
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #FF6B35, #FF6B35)" }}>
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-xl" style={{ fontFamily: "Syne, sans-serif", color: "#FFFFFF" }}>
              Next Level<span style={{ color: "#FF6B35" }}>Forge</span>
            </span>
          </div>
          <div className="flex items-center gap-6">
            {["Services", "Course", "Pricing", "About", "Contact"].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-xs transition-colors duration-200"
                style={{ color: "rgba(255, 255, 255,0.4)", fontFamily: "DM Sans, sans-serif" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#FF6B35")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255, 255, 255,0.4)")}>
                {link}
              </a>
            ))}
          </div>
          <div className="text-xs" style={{ color: "rgba(255, 255, 255,0.3)", fontFamily: "DM Sans, sans-serif" }}>
            © 2024 Next Level AI Services. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Page
export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#1A1A1A", fontFamily: "DM Sans, sans-serif" }}>
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Course />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
