"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

function TestimonialCard({
  name,
  city,
  quote,
  rating,
}: {
  name: string;
  city: string;
  quote: string;
  rating: number;
}) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="flex-shrink-0 w-[340px] glass-card rounded-2xl p-7 hover:border-gold/20 transition-all duration-300 group">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-11 h-11 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center text-gold font-bold text-sm">
          {initials}
        </div>
        <div>
          <p className="text-cream font-semibold text-sm">{name}</p>
          <p className="text-cream/40 text-xs">{city}</p>
        </div>
      </div>
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-gold text-gold"
          />
        ))}
      </div>
      <p className="text-cream/60 text-sm leading-relaxed italic">
        &ldquo;{quote}&rdquo;
      </p>
    </div>
  );
}

export default function Testimonials() {
  // Double the list for seamless infinite scroll
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="py-20 sm:py-28 overflow-hidden bg-navy">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16 px-6"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold font-[var(--font-playfair)] text-cream">
          What Our Clients Say
        </h2>
        <p className="text-xl text-gold/70 font-[var(--font-baloo)] mt-2">
          ग्राहक अनुभव
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4 rounded-full" />
      </motion.div>

      {/* Marquee Row 1 */}
      <div className="relative group">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-navy to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-navy to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-6 animate-[marquee_60s_linear_infinite] group-hover:[animation-play-state:paused]"
          style={{ width: "max-content" }}
        >
          {doubled.map((t, i) => (
            <TestimonialCard key={`a-${i}`} {...t} />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (reverse) */}
      <div className="relative group mt-6">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-navy to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-navy to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-6 animate-[marquee_60s_linear_infinite_reverse] group-hover:[animation-play-state:paused]"
          style={{ width: "max-content" }}
        >
          {[...doubled].reverse().map((t, i) => (
            <TestimonialCard key={`b-${i}`} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
