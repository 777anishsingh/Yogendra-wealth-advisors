import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const contactSchema = z.object({
  name: z.string().min(2),
  phone: z.string().regex(/^[6-9]\d{9}$/),
  email: z.string().email().optional().or(z.literal("")),
  interest: z.string().optional(),
  message: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = contactSchema.parse(body);

    const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

    if (!SMTP_EMAIL || !SMTP_PASSWORD) {
      console.warn("SMTP credentials missing. Cannot send real email.");
      return NextResponse.json(
        { success: false, message: "Email service is not configured on the server." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: SMTP_EMAIL,
        pass: SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Website Contact Form" <${SMTP_EMAIL}>`,
      to: "yogendrasingh748@gmail.com", // The business email where leads are sent
      replyTo: data.email || undefined,
      subject: `New Lead: ${data.interest ? data.interest : 'General Inquiry'} from ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #003F7F; border-bottom: 2px solid #C9922A; padding-bottom: 10px;">New Consultation Request</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
          <p><strong>Email:</strong> ${data.email || 'Not provided'}</p>
          <p><strong>Interested In:</strong> ${data.interest || 'Not specified'}</p>
          <p style="margin-top: 20px;"><strong>Client Message:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #C9922A; border-radius: 4px;">
            ${data.message ? data.message.replace(/\n/g, '<br/>') : 'No message provided'}
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.issues },
        { status: 400 }
      );
    }
    
    console.error("Failed to send email via NodeMailer:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
