"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Reveal } from "./reveal"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "أحمد الشمري",
      location: "الرياض، السعودية",
      rating: 5,
      text: "تجربة رائعة من البداية للنهاية. الفريق محترف جداً والخدمة ممتازة. سأوصي بهم لكل من يريد السفر.",
    },
    {
      name: "فاطمة العلي",
      location: "الكويت، الكويت",
      rating: 5,
      text: "أفضل شركة سفر تعاملت معها. كل شيء منظم بشكل مثالي والأسعار منافسة جداً.",
    },
    {
      name: "محمد الحسن",
      location: "دبي، الإمارات",
      rating: 5,
      text: "خدمة استثنائية واهتمام بالتفاصيل. جعلوا رحلة شهر العسل لا تُنسى. شكراً جزيلاً!",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-primary/5">
      <div className="container-custom">
        <Reveal>
          <div className="text-center mb-16">
            <motion.span
              className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              آراء العملاء
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              ماذا يقول عملاؤنا
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
              ثقة آلاف العملاء هي أكبر دليل على جودة خدماتنا
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.1}>
              <motion.div
                className="bg-card rounded-3xl p-8 border border-border hover:shadow-2xl transition-all duration-500"
                whileHover={{ y: -8 }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">&ldquo;{testimonial.text}&rdquo;</p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-card-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
