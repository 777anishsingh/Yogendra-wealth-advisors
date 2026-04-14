"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Calendar, Calculator, ChevronDown } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const ThreeScene = dynamic(() => import("./ThreeScene"), { ssr: false });

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* 3D Background */}
      <ThreeScene />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/90 to-navy-light/70 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold border border-gold/30 rounded-full px-4 py-2 mb-6">
                Since 2007 · Dehradun
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] font-[var(--font-baloo)]"
            >
              {BUSINESS.nameHindi}
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl font-[var(--font-playfair)] text-cream/80 mt-3 italic"
            >
              {BUSINESS.titleTransliteration}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base text-cream/60 mt-4 max-w-lg leading-relaxed"
            >
              {BUSINESS.tagline}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mt-3 text-gold/80 font-bold text-lg font-[var(--font-baloo)]"
            >
              {BUSINESS.hindiTags}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mt-8"
            >
              <a
                href="#contact"
                className={cn(buttonVariants({ size: "lg" }), "bg-gold hover:bg-gold-light text-navy font-bold rounded-full px-8 gap-2 shadow-lg shadow-gold/20 hover:shadow-gold/40 transition-all")}
              >
                <Calendar className="w-5 h-5" />
                Book Free Consultation
              </a>
              <a
                href="#calculators"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-cream/20 text-cream hover:bg-white/5 rounded-full px-8 gap-2")}
              >
                <Calculator className="w-5 h-5" />
                Try Our Calculators
              </a>
            </motion.div>
          </motion.div>

          {/* Right — Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" as const }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Gold ring glow */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-gold/30 to-gold/5 blur-l animate-[pulse-gold_3s_ease-in-out_infinite]" />
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full gold-ring overflow-hidden"
              >
                <Image
                  src="/images/yogendra-profile.jpg"
                  alt="Yogendra Singh Panwar - Insurance & Financial Advisor"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </motion.div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -bottom-4 -right-4 glass-card rounded-2xl px-4 py-3 text-center"
              >
                <p className="text-gold font-bold text-xl">18+</p>
                <p className="text-cream/60 text-xs">Years of Trust</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-cream/30 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 text-gold/50 scroll-indicator" />
      </motion.div>
    </section>
  );
}
