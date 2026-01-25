"use client";

import { motion } from "framer-motion";
import {
  Plane,
  Briefcase,
  FileCheck,
  Building2,
  Globe,
  Heart,
} from "lucide-react";
import { Reveal } from "./reveal";
import Link from "next/link";

export function ServicesSection() {
  const services = [
    {
      icon: Plane,
      title: "التأشيرات",
      description:
        "نقدم مجموعة شاملة ومتكاملة من خدمات التأشيرات لجميع احتياجات السفر، مع متابعة دقيقة من البداية حتى صدور النتيجة",
      color: "from-[#458A47] to-[#458A47]/80",
      href: "/services#visas",
    },
    {
      icon: Heart,
      title: "سياحة علاجية",
      description:
        "نوفر برامج سياحة علاجية متكاملة في أفضل المراكز الطبية والمستشفيات العالمية مع تنظيم كامل للرحلة العلاجية",
      color: "from-[#F5951C] to-[#F5951C]/80",
      href: "/services#tourism-services",
    },
    {
      icon: FileCheck,
      title: "تصديق مستندات والوثائق",
      description:
        "نقدم خدمة تصديق شاملة لجميع أنواع الوثائق والمستندات في السفارات ووزارة الخارجية",
      color: "from-[#458A47] to-[#F5951C]",
      href: "/services#document-certification",
    },
    {
      icon: Building2,
      title: "خدمات رجال الأعمال",
      description:
        "نقدم حلولاً متكاملة وشاملة لتسهيل سفر الشركات ورجال الأعمال من خدمات المعارض الدولية إلى متابعة ملفات الشركات",
      color: "from-[#F5951C] to-[#458A47]",
      href: "/services#business-services",
    },
    {
      icon: Briefcase,
      title: "الدعوات الرسمية والتجارية",
      description:
        "نوفر دعوات رسمية معتمدة من الجهات المختصة لتسهيل استخراج التأشيرات التجارية والحكومية",
      color: "from-[#458A47] to-[#458A47]/80",
      href: "/services#invitations",
    },
    {
      icon: Globe,
      title: "خدمات السفر والسياحة الشاملة",
      description:
        "نقدم خدمات السفر والسياحة الشاملة والمتكاملة لتنظيم رحلاتك بكل تفاصيلها من التخطيط إلى التنفيذ",
      color: "from-[#458A47] to-[#F5951C]",
      href: "/services#tourism-services",
    },
  ];

  return (
    <section
      id="services"
      className="max-w-7xl mx-auto py-20 lg:py-32 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="container-custom">
        <Reveal>
          <div className="text-center mb-16">
            <motion.span
              className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              خدماتنا المتميزة
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              نقدم لك كل ما تحتاجه لرحلة مثالية
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
              من حجز التذاكر إلى تنظيم الجولات السياحية، نوفر لك تجربة سفر
              متكاملة وسلسة
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.1}>
              <motion.div
                className="group relative bg-card rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-border overflow-hidden"
                whileHover={{ y: -8 }}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-card-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  <Link href={service.href} prefetch={false}>
                    <motion.div
                      className="mt-6 text-primary font-semibold flex items-center gap-2 group-hover:gap-4 transition-all cursor-pointer"
                      whileHover={{ x: 5 }}
                    >
                      <span>اعرف المزيد</span>
                      <span>←</span>
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* CTA Buttons */}
        <Reveal delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-16">
            <motion.a
              href="https://api.whatsapp.com/send?phone=96890938925"
              target="_blank"
              rel="noopener noreferrer"
              title="واتساب: 0096890938925 — إن لم يفتح الرابط انسخ الرقم وأضفه في واتساب"
              className="px-8 py-4 bg-[#458A47] text-white rounded-lg font-semibold text-center hover:bg-[#458A47]/90 transition-all shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ابدأ رحلتك الآن
            </motion.a>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/services"
                prefetch={false}
                className="px-8 py-4 border-2 border-[#458A47] text-[#458A47] rounded-lg font-semibold text-center hover:bg-[#458A47] hover:text-white transition-all inline-block"
              >
                تعرف على خدماتنا
              </Link>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
