import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';


// pages/api/sendEmail.js

export async function POST(req,res) {
    console.log('req.bodyyyyy',req.body)

//   const { to, subject, text } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'just4ujayesh131@gmail.com',
      pass: 'ubnpeolmbbehviic',
    },
  });

  const mailOptions = {
    from: 'just4ujayesh131@gmail.com',
    to:'just4ujayesh131@gmail.com',
    subject:'helloodockok',
    text:'swhks',
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully', info });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error sending email' });
  }
}
