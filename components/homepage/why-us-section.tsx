"use client"

import { motion } from "framer-motion"
import { Award, Clock, Heart, Users } from "lucide-react"
import { Reveal } from "./reveal"

export function WhyUsSection() {
  const features = [
    {
      icon: Award,
      title: "جودة عالية",
      description: "نلتزم بتقديم أعلى مستويات الخدمة والجودة في كل رحلة",
    },
    {
      icon: Clock,
      title: "خدمة 24/7",
      description: "فريقنا متاح على مدار الساعة لمساعدتك في أي وقت",
    },
    {
      icon: Heart,
      title: "عناية شخصية",
      description: "نهتم بأدق التفاصيل لنضمن راحتك وسعادتك",
    },
    {
      icon: Users,
      title: "فريق محترف",
      description: "خبراء سفر متمرسون يخططون لرحلتك المثالية",
    },
  ]

  return (
    <section
      id="about"
      className="py-20 lg:py-32 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <Reveal>
            <div>
              <motion.span
                className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                لماذا نحن؟
              </motion.span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                شريكك الموثوق في عالم السفر
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-balance">
                مع خبرة تمتد لأكثر من 20 عاماً، نفخر بتقديم أفضل تجارب السفر لآلاف العملاء حول العالم. نؤمن بأن كل رحلة
                يجب أن تكون تجربة استثنائية لا تُنسى.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="#contact"
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-center hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ابدأ رحلتك الآن
                </motion.a>
                <motion.a
                  href="#services"
                  className="px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold text-center hover:bg-primary hover:text-primary-foreground transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  تعرف على خدماتنا
                </motion.a>
              </div>
            </div>
          </Reveal>

          {/* Right Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 0.1}>
                <motion.div
                  className="bg-card rounded-2xl p-6 border border-border hover:shadow-xl transition-all duration-500"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
