"use client";

import { Header } from "@/components/homepage/header";
import { Footer } from "@/components/homepage/footer";
import { Hero } from "@/components/hero";
import { ServicesSection } from "@/components/services-section";
import { Leva } from "leva";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <Hero
        title="خدماتنا"
        description="في أبو خليفة للسفر والسياحة نقدم مجموعة متكاملة من خدمات التأشيرات والسفر، للأفراد والشركات، مع متابعة دقيقة والتزام بالأنظمة الرسمية."
      />
      {/* About Section */}
      <section className="pt-30 pb-0 bg-white" dir="rtl">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              خدماتنا الشاملة
            </h2>
            <div className="flex justify-center mb-8">
              <div className="h-1 w-24 bg-gradient-to-r from-[#458A47] to-[#F5951C] rounded-full"></div>
            </div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
              نقدم في أبو خليفة للسفر والسياحة مجموعة متكاملة من الخدمات
              المتخصصة لتلبية جميع احتياجاتك السفرية. من استخراج التأشيرات بجميع
              أنواعها إلى تنظيم الرحلات السياحية الكاملة، نضمن لك تجربة سلسة
              ومريحة مع متابعة دقيقة من البداية حتى النهاية. نحن هنا لنجعل رحلتك
              القادمة تجربة لا تُنسى.
            </p>
          </div>
        </div>
      </section>
      <ServicesSection />
      <Footer />
      <Leva hidden />
    </>
  );
}
