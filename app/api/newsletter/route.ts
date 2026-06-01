import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import fs from 'fs'
import path from 'path'

const resend = new Resend(process.env.RESEND_API_KEY)

const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID

// Load the welcome email HTML at build time
let welcomeHtml: string
try {
  welcomeHtml = fs.readFileSync(
    path.join(process.cwd(), 'emails', 'welcome-email.html'),
    'utf-8'
  )
} catch {
  welcomeHtml = ''
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, firstName } = body

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    // If we have an audience configured, add to Resend Audiences
    if (AUDIENCE_ID) {
      const { error } = await resend.contacts.create({
        email,
        firstName: firstName || undefined,
        audienceId: AUDIENCE_ID,
      })

      if (error) {
        // "Contact already exists" is not a real error
        if (!error.message?.includes('already exists')) {
          console.error('Resend audience error:', error)
          return NextResponse.json(
            { error: 'Something went wrong. Please try again.' },
            { status: 500 }
          )
        }
      }
    }

    // Always send a notification to NCOMA + a welcome email to the subscriber
    await Promise.all([
      // Notify NCOMA
      resend.emails.send({
        from: 'NCOMA Newsletter <info@whatisinyouroil.com>',
        to: ['info@whatisinyouroil.com'],
        subject: `[NCOMA] New newsletter subscriber: ${email}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 500px;">
            <div style="background: #1F1F1F; padding: 16px 20px;">
              <h2 style="color: #C8841A; margin: 0; font-size: 16px;">New Subscriber</h2>
            </div>
            <div style="padding: 20px; border: 1px solid #eee; border-top: none;">
              <p style="margin: 0;"><strong>Email:</strong> ${escapeHtml(email)}</p>
              ${firstName ? `<p style="margin: 8px 0 0;"><strong>Name:</strong> ${escapeHtml(firstName)}</p>` : ''}
            </div>
          </div>
        `,
      }),
      // Welcome email to subscriber — full Issue #1 newsletter
      resend.emails.send({
        from: 'NCOMA <info@whatisinyouroil.com>',
        to: [email],
        subject: 'Welcome to NCOMA — The US has no federal standard for frying oil quality.',
        html: welcomeHtml || `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #1F1F1F; padding: 32px; text-align: center;">
              <h1 style="color: #C8841A; margin: 0; font-size: 24px; letter-spacing: 2px;">NCOMA</h1>
            </div>
            <div style="padding: 32px; background: #FAF6F0;">
              <h2 style="color: #1F1F1F; margin: 0 0 16px;">Welcome to NCOMA.</h2>
              <p style="color: #555; line-height: 1.7;">Thank you for subscribing. Visit <a href="https://www.whatisinyouroil.com" style="color: #C8841A;">whatisinyouroil.com</a> to learn more.</p>
            </div>
          </div>
        `,
      }),
    ])

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Newsletter error:', err)
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
