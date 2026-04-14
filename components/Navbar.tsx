"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Calculators", href: "#calculators" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center text-gold font-bold text-lg font-[var(--font-baloo)]">
            ॐ
          </div>
          <div>
            <span className="text-sm font-bold text-cream tracking-tight block leading-tight">
              {BUSINESS.name}
            </span>
            <span className="text-[10px] text-gold/70 tracking-wider uppercase leading-tight">
              {BUSINESS.company}
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-cream/70 hover:text-gold transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold rounded transition-all group-hover:w-full" />
            </a>
          ))}
          <a
            href={`tel:${BUSINESS.phone1}`}
            className={cn(buttonVariants(), "bg-gold hover:bg-gold-light text-navy font-semibold rounded-full px-5 gap-2")}
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger className="text-cream p-2">
                <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-navy-light border-l border-white/5 w-72"
            >
              <SheetTitle className="text-cream font-bold mb-6">
                Menu
              </SheetTitle>
              <nav className="flex flex-col gap-1 mt-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-cream/80 hover:text-gold hover:bg-white/5 px-4 py-3 rounded-lg transition-all text-base font-medium"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="mt-6 px-4">
                  <a
                    href={`tel:${BUSINESS.phone1}`}
                    className={cn(buttonVariants(), "w-full bg-gold hover:bg-gold-light text-navy font-semibold rounded-full gap-2 flex items-center justify-center")}
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
