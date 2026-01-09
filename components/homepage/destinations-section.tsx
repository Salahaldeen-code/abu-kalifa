"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { MapPin } from "lucide-react"
import { Reveal } from "./reveal"

export function DestinationsSection() {
  const destinations = [
    {
      name: "دبي",
      country: "الإمارات العربية المتحدة",
      image: "/dubai-skyline-burj-khalifa-at-sunset.jpg",
      packages: "15 باقة",
    },
    {
      name: "باريس",
      country: "فرنسا",
      image: "/paris-eiffel-tower-at-blue-hour.jpg",
      packages: "12 باقة",
    },
    {
      name: "المالديف",
      country: "جزر المالديف",
      image: "/maldives-overwater-bungalows-crystal-clear-water.jpg",
      packages: "10 باقات",
    },
    {
      name: "اسطنبول",
      country: "تركيا",
      image: "/istanbul-blue-mosque-and-bosphorus-at-sunset.jpg",
      packages: "18 باقة",
    },
    {
      name: "لندن",
      country: "المملكة المتحدة",
      image: "/london-big-ben-and-thames-river.jpg",
      packages: "14 باقة",
    },
    {
      name: "بالي",
      country: "إندونيسيا",
      image: "/bali-rice-terraces-and-temples-at-sunrise.jpg",
      packages: "16 باقة",
    },
  ]

  return (
    <section id="destinations" className="py-20 lg:py-32 bg-background">
      <div className="container-custom">
        <Reveal>
          <div className="text-center mb-16">
            <motion.span
              className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              وجهات مميزة
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              استكشف أجمل الوجهات السياحية
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
              من المدن الحديثة إلى الجزر الاستوائية، نأخذك في رحلة لا تُنسى
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {destinations.map((destination, index) => (
            <Reveal key={destination.name} delay={index * 0.1}>
              <motion.div
                className="group relative rounded-3xl overflow-hidden cursor-pointer h-[400px]"
                whileHover={{ y: -8 }}
              >
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <motion.div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 text-white/90 mb-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{destination.country}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">{destination.name}</h3>
                    <p className="text-white/80 text-sm mb-4">{destination.packages}</p>

                    <motion.button
                      className="glass-panel text-[#f99122] px-6 py-3 rounded-full font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      اكتشف الباقات
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
