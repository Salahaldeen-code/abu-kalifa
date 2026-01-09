"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Phone } from "lucide-react";
import { Hero } from "@/components/hero";
import { ServicesSection } from "@/components/services-section";
import { Leva } from "leva";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-white py-20 sm:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
              أبو خليفة للسفر والسياحة
            </h1>
            <h2 className="text-xl sm:text-2xl font-light mb-6 opacity-90">
              حلول متكاملة للتأشيرات، الدعوات، وتصديق المستندات
            </h2>
            <p className="max-w-2xl mx-auto text-lg opacity-95 mb-8 leading-relaxed">
              نقدم في أبو خليفة للسفر والسياحة خدمات تأشيرات موثوقة وسريعة
              لمجموعة واسعة من الدول، مع خبرة طويلة في التعامل مع السفارات
              والجهات الرسمية، وخدمة احترافية تلبي احتياجات الأفراد والشركات.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-secondary hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-lg font-bold">
                  ابدأ طلبك الآن
                </Button>
              </Link>
              <a
                href="https://wa.me/967770115540"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-white hover:bg-gray-100 text-primary px-8 py-6 text-lg rounded-lg font-bold">
                  تواصل عبر واتساب
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-primary">
            ملخص خدماتنا
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            نوفر مجموعة شاملة من خدمات التأشيرات والوثائق لتلبية احتياجاتك
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "التأشيرات السياحية", icon: "✈️" },
              { title: "التأشيرات التجارية", icon: "💼" },
              { title: "تأشيرات العمرة", icon: "🕌" },
              { title: "الدعوات الرسمية", icon: "📜" },
              { title: "تصديق الوثائق", icon: "✓" },
              { title: "الاستشارات المجانية", icon: "💬" },
            ].map((service, idx) => (
              <Card
                key={idx}
                className="p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">خدمة موثوقة وسريعة متخصصة</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-bold text-lg">
                اطلع على جميع الخدمات
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-primary">
            لماذا تختار أبو خليفة؟
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                title: "خبرة طويلة",
                description: "سنوات من التعامل مع السفارات والجهات الرسمية",
              },
              {
                title: "سرعة الإنجاز",
                description: "معالجة سريعة وفعالة للطلبات",
              },
              {
                title: "الدقة والمصداقية",
                description: "نلتزم بأعلى معايير الجودة",
              },
              {
                title: "خدمة احترافية",
                description: "فريق متخصص يرد على جميع استفساراتك",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-primary">
            خطوات العمل المختصرة
          </h2>

          <div className="grid sm:grid-cols-4 gap-4">
            {[
              {
                step: "1",
                title: "التواصل",
                description: "تواصل معنا عبر الهاتف أو واتساب",
              },
              {
                step: "2",
                title: "الاستشارة",
                description: "استشارة مجانية وتوضيح الإجراءات",
              },
              {
                step: "3",
                title: "المتابعة",
                description: "متابعة دورية حتى صدور التأشيرة",
              },
              {
                step: "4",
                title: "الاستلام",
                description: "استلام التأشيرة أو الوثيقة",
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            هل أنت مستعد لبدء رحلتك؟
          </h2>
          <p className="text-lg opacity-90 mb-8">
            تواصل معنا الآن وسنساعدك في جميع احتياجاتك من التأشيرات والوثائق
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-secondary hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold text-lg">
                ابدأ الآن
              </Button>
            </Link>
            <a
              href="https://wa.me/967770115540"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-white hover:bg-gray-100 text-primary px-8 py-3 rounded-lg font-bold text-lg">
                واتساب +967 770 115 540
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}

      {/* Fixed WhatsApp Button */}
      <a
        href="https://wa.me/967770115540"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-secondary text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-colors z-40 flex items-center justify-center"
        aria-label="تواصل عبر واتساب"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.267 9.858 9.858 0 001.236 19.545c2.364 0 4.56-.895 6.201-2.37v-.001a9.851 9.851 0 001.456-15.384c-1.664-1.99-4.166-3.057-6.943-3.057z" />
        </svg>
      </a>
      <Footer />
    </div>
  );
}
