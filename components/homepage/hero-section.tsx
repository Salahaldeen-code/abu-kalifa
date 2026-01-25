"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Plane, Shield, Award, Sparkles, MapPin, Globe } from "lucide-react";
import { Reveal } from "./reveal";
import { Button } from "../ui/button";

// Floating particle component
const FloatingParticle = ({
  delay,
  duration,
  x,
  y,
  size,
}: {
  delay: number;
  duration: number;
  x: string;
  y: string;
  size: number;
}) => (
  <motion.div
    className="absolute rounded-full bg-primary/30 blur-sm"
    style={{ left: x, top: y, width: size, height: size }}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      opacity: [0.3, 0.7, 0.3],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

// Animated text word component
const AnimatedWord = ({ word, index }: { word: string; index: number }) => (
  <motion.span
    className="inline-block mx-2"
    initial={{ opacity: 0, y: 50, rotateX: -90 }}
    animate={{ opacity: 1, y: 0, rotateX: 0 }}
    transition={{
      duration: 0.6,
      delay: 0.3 + index * 0.15,
      ease: [0.215, 0.61, 0.355, 1],
    }}
  >
    {word}
  </motion.span>
);

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smooth spring values for parallax
  const springConfig = { stiffness: 100, damping: 30 };
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  // Mouse parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX - innerWidth / 2) / 50);
      mouseY.set((clientY - innerHeight / 2) / 50);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const titleText = "اكتشف العالم معنا";

  // Info items for staggered animation
  const infoItems = [
    { icon: Plane, title: "+1000 رحلة", subtitle: "ناجحة سنوياً" },
    { icon: Shield, title: "حماية كاملة", subtitle: "لراحتك وأمانك" },
    { icon: Award, title: "خبرة 20 عاماً", subtitle: "في مجال السياحة" },
  ];

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Animated Background Gradient Overlay */}
      <motion.div
        className="absolute inset-0 z-[1] pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(249, 145, 34, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(249, 145, 34, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, rgba(249, 145, 34, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(249, 145, 34, 0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
        <FloatingParticle delay={0} duration={4} x="10%" y="20%" size={8} />
        <FloatingParticle delay={0.5} duration={5} x="85%" y="15%" size={12} />
        <FloatingParticle delay={1} duration={4.5} x="70%" y="60%" size={6} />
        <FloatingParticle
          delay={1.5}
          duration={5.5}
          x="20%"
          y="70%"
          size={10}
        />
        <FloatingParticle delay={2} duration={4} x="50%" y="30%" size={8} />
        <FloatingParticle delay={2.5} duration={6} x="30%" y="85%" size={14} />
        <FloatingParticle delay={3} duration={5} x="90%" y="75%" size={10} />
        <FloatingParticle delay={0.8} duration={4.2} x="5%" y="50%" size={6} />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        <motion.div
          className="absolute top-[15%] left-[10%]"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Globe className="w-8 h-8 text-primary/40" />
        </motion.div>
        <motion.div
          className="absolute top-[25%] right-[15%]"
          animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <MapPin className="w-10 h-10 text-primary/30" />
        </motion.div>
        <motion.div
          className="absolute bottom-[30%] left-[8%]"
          animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <Sparkles className="w-6 h-6 text-white/30" />
        </motion.div>
        <motion.div
          className="absolute top-[40%] right-[5%]"
          animate={{ y: [0, -25, 0], scale: [1, 1.1, 1] }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <Plane className="w-12 h-12 text-primary/25 rotate-45" />
        </motion.div>
      </div>

      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0"
        style={{
          scale: imageScale,
          y: imageY,
        }}
      >
        <Image
          src="/house-landscape-pool-relaxation-garden.jpg"
          alt="أبو خليفة العالمية للسفر والسياحة"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
        </motion.div>
      </motion.div>

      {/* Animated scan line effect */}
      <motion.div
        className="absolute inset-0 z-[3] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ delay: 1 }}
      >
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.03)_2px,rgba(255,255,255,0.03)_4px)]" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex items-center justify-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.div
          className="container-custom text-center text-white px-4"
          style={{ x: smoothMouseX, y: smoothMouseY }}
        >
          {/* Animated badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-sm font-medium text-white/90">
              أفضل وكالة سفر لعام 2024
            </span>
          </motion.div>

          {/* Animated Title - Character by character */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6 text-balance overflow-hidden">
            {titleText.split(" ").map((word, index) => (
              <AnimatedWord key={index} word={word} index={index} />
            ))}
          </h1>

          {/* Animated underline */}
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          />

          <Reveal delay={0.2}>
            <motion.p
              className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-4 leading-relaxed font-light text-balance"
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              رحلات استثنائية إلى أجمل الوجهات حول العالم
            </motion.p>
          </Reveal>

          <Reveal delay={0.3}>
            <motion.p
              className="text-lg md:text-xl text-white/85 mb-12 leading-relaxed max-w-2xl mx-auto text-balance"
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              نقدم أفضل خدمات السفر والسياحة مع باقات متنوعة تناسب جميع الأذواق
            </motion.p>
          </Reveal>

          <Reveal delay={0.4}>
            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <motion.a
                href="#destinations"
                className=" relative text-white  font-semibold text-lg overflow-hidden shadow-xl shadow-primary/25"
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <Button className="bg-secondary hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-lg font-bold">
                  ابدأ طلبك الآن
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ←
                  </motion.span>
                </Button>
              </motion.a>
              <motion.a
                href="https://api.whatsapp.com/send?phone=96890938925"
                target="_blank"
                rel="noopener noreferrer"
                title="واتساب: 0096890938925 — إن لم يفتح الرابط انسخ الرقم وأضفه في واتساب"
                className="relative"
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-white hover:bg-gray-100 text-primary px-8 py-6 text-lg rounded-lg font-bold">
                  تواصل عبر واتساب
                </Button>
                {/* Pulse ring effect */}
                <motion.span
                  className="absolute inset-0 rounded-full border-2 border-primary/50 pointer-events-none"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.a>
            </motion.div>
          </Reveal>

          {/* Scroll indicator */}
          <motion.div
            className="absolute -bottom-20 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <motion.div
              className="flex flex-col items-center gap-2 text-white/60"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-xs tracking-widest uppercase">
                اكتشف المزيد
              </span>
              <motion.div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-primary"
                  animate={{ y: [0, 16, 0], opacity: [1, 0.3, 1] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Info Strip with staggered animations */}
      {/* <motion.div
        className="absolute bottom-0 left-0 right-0 z-20 pb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <div className="container-custom">
          <motion.div
            className="rounded-2xl px-6 py-6 backdrop-blur-xl bg-white/10 border border-white/20"
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {infoItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 group cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.8 + index * 0.15 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="p-3 bg-primary/20 rounded-xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(249, 145, 34, 0)",
                        "0 0 0 8px rgba(249, 145, 34, 0.1)",
                        "0 0 0 0 rgba(249, 145, 34, 0)",
                      ],
                    }}
                    transition={{
                      boxShadow: {
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      },
                    }}
                  >
                    <item.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <motion.p
                      className="font-bold text-lg text-white"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2 + index * 0.1 }}
                    >
                      {item.title}
                    </motion.p>
                    <motion.p
                      className="text-sm text-white/70"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.1 + index * 0.1 }}
                    >
                      {item.subtitle}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div> */}
    </section>
  );
}
