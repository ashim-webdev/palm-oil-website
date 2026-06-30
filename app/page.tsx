'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import ContactUs from "@/components/ui/contactUs"
import CtaBanner from "@/components/ui/ctaBanner"
import AboutCompany from "@/components/ui/aboutUs"
import { FadeUp } from '@/components/ui/fadeUp';
import WhatsappWidget from "@/components/ui/WhatsappWidget"
import Image from 'next/image';


const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Product", href: "#products" },
  { name: "Offers", href: "#offers" },
  { name: "Contact", href: "#contact" },
];;

// ── Floating Leaf SVG ──────────────────────────────────────────────────────────
function Leaf({ className, delay = 0, size = 60 }: { className?: string; delay?: number; size?: number }) {
  return (
    <motion.div
      className={`absolute pointer-events-none select-none ${className}`}
      animate={{ y: [0, -18, 0], rotate: [0, 8, -8, 0] }}
      transition={{ duration: 5 + delay * 0.7, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      {/* <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
        <ellipse cx="40" cy="40" rx="18" ry="34" fill="#8BBE5A" opacity="0.85" transform="rotate(-30 40 40)" />
        <line x1="40" y1="12" x2="40" y2="68" stroke="#6EA844" strokeWidth="1.5" opacity="0.5"
          transform="rotate(-30 40 40)" />
        <line x1="40" y1="28" x2="52" y2="22" stroke="#6EA844" strokeWidth="1" opacity="0.4"
          transform="rotate(-30 40 40)" />
        <line x1="40" y1="40" x2="55" y2="36" stroke="#6EA844" strokeWidth="1" opacity="0.4"
          transform="rotate(-30 40 40)" />
        <line x1="40" y1="52" x2="52" y2="50" stroke="#6EA844" strokeWidth="1" opacity="0.4"
          transform="rotate(-30 40 40)" />
      </svg> */}

      <Image
        src="/img/bigLeaf.png"
        alt="Logo"
        width={70}
        height={70}
      />
    </motion.div>
  );
}

// ── Small Decorative Leaf ──────────────────────────────────────────────────────
function SmallLeaf({ className, delay = 0, rotate = 0 }: { className?: string; delay?: number; rotate?: number }) {
  return (
    <motion.div
      className={`absolute pointer-events-none select-none ${className}`}
      style={{ rotate }}
      animate={{ y: [0, -12, 0], rotate: [rotate, rotate + 10, rotate - 10, rotate] }}
      transition={{ duration: 4 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      {/* <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <ellipse cx="20" cy="20" rx="8" ry="16" fill="#8BBE5A" opacity="0.7" transform="rotate(-20 20 20)" />
        <line x1="20" y1="6" x2="20" y2="34" stroke="#6EA844" strokeWidth="1" opacity="0.4"
          transform="rotate(-20 20 20)" />
      </svg> */}

      <Image
        src="/img/singleLeaf.png"
        alt="Logo"
        width={50}
        height={50}
      />
    </motion.div>
  );
}

// ── Coffee Bean ────────────────────────────────────────────────────────────────
function CoffeeBean({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      className={`absolute pointer-events-none select-none ${className}`}
      animate={{ y: [0, -10, 0], rotate: [0, 20, 0] }}
      transition={{ duration: 6 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      {/* <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
        <ellipse cx="14" cy="10" rx="13" ry="9" fill="#C8A97E" opacity="0.6" />
        <path d="M14 3 Q18 10 14 17" stroke="#A07850" strokeWidth="1.5" fill="none" opacity="0.5" />
      </svg> */}
      <Image
        src="/img/palmSingleSeed.png"
        alt="Logo"
        width={50}
        height={50}
      />
    </motion.div>
  );
}

// ── Cosmetic Bottle (SVG placeholder) ─────────────────────────────────────────
function AmberBottle({ size = 140, className = '' }: { size?: number; className?: string }) {
  return (
    // <svg width={size} height={size * 1.6} viewBox="0 0 100 160" fill="none" className={className}>
    //   <rect x="36" y="10" width="28" height="10" rx="4" fill="#D4A85A" />
    //   <path d="M30 25 Q28 40 28 55 L28 135 Q28 148 50 148 Q72 148 72 135 L72 55 Q72 40 70 25 Z"
    //     fill="url(#amberGrad)" />
    //   <defs>
    //     <linearGradient id="amberGrad" x1="28" y1="25" x2="72" y2="148" gradientUnits="userSpaceOnUse">
    //       <stop offset="0%" stopColor="#E8C06A" />
    //       <stop offset="50%" stopColor="#C8913A" />
    //       <stop offset="100%" stopColor="#A06820" />
    //     </linearGradient>
    //   </defs>
    //   <ellipse cx="50" cy="28" rx="22" ry="8" fill="#E8C87A" opacity="0.6" />
    //   <rect x="38" y="60" width="24" height="40" rx="3" fill="#FFFFFF" opacity="0.12" />
    //   <rect x="40" y="65" width="20" height="2" rx="1" fill="#FFFFFF" opacity="0.3" />
    //   <rect x="40" y="70" width="16" height="1.5" rx="0.75" fill="#FFFFFF" opacity="0.2" />
    //   <rect x="40" y="74" width="18" height="1.5" rx="0.75" fill="#FFFFFF" opacity="0.2" />
    // </svg>
      <Image
        src="/img/bottle2.png"
        alt="Logo"
        width={200}
        height={100}
      />
  );
}

function WhiteBottle({ size = 120, className = '' }: { size?: number; className?: string }) {
  return (
    // <svg width={size} height={size * 1.8} viewBox="0 0 90 162" fill="none" className={className}>
    //   <rect x="32" y="6" width="26" height="12" rx="5" fill="#E0E0DC" />
    //   <rect x="38" y="2" width="14" height="8" rx="3" fill="#C8C8C0" />
    //   <path d="M25 22 Q22 38 22 55 L22 138 Q22 152 45 152 Q68 152 68 138 L68 55 Q68 38 65 22 Z"
    //     fill="url(#whiteGrad)" />
    //   <defs>
    //     <linearGradient id="whiteGrad" x1="22" y1="22" x2="68" y2="152" gradientUnits="userSpaceOnUse">
    //       <stop offset="0%" stopColor="#FAFAF8" />
    //       <stop offset="60%" stopColor="#ECEEE8" />
    //       <stop offset="100%" stopColor="#D8DAD4" />
    //     </linearGradient>
    //   </defs>
    //   <rect x="32" y="65" width="26" height="45" rx="3" fill="#8BBE5A" opacity="0.15" />
    //   <rect x="34" y="70" width="22" height="2" rx="1" fill="#8BBE5A" opacity="0.4" />
    //   <rect x="34" y="75" width="16" height="1.5" rx="0.75" fill="#8BBE5A" opacity="0.3" />
    //   <rect x="34" y="79" width="19" height="1.5" rx="0.75" fill="#8BBE5A" opacity="0.3" />
    //   <rect x="34" y="83" width="14" height="1.5" rx="0.75" fill="#8BBE5A" opacity="0.25" />
    // </svg>

      <Image
        src="/img/bottle1.png"
        alt="Logo"
        width={200}
        height={100}
      />
  );
}

function DropperBottle({ size = 100, className = '' }: { size?: number; className?: string }) {
  return (
    // <svg width={size} height={size * 2} viewBox="0 0 80 160" fill="none" className={className}>
    //   <rect x="34" y="2" width="12" height="20" rx="4" fill="#C8C8C0" />
    //   <ellipse cx="40" cy="22" rx="8" ry="5" fill="#D0D0C8" />
    //   <path d="M28 28 Q26 42 26 58 L26 130 Q26 145 40 145 Q54 145 54 130 L54 58 Q54 42 52 28 Z"
    //     fill="url(#dropperGrad)" />
    //   <defs>
    //     <linearGradient id="dropperGrad" x1="26" y1="28" x2="54" y2="145" gradientUnits="userSpaceOnUse">
    //       <stop offset="0%" stopColor="#F0EDE6" />
    //       <stop offset="100%" stopColor="#D8D4CC" />
    //     </linearGradient>
    //   </defs>
    //   <ellipse cx="40" cy="32" rx="14" ry="6" fill="#E8E4DC" opacity="0.6" />
    //   <rect x="30" y="65" width="20" height="35" rx="2" fill="#8BBE5A" opacity="0.18" />
    // </svg>

      <Image
        src="/img/bottle3.png"
        alt="Logo"
        width={200}
        height={100}
      />
  );
}

function CreamJar({ size = 110, className = '' }: { size?: number; className?: string }) {
  return (
    // <svg width={size} height={size * 0.7} viewBox="0 0 120 84" fill="none" className={className}>
    //   <ellipse cx="60" cy="22" rx="52" ry="18" fill="url(#jarLidGrad)" />
    //   <defs>
    //     <linearGradient id="jarLidGrad" x1="8" y1="22" x2="112" y2="22" gradientUnits="userSpaceOnUse">
    //       <stop offset="0%" stopColor="#E8EAE4" />
    //       <stop offset="50%" stopColor="#F8FAF4" />
    //       <stop offset="100%" stopColor="#D8DAD4" />
    //     </linearGradient>
    //     <linearGradient id="jarBodyGrad" x1="8" y1="35" x2="112" y2="84" gradientUnits="userSpaceOnUse">
    //       <stop offset="0%" stopColor="#FAFAF8" />
    //       <stop offset="100%" stopColor="#E0E2DC" />
    //     </linearGradient>
    //   </defs>
    //   <path d="M10 30 Q8 55 8 65 Q8 80 60 80 Q112 80 112 65 Q112 55 110 30 Z"
    //     fill="url(#jarBodyGrad)" />
    //   <ellipse cx="60" cy="22" rx="44" ry="14" fill="#8BBE5A" opacity="0.12" />
    //   <rect x="38" y="48" width="44" height="14" rx="3" fill="#8BBE5A" opacity="0.1" />
    // </svg>

      <Image
        src="/img/palmoil-gallon.png"
        alt="Logo"
        width={200}
        height={100}
      />
  );
}

// ── Navigation ─────────────────────────────────────────────────────────────────
function Navigation() {
  // const [scrolled, setScrolled] = useState(false);
  // useEffect(() => {
  //   const fn = () => setScrolled(window.scrollY > 40);
  //   window.addEventListener('scroll', fn, { passive: true });
  //   return () => window.removeEventListener('scroll', fn);
  // }, []);

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'bg-white/70 backdrop-blur-xl shadow-sm border-b border-white/40 py-1'
        : 'bg-transparent py-0.5'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative max-w-7xl mx-auto lg:px-6 px-12">
        <div
          className={`py-3 flex items-center justify-between transition-all duration-500 ${
            scrolled ? 'shadow-soft' : 'shadow-card'
          }`}
        >
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.03 }}
          >
            <a href='#home'>
              <Image
                src="/palmLogo.svg"
                alt="Logo"
                width={50}
                height={50}
              />
            </a>

            <span 
              className='lg:block hidden italic' 
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.15rem', color: '#222' }}>
              Frank Hèritage
            </span>
          </motion.div>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link text-sm font-500 text-slate-600 hover:text-brand-500 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#CtaBanner"
              className="btn-shine gradient-bg text-white text-sm font-600 px-5 py-2.5 rounded-xl shadow-blue hover:opacity-90 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-brand-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 80 }}
              transition={{ duration: 0.5 }}
              className="lg:hidden mt-2 bg-white border border-emerald-500  absolute top-17.5 left-0 right-0 mx-4 rounded-2xl p-4 shadow-float"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-2.5 rounded-xl text-sm font-500 text-slate-700 hover:bg-emerald-100 hover:text-emerald-700 transition-all`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#CtaBanner"
                  className="mt-2 gradient-bg text-white text-sm font-600 px-4 py-3 rounded-xl text-center shadow-blue"
                  onClick={() => setMenuOpen(false)}
                >
                  Get In Touch
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
    </>
  );
}

// ── Hero Section ───────────────────────────────────────────────────────────────
function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(145deg, #FAFAF8 0%, #F3F4EF 60%, #EBF0E4 100%)' }}
    >
      {/* Background decor */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-16 w-96 h-96 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #8BBE5A 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-32 left-12 w-72 h-72 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #6EA844 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      {/* Floating decorations */}
      <Leaf className="top-24 left-[8%]" delay={0} size={70} />
      <Leaf className="top-48 left-[18%]" delay={1.5} size={45} />
      <SmallLeaf className="top-36 right-[22%]" delay={0.8} rotate={45} />
      <SmallLeaf className="bottom-40 left-[28%]" delay={2} rotate={-30} />
      <CoffeeBean className="top-56 left-[42%]" delay={1} />
      <CoffeeBean className="bottom-48 right-[38%]" delay={2.5} />
      <Leaf className="bottom-28 right-[12%]" delay={1.2} size={55} />

      <div className="max-w-7xl mx-auto px-6 w-full pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8BBE5A]/10 border border-[#8BBE5A]/20 text-[#6EA844] text-xs font-semibold tracking-widest uppercase mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#8BBE5A] animate-pulse gradient-text" />
              100% Pure Palm Oil
            </motion.div>

            <motion.h1
              className="sm:text-6xl text-5xl leading-[1.05] mb-2"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900, color: '#222', letterSpacing: '-0.02em' }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              PURE
              <br />
              <span className='gradient-text'>PALM OIL</span>
              <br />
              FOR EVERY
              <br />
              HOME
            </motion.h1>

            <motion.p
              className="text-gray-500 text-sm leading-relaxed mb-3.5 max-w-sm"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Experience the rich taste and natural goodness of freshly processed premium palm oil. Perfect for cooking, frying, and bringing authentic flavor to every meal.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
            >
              <div className="flex items-center gap-3 mt-4 justify-center lg:justify-start">
                <a href='#products' className="border border-[#004B18] text-white gradient-bg px-8 py-3.5 rounded-full text-sm font-medium hover:text-green-100 hover:scale-105  transition-all duration-200">
                  Our Products
                </a>
                <a href='#CtaBanner' className="bg-white border-gray-200 border text-green-600 px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-teal-50 transition-all duration-200 flex items-center gap-2 hover:gap-4 whitespace-nowrap">
                  Contact <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex items-center gap-10 mt-7"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              {[
                { num: '500+', label: 'Products' },
                { num: '98%', label: 'Natural' },
                { num: '200k+', label: 'Customers' },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div className="text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif', color: '#222' }}>{num}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — products */}
          <motion.div
            className="relative flex items-center justify-center"
            style={{ y }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Circular background */}
            <motion.div
              className="absolute w-[420px] h-[420px] rounded-full"
              style={{ background: 'radial-gradient(circle at 40% 40%, #C8E4A4 0%, #A8D480 40%, #8BBE5A 70%, transparent 100%)', opacity: 0.35 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            />
            <div
              className="absolute w-[380px] h-[380px] rounded-full border border-[#8BBE5A]/20"
              style={{ background: 'radial-gradient(circle, #EBF4DE 0%, transparent 70%)' }}
            />

            <span className=' absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center'>
              <Image
                src="/img/palm.png"
                alt="Logo"
                width={500}
                height={500}
              />
            </span>

            {/* Products */}
            <motion.div
              className="relative z-10 flex items-end gap-4"
              style={{ scale }}
            >
              <motion.div
                animate={{ y: [0, -16, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
              >
                <AmberBottle size={130} />
              </motion.div>
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <WhiteBottle size={150} />
              </motion.div>
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <DropperBottle size={100} />
              </motion.div>
            </motion.div>

            {/* Floating leaves around products */}
            <Leaf className="-top-10 -left-10" delay={0.5} size={65} />
            <Leaf className="top-10 -right-8" delay={1.5} size={50} />
            <SmallLeaf className="bottom-0 -left-4" delay={1} rotate={60} />
            <SmallLeaf className="-bottom-6 right-10" delay={2} rotate={-45} />
            <CoffeeBean className="top-20 left-0" delay={0.8} />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs text-gray-400 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#8BBE5A] to-transparent" />
      </motion.div>
    </section>
  );
}

// ── About Section ──────────────────────────────────────────────────────────────
function AboutSection() {
  const features = [
    {
      icon: '🌴',
      title: 'Freshly Harvested',
      desc: 'Produced from carefully selected fresh palm fruits.'
    },
    {
      icon: '🛢️',
      title: 'Pure Palm Oil',
      desc: '100% natural with no additives or artificial coloring.'
    },
    {
      icon: '🚚',
      title: 'Fast Delivery',
      desc: 'Reliable delivery to homes, restaurants, and businesses.'
    },
    {
      icon: '⭐',
      title: 'Trusted Quality',
      desc: 'Serving families and food businesses with premium palm oil.'
    },
  ];

  return (
    <div className='relative'>
      <section id="about" className="pt-28 pb-28 " style={{ background: '#FAFAF8' }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="text-center ">
            <p className="text-xs tracking-[0.25em] uppercase gradient-text font-semibold mb-3">Our Story</p>
            <h2 className="text-4xl xl:text-6xl font-black" style={{ fontFamily: 'Poppins, sans-serif', color: '#222', letterSpacing: '-0.02em' }}>
              ABOUT OUR
              <span className='gradient-text'> BRAND</span>
            </h2>
            <div className="w-16 h-0.5 gradient-bg mx-auto mt-5" />
            <p className="text-gray-500 mt-5 max-w-md mx-auto leading-relaxed text-sm">
              Our journey began with a simple mission—to provide every home and business with fresh, premium-quality palm oil processed using the finest traditional and modern methods.
            </p>
          </FadeUp>

          <AboutCompany />

          <div className="grid lg:grid-cols-3 gap-12 items-center border-t border-[#005734] pt-20">
            {/* Left features */}
            <div className="space-y-8">
              {features.slice(0, 2).map((f, i) => (
                <FadeUp key={f.title} delay={i * 0.15}>
                  <motion.div
                    className="flex items-start gap-4 p-5 rounded-2xl hover:bg-[#F3F4EF] transition-colors duration-300 group"
                    whileHover={{ x: 6 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#8BBE5A]/10 flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-[#8BBE5A]/20 transition-colors">
                      {f.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#222] mb-1 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>{f.title}</h3>
                      <p className="text-gray-400 text-xs leading-relaxed">{f.desc}</p>
                    </div>
                  </motion.div>
                </FadeUp>
              ))}
            </div>

            {/* Center product visual */}
            <FadeUp delay={0.2} className="flex items-center justify-center">
              <div className="relative">
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ background: 'radial-gradient(circle, #C8E4A4 0%, transparent 70%)', transform: 'scale(1.3)' }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                />
                <div className="relative flex flex-col items-center gap-4">
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    className="flex justify-center items-center gap-3"
                  >
                    <AmberBottle size={110} />
                    <WhiteBottle size={130} />
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  >
                    <CreamJar size={100} />
                  </motion.div>
                </div>
                <Leaf className="-top-8 -left-12" delay={0} size={55} />
                <Leaf className="-bottom-4 -right-10" delay={1.5} size={45} />
                <SmallLeaf className="top-12 -right-8" delay={0.8} rotate={-30} />
              </div>
            </FadeUp>

            {/* Right features */}
            <div className="space-y-8">
              {features.slice(2).map((f, i) => (
                <FadeUp key={f.title} delay={i * 0.15 + 0.1}>
                  <motion.div
                    className="flex items-start gap-4 p-5 rounded-2xl hover:bg-[#F3F4EF] transition-colors duration-300 group"
                    whileHover={{ x: -6 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#8BBE5A]/10 flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-[#8BBE5A]/20 transition-colors">
                      {f.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#222] mb-1 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>{f.title}</h3>
                      <p className="text-gray-400 text-xs leading-relaxed">{f.desc}</p>
                    </div>
                  </motion.div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>

      </section>

        <span className='absolute -top-12 -right-16 flex justify-center items-center'>
          <span className='lg:hidden'>
            <Image
              src="/img/palmSeeds.png"
              alt="Logo"
              width={210}
              height={210}
            />
          </span>
          <span className='lg:block hidden'>
            <Image
              src="/img/palmSeeds.png"
              alt="Logo"
              width={280}
              height={280}
            />
          </span>
        </span>
    </div>
  );
}

// ── Products Section ───────────────────────────────────────────────────────────
const products = [
  {
    name: '500ml Premium Palm Oil',
    desc: 'Freshly processed, 100% natural palm oil. Perfect for everyday home cooking with its rich taste and vibrant red color.',
    price: '₦2,500',
    tag: 'Best Seller',
  },
  {
    name: '1 Litre Premium Palm Oil',
    desc: 'Pure, additive-free palm oil carefully processed to preserve its natural flavor and nutritional value.',
    price: '₦4,500',
    tag: 'Popular',
  },
  {
    name: '5 Litre Family Pack',
    desc: 'Ideal for large families, restaurants, and catering businesses. Premium quality at a great value.',
    price: '₦20,000',
    tag: 'Value Pack',
  },
  {
    name: '25 Litre Bulk Supply',
    desc: 'Perfect for wholesalers, food vendors, and commercial kitchens looking for consistent quality and reliable supply.',
    price: '₦95,000',
    tag: 'Wholesale',
  },
];

function ProductShowcase() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const go = (dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + products.length) % products.length);
  };

  const product = products[index];

  const ProductVisual = () => {
    const visuals = [
      <div key="0" className="flex items-end justify-center gap-5">
        <motion.div animate={{ y: [0, -18, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
          <AmberBottle size={120} />
        </motion.div>
        <motion.div animate={{ y: [0, -22, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}>
          <WhiteBottle size={150} />
        </motion.div>
        <motion.div animate={{ y: [0, -14, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>
          <DropperBottle size={100} />
        </motion.div>
      </div>,
      <div key="1" className="flex items-end justify-center gap-5">
        <motion.div animate={{ y: [0, -18, 0] }} transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}>
          <AmberBottle size={160} />
        </motion.div>
        <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}>
          <CreamJar size={130} />
        </motion.div>
      </div>,
      <div key="2" className="flex items-end justify-center gap-5">
        <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
          <WhiteBottle size={160} />
        </motion.div>
        <motion.div animate={{ y: [0, -16, 0] }} transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}>
          <DropperBottle size={110} />
        </motion.div>
      </div>,
      <div key="3" className="flex items-center justify-center flex-col gap-3">
        <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}>
          <CreamJar size={180} />
        </motion.div>
        <div className="flex gap-3">
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}>
            <AmberBottle size={80} />
          </motion.div>
          <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>
            <WhiteBottle size={80} />
          </motion.div>
        </div>
      </div>,
    ];
    return visuals[index];
  };

  return (
    <section id="products" className="py-28 overflow-hidden" style={{ background: '#F3F4EF' }}>
      <div className="max-w-7xl mx-auto px-6 z-10">
        <FadeUp className="relative text-center mb-20 z-40">
          <p className="text-xs tracking-[0.25em] uppercase gradient-text font-semibold mb-3 z-10">Our Products</p>
          <h2 className="text-4xl xl:text-6xl font-black z-10" style={{ fontFamily: 'Poppins, sans-serif', color: '#222', letterSpacing: '-0.02em' }}>
            CHOOSE YOUR
            <span className='gradient-text'> SIZE</span>
          </h2>
          <div className="w-16 h-0.5 gradient-bg mx-auto mt-5" />


          <span className='absolute -top-20 -left-7 xl:-left-16 -z-10 flex justify-center items-center'>
            <span>
              <Image
                src="/img/palmLeaf.png"
                alt="Logo"
                width={300}
                height={300}
              />
            </span>
          </span>
        </FadeUp>

        <div className="relative grid lg:grid-cols-2 gap-16 items-center">
          {/* Product visual */}
          <FadeUp delay={0.1} className="relative">
            <div className="relative flex items-center justify-center min-h-[420px]">
              <motion.div
                className="absolute w-80 h-80 rounded-full opacity-30"
                style={{ background: 'radial-gradient(circle, #B8D890 0%, #8BBE5A 50%, transparent 80%)' }}
                animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                transition={{ rotate: { duration: 40, repeat: Infinity, ease: 'linear' }, scale: { duration: 6, repeat: Infinity } }}
              />

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={index}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 80, scale: 0.92 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: direction * -80, scale: 0.92 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-10"
                  whileHover={{ scale: 1.04, rotate: 2 }}
                >
                  <ProductVisual />
                </motion.div>
              </AnimatePresence>

              <Leaf className="-top-6 -left-6" delay={0} size={55} />
              <SmallLeaf className="bottom-4 right-0" delay={1} rotate={30} />
              <CoffeeBean className="top-16 right-4" delay={0.6} />
            </div>
          </FadeUp>

          {/* Product info */}
          <FadeUp delay={0.2}>
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className='bg-green-100 p-1 rounded-full'>
                    <span className="inline-block px-3 py-1 gradient-text text-xs font-semibold tracking-widest uppercase mb-4">
                      {product.tag}
                    </span>
                  </span>
                  <h3 className="text-4xl font-black mb-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#222', letterSpacing: '-0.02em' }}>
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-base leading-relaxed mb-6">{product.desc}</p>
                  <p className="text-3xl font-bold gradient-text mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>{product.price}</p>
                </motion.div>
              </AnimatePresence>

              <div className="flex flex-wrap gap-3 mb-8">
                <motion.a
                  href='#CtaBanner'
                  className="px-7 py-3.5 rounded-full gradient-bg text-white text-sm font-semibold tracking-wide hover:scale-105 transition-all duration-100 shadow-lg shadow-[#8BBE5A]/20"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Buy Now
                </motion.a>
                <motion.a
                  href='#contact'
                  className="px-7 py-3.5 rounded-full border-2 border-[#005734] text-[#005734] text-sm font-semibold tracking-wide hover:bg-[#8BBE5A]/5 transition-colors duration-300"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Custom Order
                </motion.a>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-4">
                <motion.button
                  className="w-11 h-11 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#005734] hover:text-[#005734] transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => go(-1)}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                </motion.button>
                <span className="text-xs text-gray-600 font-medium">{index + 1} / {products.length}</span>
                <motion.button
                  className="w-11 h-11 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#005734] hover:text-[#005734] transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => go(1)}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.button>

                {/* Dots */}
                <div className="flex gap-1.5 ml-2">
                  {products.map((_, i) => (
                    <button
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? 'w-6 bg-[#005734]' : 'w-1.5 bg-gray-200'}`}
                      onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

// ── Promotional Banner ─────────────────────────────────────────────────────────
function PromoBanner() {
  return (
    <section id="offers" className="py-24 overflow-hidden" style={{ background: '#FAFAF8' }}>
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <div
            className="relative rounded-3xl overflow-y-hidden overflow-x-auto sm:hidden flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #F3F4EF 0%, #EBF0E4 100%)' }}
          >
            {/* Background decorative shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 -translate-y-1/4 translate-x-1/4"
              style={{ background: 'radial-gradient(circle, #8BBE5A 0%, transparent 70%)' }} />
            <div className="absolute bottom-0 left-32 w-64 h-64 rounded-full opacity-10"
              style={{ background: 'radial-gradient(circle, #6EA844 0%, transparent 70%)' }} />

            <div className="grid lg:grid-cols-2 gap-0 items-center min-h-[440px]">
              {/* Left — product image */}
              <div className="relative flex items-center justify-center p-12">
                <motion.div
                  className="absolute w-72 h-72 rounded-full opacity-25"
                  style={{ background: 'radial-gradient(circle, #A8D480 0%, transparent 70%)' }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                />
                <div className="relative z-10 flex items-end gap-4">
                  <motion.div
                    animate={{ y: [0, -18, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                    whileHover={{ scale: 1.06, rotate: -3 }}
                  >
                    <AmberBottle size={140} />
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -22, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    whileHover={{ scale: 1.06, rotate: 3 }}
                  >
                    <WhiteBottle size={160} />
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -14, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                    whileHover={{ scale: 1.06 }}
                  >
                    <DropperBottle size={110} />
                  </motion.div>
                </div>
                <Leaf className="top-8 left-8" delay={0} size={60} />
                <SmallLeaf className="bottom-10 right-6" delay={1.2} rotate={-40} />
                <CoffeeBean className="top-20 right-16" delay={0.5} />
              </div>

              {/* Right — offer text */}
              <div className="p-12 lg:pr-16 relative z-10">
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="text-xs tracking-[0.3em] uppercase gradient-text font-semibold mb-4 block">Special Deal</span>
                  <h2 className="gradient-text text-6xl xl:text-8xl font-black leading-none mb-2"
                    style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.03em' }}>
                    WHOLESALE
                  </h2>
                  <h2 className="gradient-text text-6xl xl:text-8xl font-black leading-none mb-6"
                    style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.03em' }}>
                    PRICE
                  </h2>
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-4xl font-black text-[#222]" style={{ fontFamily: 'Poppins, sans-serif' }}>30%</span>
                    <span className="text-xl font-semibold text-gray-500">OFF</span>
                  </div>
                  <p className="text-gray-600 text-base mb-8">
                    Need palm oil in large quantities? We offer affordable bulk pricing with fast and reliable delivery.
                  </p>
                  <motion.button
                    className="relative px-10 py-4 rounded-full gradient-bg text-white text-sm font-bold tracking-widest uppercase shadow-xl shadow-[#8BBE5A]/30 overflow-hidden"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <a href='#CtaBanner' className="relative z-10">ORDER NOW</a>
                    <motion.div
                      className="absolute inset-0 bg-[#6EA844]"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </div>
        </FadeUp>

        <FadeUp>
          <div
            className="relative rounded-3xl overflow-hidden hidden sm:flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #F3F4EF 0%, #EBF0E4 100%)' }}
          >
            {/* Background decorative shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 -translate-y-1/4 translate-x-1/4"
              style={{ background: 'radial-gradient(circle, #8BBE5A 0%, transparent 70%)' }} />
            <div className="absolute bottom-0 left-32 w-64 h-64 rounded-full opacity-10"
              style={{ background: 'radial-gradient(circle, #6EA844 0%, transparent 70%)' }} />

            <div className="grid lg:grid-cols-2 gap-0 items-center min-h-[440px]">
              {/* Left — product image */}
              <div className="relative flex items-center justify-center p-12">
                <motion.div
                  className="absolute w-72 h-72 rounded-full opacity-25"
                  style={{ background: 'radial-gradient(circle, #A8D480 0%, transparent 70%)' }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                />
                <div className="relative z-10 flex items-end gap-4">
                  <motion.div
                    animate={{ y: [0, -18, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                    whileHover={{ scale: 1.06, rotate: -3 }}
                  >
                    <AmberBottle size={140} />
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -22, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    whileHover={{ scale: 1.06, rotate: 3 }}
                  >
                    <WhiteBottle size={160} />
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -14, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                    whileHover={{ scale: 1.06 }}
                  >
                    <DropperBottle size={110} />
                  </motion.div>
                </div>
                <Leaf className="top-8 left-8" delay={0} size={60} />
                <SmallLeaf className="bottom-10 right-6" delay={1.2} rotate={-40} />
                <CoffeeBean className="top-20 right-16" delay={0.5} />
              </div>

              {/* Right — offer text */}
              <div className="p-12 lg:pr-16 relative z-10">
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="text-xs tracking-[0.3em] uppercase gradient-text font-semibold mb-4 block">Special Deal</span>
                  <h2 className="gradient-text text-6xl xl:text-8xl font-black leading-none mb-2"
                    style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.03em' }}>
                    WHOLESALE
                  </h2>
                  <h2 className="gradient-text text-6xl xl:text-8xl font-black leading-none mb-6"
                    style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.03em' }}>
                    PRICE
                  </h2>
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-4xl font-black text-[#222]" style={{ fontFamily: 'Poppins, sans-serif' }}>30%</span>
                    <span className="text-xl font-semibold text-gray-500">OFF</span>
                  </div>
                  <p className="text-gray-600 text-base mb-8">
                    Need palm oil in large quantities? We offer affordable bulk pricing with fast and reliable delivery.
                  </p>
                  <motion.button
                    className="relative px-10 py-4 rounded-full gradient-bg text-white text-sm font-bold tracking-widest uppercase shadow-xl shadow-[#8BBE5A]/30 overflow-hidden"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <a href='#CtaBanner' className="relative z-10">ORDER NOW</a>
                    <motion.div
                      className="absolute inset-0 bg-[#6EA844]"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

// ── Testimonials ───────────────────────────────────────────────────────────────
const testimonials = [
  {
    quote: "I've been buying palm oil from this brand for over two years now. The quality is always consistent, fresh, and perfect for all my family meals.",
    name: 'Amina Yusuf',
    role: 'Home Cook',
    initials: 'AY',
  },
  {
    quote: "As a restaurant owner, quality ingredients matter. Their palm oil gives our dishes an authentic taste, and deliveries are always on time.",
    name: 'Chinedu Okafor',
    role: 'Restaurant Owner',
    initials: 'CO',
  },
  {
    quote: "Excellent customer service and premium-quality palm oil. I highly recommend them for both household and wholesale purchases.",
    name: 'Grace Eze',
    role: 'Food Vendor',
    initials: 'GE',
  },
];

function TestimonialsSection() {
  return (
    <section className="py-28 overflow-hidden" style={{ background: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp className="text-center mb-20">
          <p className="text-xs tracking-[0.25em] uppercase gradient-text font-semibold mb-3">Customers Review</p>
          <h2 className="text-4xl xl:text-6xl font-black" style={{ fontFamily: 'Poppins, sans-serif', color: '#222', letterSpacing: '-0.02em' }}>
            WHAT OUR
            <span className='gradient-text'> CUSTOMERS SAY</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#8BBE5A] mx-auto mt-5" />
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeUp key={t.name} delay={i * 0.12}>
              <motion.div
                className="relative p-8 rounded-2xl border border-[#E7E7E7] bg-white group"
                whileHover={{ y: -8, boxShadow: '0 24px 64px -12px rgba(139,190,90,0.15)' }}
                transition={{ duration: 0.3 }}
              >
                {/* Quotation mark */}
                <div
                  className="text-7xl leading-none font-black text-[#8BBE5A]/15 absolute top-4 left-6 select-none"
                  style={{ fontFamily: 'Georgia, serif' }}
                  aria-hidden
                >
                  "
                </div>
                <div className="relative z-10">
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 mt-4">{t.quote}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#8BBE5A]/10 border border-[#8BBE5A]/20 flex items-center justify-center">
                      <span className="text-xs font-bold text-[#005734]">{t.initials}</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#222]" style={{ fontFamily: 'Poppins, sans-serif' }}>{t.name}</p>
                      <p className="text-xs text-gray-400">{t.role}</p>
                    </div>
                    <div className="ml-auto flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <svg key={s} width="12" height="12" viewBox="0 0 24 24" fill="#70f334">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>

        {/* Brand logos */}
        <FadeUp delay={0.3} className="mt-16">
          <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-8">Trusted By</p>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {[
              'Restaurants',
              'Hotels',
              'Food Vendors',
              'Supermarkets',
              'Wholesalers'
            ].map((brand) => (
              <span
                key={brand}
                className="text-gray-300 text-base font-bold tracking-wider hover:text-gray-400 transition-colors duration-200 cursor-default"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {brand}
              </span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

// ── Footer ─────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: '#20382f', color: '#FAFAF8' }} className="pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <a href='#home' className='p-2 bg-white rounded-full'>
                <Image
                  src="/palmLogo.svg"
                  alt="Logo"
                  width={50}
                  height={50}
                />
              </a>
              <span
                className='italic'
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#FAFAF8' }}>
                Frank Hèritage
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Providing premium-quality, 100% natural palm oil for homes, restaurants, supermarkets, and businesses across Nigeria. Freshness and quality you can trust.
            </p>
            <div className="flex gap-3">
              {['IG', 'FB', 'TW', 'YT'].map((s) => (
                <motion.button
                  key={s}
                  className="w-9 h-9 rounded-full border border-white/10 text-xs text-gray-400 hover:border-[#8BBE5A] hover:text-[#8BBE5A] transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                >
                  {s}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold mb-5 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Products', 'Offers', 'Contact'].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-sm text-gray-400 hover:text-[#8BBE5A] transition-colors duration-200">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-bold mb-5 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>Products</h4>
            <ul className="space-y-3">
              {['500ml Bottle', '1 litre Bottle', '5 litre Jerry Can', '25 litre Container', 'Wholesale Orders', 'Bulk Supply'].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-gray-400 hover:text-[#8BBE5A] transition-colors duration-200">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-bold mb-5 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>Stay Updated</h4>
            <p className="text-sm text-gray-400 mb-4">Subscribe to receive updates on new stock, special offers, and wholesale pricing.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#70f334] transition-colors"
              />
              <motion.button
                className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center flex-shrink-0 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-8">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} Lumière Botanicals. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((l) => (
              <a key={l} href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── Loading Screen ─────────────────────────────────────────────────────────────
function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ background: '#FAFAF8' }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 1.4 }}
      onAnimationComplete={(def: Record<string, number>) => {
        if (def.opacity === 0) {
          const el = document.getElementById('loading-screen');
          if (el) el.style.display = 'none';
        }
      }}
      id="loading-screen"
    >
      <div className="flex flex-col justify-center items-center gap-4">

        <div className='flex flex-col justify-center items-center gap-2'>
          <span>
            <Image
              src="/palmLogo.svg"
              alt="Logo"
              width={50}
              height={50}
            />
          </span>

          <motion.span
            className="text-xs tracking-[0.3em] italic uppercase text-gray-400"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Frank Hèritage
          </motion.span>
        </div>

        <motion.div
          className="w-16 h-16 mx-auto mb-4"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        >
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="28" stroke="#E7E7E7" strokeWidth="2" />
            <circle cx="32" cy="32" r="28" stroke="#8BBE5A" strokeWidth="2"
              strokeDasharray="88" strokeDashoffset="44" strokeLinecap="round" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────────
export default function Home() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className='relative'>
      <LoadingScreen />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ProductShowcase />
        <PromoBanner />
        <ContactUs />
        <TestimonialsSection />
        <CtaBanner />
        <Footer />
      </motion.main>
      
      <WhatsappWidget />
    </div>
  );
}
