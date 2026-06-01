import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const RECIPIENT = 'info@whatisinyouroil.com'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, subject, message } = body

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    // Send email via Resend
    const { error } = await resend.emails.send({
      from: `WIYO! Contact Form <noreply@whatisinyouroil.com>`,
      to: [RECIPIENT],
      replyTo: email,
      subject: `[WIYO!] ${subject || 'General inquiry'} — ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject || 'General inquiry'}`,
        ``,
        `Message:`,
        message,
      ].join('\n'),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <div style="background: #1F1F1F; padding: 20px 24px;">
            <h2 style="color: #C8841A; margin: 0; font-size: 18px;">WIYO! Contact Form</h2>
          </div>
          <div style="padding: 24px; border: 1px solid #eee; border-top: none;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; color: #666; width: 80px; vertical-align: top;">Name</td>
                <td style="padding: 8px 0; font-weight: bold;">${escapeHtml(name)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; vertical-align: top;">Email</td>
                <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; vertical-align: top;">Subject</td>
                <td style="padding: 8px 0;">${escapeHtml(subject || 'General inquiry')}</td>
              </tr>
            </table>
            <div style="border-top: 1px solid #eee; padding-top: 16px;">
              <p style="color: #666; margin: 0 0 8px; font-size: 13px;">Message</p>
              <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(message)}</p>
            </div>
          </div>
          <div style="padding: 12px 24px; background: #f9f9f9; font-size: 12px; color: #999;">
            Sent from whatisinyouroil.com contact form
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send message. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
