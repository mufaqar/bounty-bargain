import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// all categories
export async function POST(req: Request) {
  const { email } = (await req.json()) as {
    email: string;
  };
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMIAL_PASSWORD_TOKEN,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "mufaqar@gmail.com",
      subject: `${email} registor`,
      html: `<p>Email Successfully registored</p><br>
         <p><strong>Email: </strong> ${email}</p>
         `,
    });
    return new NextResponse(
      JSON.stringify({
        status: "ok",
        message: "Email send",
      }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: error.message,
      }),
      { status: 500 }
    );
  }
}
