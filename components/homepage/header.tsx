"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Find the hero section element - check multiple selectors for different page types
      // Home page: section.h-screen
      // Other pages: div with hero-like heights (check class names or position)
      let heroSection =
        document.querySelector("section.h-screen") ||
        document.querySelector("section:first-of-type");

      // If not found, look for div elements that might be hero sections
      if (!heroSection) {
        const allDivs = document.querySelectorAll("main > div, body > div");
        for (const div of Array.from(allDivs)) {
          const classes = div.className || "";
          const height = div.getBoundingClientRect().height;
          // Check if it's a hero-like element (has height classes or is tall enough)
          if (
            classes.includes("h-[70vh]") ||
            classes.includes("h-screen") ||
            classes.includes("hero") ||
            (height >= window.innerHeight * 0.5 &&
              height <= window.innerHeight * 0.8)
          ) {
            heroSection = div as HTMLElement;
            break;
          }
        }
      }

      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        const transitionStart = 40; // Start transition 40px before hero section ends

        // Calculate scroll progress: 0 when hero bottom is at transitionStart, 1 when hero bottom is <= 0
        if (heroRect.bottom > transitionStart) {
          // Still in hero section, fully transparent
          setIsScrolled(false);
          setScrollProgress(0);
        } else if (heroRect.bottom <= 0) {
          // Completely past hero section, fully blurred
          setIsScrolled(true);
          setScrollProgress(1);
        } else {
          // In transition zone (40px before hero ends)
          const progress = 1 - heroRect.bottom / transitionStart;
          setIsScrolled(true);
          setScrollProgress(Math.min(Math.max(progress, 0), 1));
        }
      } else {
        // Fallback: use viewport height if hero section not found
        const heroHeight = window.innerHeight;
        setIsScrolled(window.scrollY > heroHeight - 100);
        setScrollProgress(window.scrollY > heroHeight - 100 ? 1 : 0);
      }
    };

    // Check on mount and scroll
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "خدماتنا", href: "/services" },
    { name: "عن الشركة", href: "/about" },
    { name: "اتصل بنا", href: "/contact" },
  ];

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass-panel shadow-lg backdrop-blur-md" : ""
      )}
      style={{
        backgroundColor: isScrolled
          ? `rgba(255, 255, 255, ${0.8 * scrollProgress})`
          : "transparent",
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div className="container-custom ">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/Abu-_logo-1.png"
                alt="أبو خليفة"
                width={120}
                height={60}
                className="h-12 w-auto lg:h-16 object-contain"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => {
              const isActive =
                pathname === link.href ||
                (link.href === "/" && pathname === "/");
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "text-base font-medium transition-colors hover:text-accent",
                      isScrolled ? "text-foreground" : "text-white",
                      isActive && "text-primary"
                    )}
                    onClick={(e) => {
                      setIsMobileMenuOpen(false);
                      if (link.href.startsWith("/#")) {
                        const hash = link.href.replace("/#", "#");
                        if (pathname !== "/") {
                          // Navigate to home first, then scroll
                          window.location.href = link.href;
                        } else {
                          // Already on home page, just scroll
                          e.preventDefault();
                          const element = document.querySelector(hash);
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                          }
                        }
                      }
                    }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.a
              href="tel:+123456789"
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors",
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-white hover:text-accent"
              )}
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="w-4 h-4" />
              <span>+123 456 789</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className={cn(
              "lg:hidden py-6 mt-2 rounded-2xl border border-white/30",
              isScrolled
                ? "glass-panel"
                : "bg-white/40 backdrop-blur-3xl shadow-lg"
            )}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-foreground font-medium hover:text-primary transition-colors px-4 py-2"
                  onClick={(e) => {
                    setIsMobileMenuOpen(false);
                    if (link.href.startsWith("/#")) {
                      const hash = link.href.replace("/#", "#");
                      if (pathname !== "/") {
                        // Navigate to home first, then scroll
                        window.location.href = link.href;
                      } else {
                        // Already on home page, just scroll
                        e.preventDefault();
                        const element = document.querySelector(hash);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }
                    }
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
