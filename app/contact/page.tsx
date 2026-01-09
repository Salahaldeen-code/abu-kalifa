"use client";

import type React from "react";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { Leva } from "leva";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend service
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero
        title="تواصل معنا"
        description="نحن هنا للإجابة على أسئلتك وتقديم الدعم الذي تحتاجه. لا تتردد في التواصل معنا"
      />
      <Leva hidden />

      {/* Contact Info Cards */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {/* Phone Card */}
            <Card className="p-8 text-center hover:shadow-lg transition-shadow flex flex-col">
              <Phone className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary mb-4">
                الهاتف والواتساب
              </h3>
              <div className="space-y-2 text-gray-600 flex-1">
                <p>+967 770 115 540</p>
                <p>+967 781 115 200</p>
                <p>+968 9093 8925</p>
              </div>
              <a
                href="https://wa.me/967770115540"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-6 px-4 py-2 bg-[#458A47] text-white rounded-lg hover:bg-[#458A47]/90 transition-colors font-bold text-sm"
              >
                تواصل عبر واتساب
              </a>
            </Card>

            {/* Email Card */}
            <Card className="p-8 text-center hover:shadow-lg transition-shadow flex flex-col">
              <Mail className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary mb-4">
                البريد الإلكتروني
              </h3>
              <p className="text-gray-600 mb-6 flex-1">info@abokhalifa.com</p>
              <a
                href="mailto:info@abokhalifa.com"
                className="block px-4 py-2 bg-[#458A47] text-white rounded-lg hover:bg-[#458A47]/90 transition-colors font-bold text-sm"
              >
                أرسل بريد إلكتروني
              </a>
            </Card>

            {/* Address Card */}
            <Card className="p-8 text-center hover:shadow-lg transition-shadow flex flex-col">
              <MapPin className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary mb-4">الموقع</h3>
              <div className="text-gray-600 text-sm space-y-2 flex-1">
                <p>اليمن - صنعاء</p>
                <p>سلطنة عمان - مسقط</p>
                <p>الغيضة - المهرة</p>
              </div>
              <a
                href="/about"
                className="block mt-6 px-4 py-2 bg-[#458A47] text-white rounded-lg hover:bg-[#458A47]/90 transition-colors font-bold text-sm"
              >
                اطلع على الفروع
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-primary">
            نموذج التواصل
          </h2>
          <p className="text-center text-gray-600 mb-12">
            ملء النموذج أدناه وسنتواصل معك في أسرع وقت ممكن
          </p>

          {isSubmitted && (
            <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg text-center">
              <p className="text-green-700 font-bold">
                شكراً لتواصلك معنا! سنرد عليك قريباً
              </p>
            </div>
          )}

          <Card className="p-8 sm:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                {/* First Name */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    الاسم الأول
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="أدخل اسمك الأول"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    الاسم الأخير
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="أدخل اسمك الأخير"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="example@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+967 770 115 540"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-bold text-gray-700 mb-2"
                >
                  موضوع الرسالة
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                >
                  <option value="">اختر الموضوع</option>
                  <option value="tourist-visa">تأشيرة سياحية</option>
                  <option value="business-visa">تأشيرة تجارية</option>
                  <option value="umrah-visa">تأشيرة عمرة</option>
                  <option value="invitation">دعوة رسمية</option>
                  <option value="document-certification">تصديق وثائق</option>
                  <option value="consultation">استشارة</option>
                  <option value="other">أخرى</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-gray-700 mb-2"
                >
                  الرسالة
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="اكتب رسالتك هنا..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex gap-4">
                <Button
                  type="submit"
                  className="flex-1 bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-bold text-lg transition-colors"
                >
                  إرسال الرسالة
                </Button>
                <a
                  href="https://wa.me/967770115540"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center bg-secondary hover:bg-orange-600 text-white py-3 rounded-lg font-bold text-lg transition-colors"
                >
                  واتساب
                </a>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-primary">
            أسئلة شائعة
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "كم تستغرق معالجة طلب التأشيرة؟",
                a: "تختلف المدة حسب نوع التأشيرة والدول المطلوبة. عادة تتراوح بين 5-15 أيام عمل.",
              },
              {
                q: "هل تقدمون خدمات استشارة مجانية؟",
                a: "نعم، نقدم استشارات مجانية لجميع عملائنا قبل بدء أي إجراء.",
              },
              {
                q: "كيف يمكنني تتبع طلبي؟",
                a: "نوفر متابعة دورية لجميع الطلبات من خلال الهاتف أو واتساب.",
              },
              {
                q: "ما هي طرق الدفع المتاحة؟",
                a: "نقبل التحويل البنكي والدفع النقدي والتحويل عبر الخدمات الإلكترونية.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="border-b border-border pb-6 last:border-b-0"
              >
                <h3 className="text-lg font-bold text-primary mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fixed WhatsApp Button */}
      <a
        href="https://wa.me/967770115540"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-secondary text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-colors z-40"
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
