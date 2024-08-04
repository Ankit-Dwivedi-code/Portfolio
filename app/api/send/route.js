import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { subject, message } = await req.json();
  console.log(subject, message);
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [toEmail],
      subject: subject,
      react: (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#f9f9f9', color: '#333' }}>
          <h1 style={{ color: '#4A90E2' }}>{subject}</h1>
          <p>New message submitted:</p>
          <p>{message}</p>
        </div>
      ),
    });
    
    console.log(data);
    return NextResponse.json(data);
    
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message });
  }
}
