"use client";

import { motion } from "framer-motion";
import { MapPin, Award, Briefcase, Clock } from "lucide-react";
import Image from "next/image";
import { BUSINESS } from "@/lib/constants";

const badges = [
  { icon: Award, label: "LIC Agent" },
  { icon: Briefcase, label: "Financial Advisor" },
  { icon: Clock, label: "Since 2007" },
  { icon: MapPin, label: "Dehradun Based" },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 px-6 bg-gradient-navy-reverse">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold font-[var(--font-playfair)] text-cream">
            About Me
          </h2>
          <p className="text-xl text-gold/70 font-[var(--font-baloo)] mt-2">
            मेरे बारे में
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Photos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Main photo */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl gold-ring overflow-hidden">
                <Image
                  src="/images/yogendra-profile.jpg"
                  alt="Yogendra Singh Panwar at his office"
                  fill
                  className="object-cover object-top"
                />
              </div>
              {/* Awards overlay card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -right-6 glass-card rounded-xl p-3 flex items-center gap-3"
              >
                <div className="w-16 h-16 rounded-xl overflow-hidden relative">
                  <Image
                    src="/images/awards.jpg"
                    alt="Awards and certifications"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-gold font-bold text-sm">Award Winner</p>
                  <p className="text-cream/50 text-xs">LIC Recognition</p>
                </div>
              </motion.div>

              {/* Location badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="absolute -top-4 -left-4 glass-card rounded-full px-4 py-2 flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-gold" />
                <span className="text-cream/80 text-xs font-medium">
                  Dehradun
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-cream font-[var(--font-baloo)]">
              {BUSINESS.nameHindi}
            </h3>
            <p className="text-gold/80 font-medium mt-1">
              {BUSINESS.title}
            </p>
            <p className="text-cream/50 text-sm mt-1 font-[var(--font-baloo)]">
              {BUSINESS.titleHindi}
            </p>
            <p className="text-cream/60 text-sm mt-1">
              {BUSINESS.company}, {BUSINESS.address}
            </p>

            <p className="text-cream/70 text-base leading-relaxed mt-6">
              With over 18+ years of experience in life insurance and financial
              planning, I have helped thousands of families in Dehradun and across
              India secure their futures. My approach is personal,
              transparent, and built on long-term relationships — not just
              policies.
            </p>
            <p className="text-cream/70 text-base leading-relaxed mt-4">
              As a recognized LIC agent who participated in the Guinness World
              Record attempt for most life insurance policies sold in 24 hours, I
              bring dedication and expertise to every client interaction. Whether
              it&apos;s a simple term plan or comprehensive retirement planning, I&apos;m
              here to guide you every step of the way.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              {badges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 glass-card rounded-full px-4 py-2 text-sm"
                >
                  <Icon className="w-4 h-4 text-gold" />
                  <span className="text-cream/80">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
