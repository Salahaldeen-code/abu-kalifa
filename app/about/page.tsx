"use client";

import { Header } from "@/components/homepage/header";
import { Footer } from "@/components/homepage/footer";
import { Hero } from "@/components/hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Meteors } from "@/components/ui/meteors";
import {
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  Target,
  Award,
  Users,
  Heart,
} from "lucide-react";
import { Leva } from "leva";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Header />
      <Hero
        title="من نحن"
        description="شركة متخصصة في خدمات التأشيرات والسفر بخبرة طويلة وسجل حافل من النجاح"
      />
      <Leva hidden />

      {/* About Content */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              عن أبو خليفة العالمية للسفر والسياحة
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#458A47] to-[#F5951C] mx-auto mb-6"></div>
          </div>

          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              أبو خليفة العالمية للسفر والسياحة هي وكالة متخصصة في خدمات التأشيرات
              والسفر، تأسست لتقديم حلول موثوقة وسريعة للمسافرين، رجال الأعمال،
              والشركات. نعمل بشغف وحرفية عالية لجعل تجربة السفر والحصول على
              التأشيرات تجربة سهلة وخالية من المتاعب.
            </p>
          </div>

          {/* Values Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* Specialization Card */}
            <div className="relative w-full max-w-xl mx-auto">
              <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-gradient-to-r from-white to-[#458A47] blur-3xl opacity-40" />
              <div className="relative flex h-full flex-col items-center justify-end overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-white via-white to-[#458A47]/20 px-4 py-8 shadow-xl min-h-[280px] text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-400 bg-white shadow-lg">
                  <Target className="h-10 w-10 text-[#458A47]" />
                </div>
                <h3 className="relative z-50 mb-4 text-xl font-bold text-gray-900">
                  تخصصنا
                </h3>
                <p className="relative z-50 mb-4 text-base font-normal text-gray-600 leading-relaxed">
                  حجوزات الطيران، إصدار التأشيرات السياحية والعلاجية والتجارية، إستخراج الدعوات الحكومية والقبولات الجامعية وتصديق المستندات
                </p>
                <Meteors number={20} />
              </div>
            </div>

            {/* Values Card */}
            <div className="relative w-full max-w-xl mx-auto">
              <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-gradient-to-r from-white to-[#458A47] blur-3xl opacity-40" />
              <div className="relative flex h-full flex-col items-center justify-end overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-white via-white to-[#458A47]/20 px-4 py-8 shadow-xl min-h-[280px] text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-400 bg-white shadow-lg">
                  <Heart className="h-10 w-10 text-[#F5951C]" />
                </div>
                <h3 className="relative z-50 mb-4 text-xl font-bold text-gray-900">
                  قيمنا
                </h3>
                <p className="relative z-50 mb-4 text-base font-normal text-gray-600 leading-relaxed">
                  نلتزم بالدقة، المصداقية، وسرعة الإنجاز. نقدم استشارات واضحة
                  ومتابعة دقيقة لجميع الطلبات
                </p>
                <Meteors number={20} />
              </div>
            </div>

            {/* Vision Card */}
            <div className="relative w-full max-w-xl mx-auto">
              <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-gradient-to-r from-white to-[#458A47] blur-3xl opacity-40" />
              <div className="relative flex h-full flex-col items-center justify-end overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-white via-white to-[#458A47]/20 px-4 py-8 shadow-xl min-h-[280px] text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-400 bg-white shadow-lg">
                  <Award className="h-10 w-10 text-[#458A47]" />
                </div>
                <h3 className="relative z-50 mb-4 text-xl font-bold text-gray-900">
                  رؤيتنا
                </h3>
                <p className="relative z-50 mb-4 text-base font-normal text-gray-600 leading-relaxed">
                  أن نكون الوكالة الأولى والموثوقة في المنطقة لخدمات التأشيرات
                  والسفر
                </p>
                <Meteors number={20} />
              </div>
            </div>
          </div>

          {/* Specializations */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
              تخصصنا
            </h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {[
                "إصدار التأشيرات السياحية والتجارية",
                "استخراج الدعوات الحكومية",
                "تصديق الوثائق والمستندات",
                "متابعة الطلبات بدقة وشفافية",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 items-start p-4 rounded-lg bg-white border border-gray-200 hover:border-[#458A47] transition-colors"
                >
                  <CheckCircle className="w-6 h-6 text-[#458A47] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Commitment Section */}
          <div className="bg-gradient-to-br from-[#458A47]/10 via-white to-[#F5951C]/10 rounded-3xl p-8 md:p-12 mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <Users className="w-16 h-16 text-[#458A47] mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                قيمنا والتزامنا
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                نلتزم بالدقة، المصداقية، وسرعة الإنجاز. نقدم استشارات واضحة
                للعميل قبل بدء أي إجراء، ونتابع جميع الطلبات بشكل دوري حتى
                الوصول إلى النتيجة المطلوبة. فريقنا يسعى دائماً لتقديم خدمة
                متميزة تتجاوز توقعات عملائنا.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[80%] mx-auto px-[30px]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative h-[700px]">
              <div className="relative h-full rounded-2xl overflow-hidden shadow-xl bg-white">
                <img
                  src="/about us image .jpeg"
                  alt="أبو خليفة العالمية للسفر والسياحة"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-[#F5951C] mb-8">
                قصتنا
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    رعاية متخصصة
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    أبو خليفة العالمية للسفر والسياحة هي وكالة رائدة متخصصة في تقديم
                    خدمات التأشيرات والسفر. فريقنا المختص يستخدم أحدث التقنيات
                    والأنظمة لإصدار التأشيرات السياحية والتجارية، استخراج
                    الدعوات الحكومية، وتصديق الوثائق بكل دقة وفعالية.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    نهج مخصص
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    في أبو خليفة العالمية، نؤمن بضرورة تقديم نهج مخصص لكل عميل. نعمل على
                    إنشاء برامج مخصصة مصممة خصيصاً لاحتياجات كل فرد أو شركة، مما
                    يضمن أعلى مستوى من الرعاية ونتائج مثالية في الحصول على
                    التأشيرات وإتمام إجراءات السفر.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    تقنيات مبتكرة
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    وكالتنا في طليعة الابتكار، حيث نعمل باستمرار على دمج
                    التقنيات والأنظمة الجديدة والمتقدمة لتعزيز خدماتنا. نحن
                    ملتزمون بالبقاء على اطلاع بأحدث التطورات في مجال التأشيرات
                    والسفر لتقديم أفضل خدمة ممكنة لعملائنا.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-900">
              مكاتبنا
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#F5951C] to-[#458A47] mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Oman Location */}
            <div className="relative w-full max-w-xl mx-auto">
              <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-gradient-to-r from-white to-[#458A47] blur-3xl opacity-40" />
              <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-white via-white to-[#458A47]/20 px-4 py-8 shadow-xl min-h-[280px]">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-400 bg-white shadow-lg">
                  <MapPin className="h-10 w-10 text-[#458A47]" />
                </div>
                <h3 className="relative z-50 mb-4 text-xl font-bold text-gray-900">
                  سلطنة عمان
                </h3>
                <div className="relative z-50 mb-4 space-y-2">
                  <h4 className="text-lg font-semibold text-gray-800">مسقط</h4>
                  <p className="text-base font-normal text-gray-600">الخوير</p>
                </div>
                <Meteors number={20} />
              </div>
            </div>

            {/* Yemen - Sana'a Location */}
            <div className="relative w-full max-w-xl mx-auto">
              <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-gradient-to-r from-white to-[#458A47] blur-3xl opacity-40" />
              <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-white via-white to-[#458A47]/20 px-4 py-8 shadow-xl min-h-[280px]">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-400 bg-white shadow-lg">
                  <MapPin className="h-10 w-10 text-[#458A47]" />
                </div>
                <h3 className="relative z-50 mb-4 text-xl font-bold text-gray-900">
                  اليمن
                </h3>
                <div className="relative z-50 mb-4 space-y-2">
                  <h4 className="text-lg font-semibold text-gray-800">صنعاء</h4>
                  <p className="text-base font-normal text-gray-600">
                    شارع الرقاص - تقاطع هائل
                  </p>
                </div>
                <Meteors number={20} />
              </div>
            </div>

            {/* Yemen - Al Mahrah Location */}
            <div className="relative w-full max-w-xl mx-auto">
              <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-gradient-to-r from-white to-[#458A47] blur-3xl opacity-40" />
              <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-white via-white to-[#458A47]/20 px-4 py-8 shadow-xl min-h-[280px]">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-400 bg-white shadow-lg">
                  <MapPin className="h-10 w-10 text-[#458A47]" />
                </div>
                <h3 className="relative z-50 mb-4 text-xl font-bold text-gray-900">
                  اليمن
                </h3>
                <div className="relative z-50 mb-4 space-y-2">
                  <h4 className="text-lg font-semibold text-gray-800">
                    المهرة
                  </h4>
                  <p className="text-base font-normal text-gray-600">
                    الغيضة - شارع المطار
                  </p>
                </div>
                <Meteors number={20} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed WhatsApp Button */}
      <a
        href="https://wa.me/96890938925"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-[#F5951C] text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-colors z-40"
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
