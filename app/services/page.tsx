"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { ServicesSection } from "@/components/services-section";
import { Leva } from "leva";

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <Hero
        title="خدماتنا"
        description="في أبو خليفة للسفر والسياحة نقدم مجموعة متكاملة من خدمات التأشيرات والسفر، للأفراد والشركات، مع متابعة دقيقة والتزام بالأنظمة الرسمية."
      />
      <ServicesSection />
      <Footer />
      <Leva hidden />
    </>
  );
}
