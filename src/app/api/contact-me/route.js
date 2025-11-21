import { Resend } from "resend";
import { contactFormSchema } from "@/lib/schemas";

export async function POST(request) {
  try {
    // Check for API key
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return Response.json(
        { ok: false, message: "Email service is not configured" },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await request.json();

    // Server-side validation
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      return Response.json(
        { ok: false, message: validationResult.error.errors[0].message },
        { status: 400 }
      );
    }

    const { name, email, message } = validationResult.data;

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM,
      to: process.env.RESEND_TO,
      subject: `Portfolio Contact: Message from ${name}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      text: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { ok: false, message: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    return Response.json(
      { ok: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return Response.json(
      { ok: false, message: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}

export function GET() {
  return Response.json({ error: "Method Not Allowed" }, { status: 405 });
}
