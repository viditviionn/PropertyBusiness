import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function POST(req,res) {

  const { found_through, text,name,email,telephone} = await req.json();

  if(!name || !email || !telephone){
    return NextResponse.json({ error: 'Error sending email' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'just4ujayesh131@gmail.com',
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: 'just4ujayesh131@gmail.com',
    to:'just4ujayesh131@gmail.com',
    subject:`I found you through${found_through}`,
    text:`Name:${name} Email:${email} TelephoneNO:${telephone}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully', info });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error sending email' });
  }
}
