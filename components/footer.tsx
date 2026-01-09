"use client"

import { motion } from "framer-motion"
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    "روابط سريعة": [
      { name: "الرئيسية", href: "/" },
      { name: "خدماتنا", href: "/services" },
      { name: "من نحن", href: "/about" },
      { name: "تواصل معنا", href: "/contact" },
    ],
    "خدماتنا": [
      { name: "التأشيرات السياحية", href: "/services" },
      { name: "التأشيرات التجارية", href: "/services" },
      { name: "تأشيرات العمرة", href: "/services" },
      { name: "تصديق الوثائق", href: "/services" },
      { name: "الدعوات الرسمية", href: "/services" },
    ],
  }

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
  ]

  return (
    <footer className="bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900 border-t border-gray-200" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-4">أبو خليفة</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                شركة متخصصة في خدمات التأشيرات والسفر، نقدم حلول موثوقة وسريعة للمسافرين، رجال الأعمال، والشركات.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="w-5 h-5 text-[#F5951C]" />
                  <span dir="ltr">+967 770 115 540</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="w-5 h-5 text-[#F5951C]" />
                  <span dir="ltr">+968 9093 8925</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="w-5 h-5 text-[#F5951C]" />
                  <span dir="ltr">info@abokhalifa.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="w-5 h-5 text-[#F5951C]" />
                  <span>اليمن - صنعاء | سلطنة عمان - مسقط</span>
                </div>
              </div>

              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 hover:bg-[#458A47] hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
              {Object.entries(footerLinks).map(([category, links], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-bold text-gray-900 text-xl mb-4">{category}</h4>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-gray-600 hover:text-[#F5951C] transition-colors duration-200 hover:translate-x-[-4px] inline-block"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="pt-8 border-t border-gray-200 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600">&copy; {currentYear} أبو خليفة للسفر والسياحة. جميع الحقوق محفوظة.</p>
        </motion.div>
      </div>
    </footer>
  )
}

