"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <motion.a
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        href={BUSINESS.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-5 py-3.5 rounded-full shadow-lg shadow-green-600/30 hover:shadow-green-500/40 font-semibold text-sm transition-all hover:-translate-y-1"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline">WhatsApp</span>
      </motion.a>

      <motion.a
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 2.2, type: "spring", stiffness: 200 }}
        href={`tel:${BUSINESS.phone1}`}
        className="flex items-center gap-2 bg-gradient-to-r from-gold-light to-gold-dark text-navy px-5 py-3.5 rounded-full shadow-lg shadow-gold/30 hover:shadow-gold/50 font-semibold text-sm transition-all hover:-translate-y-1"
        aria-label="Call now"
      >
        <Phone className="w-5 h-5" />
        <span className="hidden sm:inline">Call</span>
      </motion.a>
    </div>
  );
}
