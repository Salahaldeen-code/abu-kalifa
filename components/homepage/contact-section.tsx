"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Reveal } from "./reveal"
import { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

export function ContactSection() {
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
    // <section id="contact" className="py-20 lg:py-32 bg-gradient-to-b from-primary/5 to-background">
    //   <div className="container-custom">
    //     <Reveal>
    //       <div className="text-center mb-16">
    //         <motion.span
    //           className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
    //           initial={{ opacity: 0 }}
    //           whileInView={{ opacity: 1 }}
    //           viewport={{ once: true }}
    //         >
    //           تواصل معنا
    //         </motion.span>
    //         <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
    //           ابدأ رحلتك القادمة اليوم
    //         </h2>
    //         <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
    //           فريقنا جاهز لمساعدتك في التخطيط لرحلة أحلامك
    //         </p>
    //       </div>
    //     </Reveal>

    //     <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
    //       {/* Contact Info */}
    //       <Reveal>
    //         <div className="space-y-8">
    //           <motion.div
    //             className="flex items-start gap-4 bg-card rounded-2xl p-6 border border-border"
    //             whileHover={{ x: 5 }}
    //           >
    //             <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
    //               <Phone className="w-6 h-6 text-primary" />
    //             </div>
    //             <div>
    //               <h3 className="font-bold text-card-foreground mb-2">الهاتف</h3>
    //               <p className="text-muted-foreground" dir="ltr">
    //                 +966 12 345 6789
    //               </p>
    //               <p className="text-muted-foreground" dir="ltr">
    //                 +966 50 123 4567
    //               </p>
    //             </div>
    //           </motion.div>

    //           <motion.div
    //             className="flex items-start gap-4 bg-card rounded-2xl p-6 border border-border"
    //             whileHover={{ x: 5 }}
    //           >
    //             <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
    //               <Mail className="w-6 h-6 text-primary" />
    //             </div>
    //             <div>
    //               <h3 className="font-bold text-card-foreground mb-2">البريد الإلكتروني</h3>
    //               <p className="text-muted-foreground" dir="ltr">
    //                 info@abukhalifahtravel.com
    //               </p>
    //               <p className="text-muted-foreground" dir="ltr">
    //                 bookings@abukhalifahtravel.com
    //               </p>
    //             </div>
    //           </motion.div>

    //           <motion.div
    //             className="flex items-start gap-4 bg-card rounded-2xl p-6 border border-border"
    //             whileHover={{ x: 5 }}
    //           >
    //             <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
    //               <MapPin className="w-6 h-6 text-primary" />
    //             </div>
    //             <div>
    //               <h3 className="font-bold text-card-foreground mb-2">العنوان</h3>
    //               <p className="text-muted-foreground">شارع الملك فهد، الرياض</p>
    //               <p className="text-muted-foreground">المملكة العربية السعودية</p>
    //             </div>
    //           </motion.div>
    //         </div>
    //       </Reveal>

    //       {/* Contact Form */}
    //       <Reveal delay={0.2}>
    //         <motion.form className="bg-card rounded-3xl p-8 border border-border shadow-xl space-y-6">
    //           <div>
    //             <label htmlFor="name" className="block text-sm font-semibold text-card-foreground mb-2">
    //               الاسم الكامل
    //             </label>
    //             <input
    //               type="text"
    //               id="name"
    //               className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
    //               placeholder="أدخل اسمك"
    //             />
    //           </div>

    //           <div>
    //             <label htmlFor="email" className="block text-sm font-semibold text-card-foreground mb-2">
    //               البريد الإلكتروني
    //             </label>
    //             <input
    //               type="email"
    //               id="email"
    //               className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
    //               placeholder="your@email.com"
    //               dir="ltr"
    //             />
    //           </div>

    //           <div>
    //             <label htmlFor="phone" className="block text-sm font-semibold text-card-foreground mb-2">
    //               رقم الهاتف
    //             </label>
    //             <input
    //               type="tel"
    //               id="phone"
    //               className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
    //               placeholder="+966 50 123 4567"
    //               dir="ltr"
    //             />
    //           </div>

    //           <div>
    //             <label htmlFor="message" className="block text-sm font-semibold text-card-foreground mb-2">
    //               رسالتك
    //             </label>
    //             <textarea
    //               id="message"
    //               rows={5}
    //               className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
    //               placeholder="أخبرنا عن رحلتك المثالية..."
    //             />
    //           </div>

    //           <motion.button
    //             type="submit"
    //             className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
    //             whileHover={{ scale: 1.02 }}
    //             whileTap={{ scale: 0.98 }}
    //           >
    //             <span>إرسال الرسالة</span>
    //             <Send className="w-5 h-5" />
    //           </motion.button>
    //         </motion.form>
    //       </Reveal>
    //     </div>
    //   </div>
    // </section>
  );
}
