import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const SUBJECT_LABELS: Record<string, string> = {
  "tourist-visa": "تأشيرة سياحية",
  "business-visa": "تأشيرة تجارية",
  "umrah-visa": "تأشيرة عمرة",
  "invitation": "دعوة رسمية",
  "document-certification": "تصديق وثائق",
  "consultation": "استشارة",
  "other": "أخرى",
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, subject, message } = body;

    if (!firstName || !lastName || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: "جميع الحقول مطلوبة" },
        { status: 400 }
      );
    }

    const emailUser = process.env.EMAIL_USER;
    const emailAppPassword = process.env.EMAIL_APP_PASSWORD;

    if (!emailUser || !emailAppPassword) {
      console.error("EMAIL_USER or EMAIL_APP_PASSWORD is not set in .env.local");
      return NextResponse.json(
        { error: "إعدادات البريد الإلكتروني غير مكتملة. يرجى التواصل مع المدير." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailAppPassword,
      },
    });

    const subjectLabel = SUBJECT_LABELS[subject] || subject;

    const emailHtml = `
      <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #458A47;">رسالة جديدة من نموذج التواصل</h2>
        <p><strong>الاسم:</strong> ${firstName} ${lastName}</p>
        <p><strong>البريد الإلكتروني:</strong> ${email}</p>
        <p><strong>رقم الهاتف:</strong> ${phone}</p>
        <p><strong>الموضوع:</strong> ${subjectLabel}</p>
        <p><strong>الرسالة:</strong></p>
        <p style="background: #f5f5f5; padding: 15px; border-radius: 8px;">${message.replace(/\n/g, "<br>")}</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"أبو خليفة العالمية" <${emailUser}>`,
      to: emailUser,
      replyTo: email,
      subject: `[تواصل] ${subjectLabel} - ${firstName} ${lastName}`,
      html: emailHtml,
      text: `الاسم: ${firstName} ${lastName}\nالبريد: ${email}\nالهاتف: ${phone}\nالموضوع: ${subjectLabel}\nالرسالة: ${message}`,
    });

    return NextResponse.json({ success: true, message: "تم إرسال رسالتك بنجاح" });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة لاحقاً أو التواصل عبر الواتساب." },
      { status: 500 }
    );
  }
}
