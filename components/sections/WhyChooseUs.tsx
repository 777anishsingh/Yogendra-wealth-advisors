"use client";

import { motion } from "framer-motion";
import {
  Banknote,
  BarChart3,
  Zap,
  MapPin,
  UserCheck,
  MessageSquare,
  Clock,
  Award,
} from "lucide-react";
import { USP_ITEMS, TRUST_POINTS } from "@/lib/constants";

import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Banknote,
  BarChart3,
  Zap,
};

const trustIcons = [MapPin, UserCheck, MessageSquare, Clock, Award];

export default function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28 px-6 bg-gradient-navy-reverse relative overflow-hidden">
      {/* Diagonal accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-lic-blue/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold font-[var(--font-playfair)] text-cream">
            Why Choose Us
          </h2>
          <p className="text-xl text-gold/70 font-[var(--font-baloo)] mt-2">
            हमें क्यों चुनें
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — USP Blocks */}
          <div className="space-y-8">
            {USP_ITEMS.map((item, i) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div
                  key={item.titleEn}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex gap-5 group"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Icon className="w-8 h-8 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-cream">
                      {item.titleEn}
                    </h3>
                    <p className="text-gold/60 text-sm font-[var(--font-baloo)] mt-0.5">
                      {item.titleHi}
                    </p>
                    <p className="text-cream/50 text-sm mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right — Trust Points */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-8"
          >
            <h3 className="text-lg font-bold text-cream mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-gold" />
              Our Promise
            </h3>
            <ul className="space-y-4">
              {TRUST_POINTS.map((point, i) => {
                const TrustIcon = trustIcons[i % trustIcons.length];
                return (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center mt-0.5">
                      <TrustIcon className="w-4 h-4 text-gold" />
                    </div>
                    <span className="text-cream/70 text-sm leading-relaxed">
                      {point}
                    </span>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
