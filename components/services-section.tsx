"use client";
import { Timeline } from "@/components/ui/timeline";
import {
  Plane,
  Briefcase,
  Building2,
  FileCheck,
  Users,
  MessageCircle,
  Globe,
  FileText,
  CheckCircle2,
} from "lucide-react";

export function ServicesSection() {
  const timelineData = [
    {
      title: "خدمات التأشيرات",
      content: (
        <div>
          <p className="mb-8 text-base md:text-lg font-normal text-gray-800 dark:text-gray-200 leading-relaxed">
            نقدم مجموعة شاملة ومتكاملة من خدمات التأشيرات لجميع احتياجات السفر،
            مع متابعة دقيقة من البداية حتى صدور النتيجة. نضمن لك الحصول على
            التأشيرة المناسبة بسهولة وسرعة.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/visa.jpg"
              alt="التأشيرات السياحية"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/visa 2.jpg"
              alt="التأشيرات التجارية"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/makah.jpg"
              alt="تأشيرات العمرة"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/makah 2.jpg"
              alt="تأشيرات الزيارة"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/50 hover:bg-white/80 transition-colors border border-gray-100 shadow-md hover:shadow-lg">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#458A47] to-[#458A47]/80 flex items-center justify-center flex-shrink-0">
                <Plane className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm md:text-base text-gray-800 font-medium">
                التأشيرات السياحية
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/50 hover:bg-white/80 transition-colors border border-gray-100 shadow-md hover:shadow-lg">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F5951C] to-[#F5951C]/80 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm md:text-base text-gray-800 font-medium">
                التأشيرات التجارية
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/50 hover:bg-white/80 transition-colors border border-gray-100 shadow-md hover:shadow-lg">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#458A47] to-[#F5951C] flex items-center justify-center flex-shrink-0">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm md:text-base text-gray-800 font-medium">
                تأشيرات العمرة
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/50 hover:bg-white/80 transition-colors border border-gray-100 shadow-md hover:shadow-lg">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#458A47] to-[#458A47]/80 flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm md:text-base text-gray-800 font-medium">
                تأشيرات الزيارة
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/50 hover:bg-white/80 transition-colors border border-gray-100 shadow-md hover:shadow-lg">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F5951C] to-[#F5951C]/80 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm md:text-base text-gray-800 font-medium">
                تأشيرات متعددة الدخول
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "الدعوات الرسمية والتجارية ",
      content: (
        <div>
          <p className="mb-8 text-base md:text-lg font-normal text-gray-800 dark:text-gray-200 leading-relaxed">
            نوفر دعوات رسمية معتمدة من الجهات المختصة لتسهيل استخراج التأشيرات
            التجارية والحكومية. نضمن لك دعوات موثقة ومقبولة لدى السفارات والجهات
            الرسمية لضمان نجاح طلبك.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/invite.jpg"
              alt="الدعوات التجارية"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/business-invitation-corporate-meeting.jpg"
              alt="الدعوات الحكومية"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/50 hover:bg-white/80 transition-colors border border-gray-100 shadow-md hover:shadow-lg">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F5951C] to-[#F5951C]/80 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm md:text-base text-gray-800 font-medium">
                الدعوات التجارية
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/50 hover:bg-white/80 transition-colors border border-gray-100 shadow-md hover:shadow-lg">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#458A47] to-[#458A47]/80 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm md:text-base text-gray-800 font-medium">
                الدعوات الحكومية
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "تصديق الوثائق والمستندات ",
      content: (
        <div>
          <p className="mb-8 text-base md:text-lg font-normal text-gray-800 dark:text-gray-200 leading-relaxed">
            نقدم خدمة تصديق شاملة لجميع أنواع الوثائق والمستندات في السفارات
            ووزارة الخارجية. نضمن لك تصديقاً رسمياً ومعتمداً لجميع وثائقك بسرعة
            وكفاءة عالية.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/stamp2.png"
              alt="تصديق الوثائق"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/stamp.png"
              alt="تصديق وزارة الخارجية"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/50 hover:bg-white/80 transition-colors border border-gray-100 shadow-md hover:shadow-lg">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#458A47] to-[#458A47]/80 flex items-center justify-center flex-shrink-0">
                <FileCheck className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm md:text-base text-gray-800 font-medium">
                تصديق الوثائق في السفارات
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/50 hover:bg-white/80 transition-colors border border-gray-100 shadow-md hover:shadow-lg">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F5951C] to-[#F5951C]/80 flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm md:text-base text-gray-800 font-medium">
                تصديق وزارة الخارجية
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "خدمات الشركات ورجال الأعمال ",
      content: (
        <div>
          <p className="mb-8 text-base md:text-lg font-normal text-gray-800 dark:text-gray-200 leading-relaxed">
            نقدم حلولاً متكاملة وشاملة لتسهيل سفر الشركات ورجال الأعمال. من
            خدمات المعارض الدولية إلى متابعة ملفات الشركات، نساعدك في تحقيق
            أهدافك التجارية بكفاءة واحترافية.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/company 1.jpg"
              alt="خدمات المعارض الدولية"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/company 2.jpg"
              alt="خدمات السفر لرجال الأعمال"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/50 hover:bg-white/80 transition-colors border border-gray-100 shadow-md hover:shadow-lg">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#458A47] to-[#F5951C] flex items-center justify-center flex-shrink-0">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm md:text-base text-gray-800 font-medium">
                خدمات المعارض الدولية
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/50 hover:bg-white/80 transition-colors border border-gray-100 shadow-md hover:shadow-lg">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F5951C] to-[#F5951C]/80 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm md:text-base text-gray-800 font-medium">
                خدمات السفر لرجال الأعمال
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "الخدمات الاستشارية والمساندة ",
      content: (
        <div>
          <p className="mb-8 text-base md:text-lg font-normal text-gray-800 dark:text-gray-200 leading-relaxed">
            نقدم خدمات استشارية ومساندة شاملة ومهنية لتسهيل عملية الحصول على
            التأشيرات. من الاستشارات الأولية إلى تجهيز الملفات ومتابعة الطلبات،
            نكون معك في كل خطوة لضمان نجاح طلبك.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <img
              src="/doc 1.jpg"
              alt="الاستشارات"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/doc 2.jpg"
              alt="تجهيز الملفات"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/50 hover:bg-white/80 transition-colors border border-gray-100 shadow-md hover:shadow-lg">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#458A47] to-[#458A47]/80 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm md:text-base text-gray-800 font-medium">
                الاستشارات الخاصة بالتأشيرات
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/50 hover:bg-white/80 transition-colors border border-gray-100 shadow-md hover:shadow-lg">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F5951C] to-[#F5951C]/80 flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm md:text-base text-gray-800 font-medium">
                تجهيز ملفات التأشيرات
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/50 hover:bg-white/80 transition-colors border border-gray-100 shadow-md hover:shadow-lg">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#458A47] to-[#F5951C] flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm md:text-base text-gray-800 font-medium">
                متابعة الطلبات
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "خدمات السفر والسياحة الشاملة",
      content: (
        <div>
          <p className="mb-8 text-base md:text-lg font-normal text-gray-800 dark:text-gray-200 leading-relaxed">
            نقدم خدمات السفر والسياحة الشاملة والمتكاملة لتنظيم رحلاتك بكل
            تفاصيلها. من التخطيط إلى التنفيذ، نساعدك في تنظيم رحلاتك بسهولة
            وضمان تجربة سفر ممتعة ومريحة.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/tourism 1.jpg"
              alt="خدمات السفر والسياحة"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/tourism 2.jpg"
              alt="خدمات السفر"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/50 hover:bg-white/80 transition-colors border border-gray-100 shadow-md hover:shadow-lg">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#458A47] to-[#F5951C] flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm md:text-base text-gray-800 font-medium">
                خدمات السفر والسياحة
              </span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={timelineData} />
    </div>
  );
}
