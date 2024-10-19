import { sendData } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_SECRET);

export async function POST(req: NextRequest) {
  const recivedData: unknown = await req.json();
  const result = sendData.safeParse(recivedData);
  if (!result.success) {
    return NextResponse.json({ error: result.error }, { status: 403 });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: `${result.data.email} <onboarding@resend.dev>`,
      to: ["cezary.makowski96@gmail.com"],
      subject: `masz nową wiadomość od ${result.data.name}`,
      text: result.data.message,
    });

    if (error) {
      return NextResponse.json(
        { error },
        { status: 500, statusText: error.message }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
