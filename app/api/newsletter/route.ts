import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID

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
      // Welcome email to subscriber
      resend.emails.send({
        from: 'NCOMA <info@whatisinyouroil.com>',
        to: [email],
        subject: 'Welcome to the NCOMA Newsletter',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #1F1F1F; padding: 32px; text-align: center;">
              <h1 style="color: #C8841A; margin: 0; font-size: 24px; letter-spacing: 2px;">NCOMA</h1>
              <p style="color: rgba(255,255,255,0.6); margin: 8px 0 0; font-size: 13px;">National Cooking Oil Management Association</p>
            </div>
            <div style="padding: 32px; background: #FAF6F0;">
              <h2 style="color: #1F1F1F; margin: 0 0 16px; font-size: 20px;">You're in.</h2>
              <p style="color: #555; line-height: 1.7; margin: 0 0 16px;">
                Thank you for subscribing to the NCOMA newsletter. You'll receive:
              </p>
              <ul style="color: #555; line-height: 1.8; padding-left: 20px; margin: 0 0 20px;">
                <li>Oil science and degradation research</li>
                <li>Certification program updates</li>
                <li>Industry reports and data</li>
                <li>New Field Notes articles</li>
              </ul>
              <p style="color: #555; line-height: 1.7; margin: 0 0 24px;">
                We send infrequently and only when we have something worth reading. No spam, ever.
              </p>
              <a href="https://www.whatisinyouroil.com" style="display: inline-block; background: #C8841A; color: white; padding: 12px 28px; text-decoration: none; font-weight: bold; font-size: 14px;">
                Visit whatisinyouroil.com
              </a>
            </div>
            <div style="padding: 16px 32px; background: #1F1F1F; text-align: center;">
              <p style="color: rgba(255,255,255,0.3); font-size: 11px; margin: 0;">
                NCOMA &middot; 5355 N 51st Ave #1, Glendale, AZ 85301<br/>
                <a href="https://www.whatisinyouroil.com/privacy" style="color: rgba(255,255,255,0.4);">Privacy Policy</a>
              </p>
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
