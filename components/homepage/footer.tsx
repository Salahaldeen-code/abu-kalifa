"use client";

import { motion } from "framer-motion";
import {
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "روابط سريعة": [
      { name: "الرئيسية", href: "/" },
      { name: "خدماتنا", href: "/services" },
      { name: "الوجهات", href: "/#destinations" },
      { name: "عن الشركة", href: "/about" },
      { name: "اتصل بنا", href: "/contact" },
    ],
    خدماتنا: [
      { name: "تأشيرات", href: "/services" },
      { name: "سياحة علاجية", href: "/services" },
      { name: "تصديق المستندات", href: "/services" },
      { name: "خدمات رجال الاعمال", href: "/services" },
      { name: "حجز تذاكر الطيران", href: "/services" },
    ],
  };

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "https://x.com/abbasadnan323" },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://share.google/nmlPB59FCz6WmGkj5",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/abu_khalifa.om?igsh=d3U1cTh5dmRzbDRj",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-muted/50 border-t border-border">
      <div className="container-custom py-16 lg:py-20">
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
              <Link href="/" prefetch={false} className="inline-block mb-4">
                <Image
                  src="/Abu-_logo-1.png"
                  alt="أبو خليفة"
                  width={150}
                  height={75}
                  className="h-16 w-auto object-contain mb-2"
                />
              </Link>
              <h3 className="text-3xl font-bold text-primary mb-4">
                أبو خليفة العالمية للسفر والسياحة
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                شركة رائدة في مجال السفر والسياحة، نقدم أفضل الخدمات لجعل
                رحلاتكم تجربة لا تُنسى منذ أكثر من 20 عاماً.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  <span dir="ltr">0096890938925</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  <span dir="ltr">+967770115540</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <span dir="ltr">ABUKHALIFATRAVEL@GMAIL.COM</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>مسقط الخوير الجنوبية</span>
                </div>
              </div>

              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
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
                  <h4 className="font-bold text-foreground text-xl mb-4">
                    {category}
                  </h4>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block"
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
          className="pt-8 border-t border-border text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground">
            &copy; {currentYear} أبو خليفة العالمية للسفر والسياحة. جميع الحقوق
            محفوظة.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
