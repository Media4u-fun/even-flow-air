import { NextResponse } from "next/server";
// import { siteConfig } from "@/config/site"; // Uncomment when enabling Resend emails

// Contact form API route
// This sends an email notification when someone submits the contact form
//
// To enable email sending:
// 1. Install Resend: npm install resend
// 2. Add RESEND_API_KEY to your .env.local
// 3. Uncomment the Resend code below

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // ---- Email sending (uncomment when Resend is set up) ----
    // const { Resend } = await import("resend");
    // const resend = new Resend(process.env.RESEND_API_KEY);
    //
    // await resend.emails.send({
    //   from: `${siteConfig.companyName} <noreply@yourdomain.com>`,
    //   to: siteConfig.contact.email,
    //   subject: `New Contact Form: ${name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
    //     <p><strong>Service:</strong> ${service || "Not selected"}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `,
    // });

    // For now, just log the submission
    console.log("Contact form submission:", { name, email, phone, service, message });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
