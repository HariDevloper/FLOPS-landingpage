import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message } = await request.json()

    // Create a transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Your Gmail App Password
      },
    })

    // Email to company
    const mailOptionsToCompany = {
      from: process.env.GMAIL_USER,
      to: 'primespark.pvt@gmail.com',
      subject: `🚀 New Project Inquiry from ${name}: ${subject}`,
      html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0a0e27; color: #ffffff; margin: 0; padding: 0; }
                        .container { max-width: 600px; margin: 20px auto; background-color: #111827; border: 1px solid #1f2937; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.5); }
                        .header { background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); padding: 30px; text-align: center; }
                        .header h1 { margin: 0; font-size: 24px; letter-spacing: 1px; text-transform: uppercase; color: #ffffff; }
                        .content { padding: 40px; }
                        .field { margin-bottom: 25px; border-bottom: 1px solid #1f2937; padding-bottom: 15px; }
                        .label { color: #9ca3af; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px; font-weight: bold; }
                        .value { color: #ffffff; font-size: 16px; line-height: 1.5; }
                        .message-box { background-color: #1f2937; padding: 20px; border-radius: 12px; border-left: 4px solid #3b82f6; margin-top: 10px; }
                        .footer { background-color: #0a0e27; padding: 20px; text-align: center; font-size: 12px; color: #6b7280; border-top: 1px solid #1f2937; }
                        .highlight { color: #3b82f6; font-weight: bold; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>New Project Inquiry</h1>
                        </div>
                        <div class="content">
                            <div class="field">
                                <div class="label">Client Name</div>
                                <div class="value">${name}</div>
                            </div>
                            <div class="field">
                                <div class="label">Email Address</div>
                                <div class="value"><a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></div>
                            </div>
                            <div class="field">
                                <div class="label">Phone Number</div>
                                <div class="value">${phone || 'Not provided'}</div>
                            </div>
                            <div class="field">
                                <div class="label">Subject</div>
                                <div class="value highlight">${subject}</div>
                            </div>
                            <div class="field" style="border-bottom: none;">
                                <div class="label">Message Details</div>
                                <div class="message-box">
                                    <div class="value" style="white-space: pre-wrap;">${message}</div>
                                </div>
                            </div>
                        </div>
                        <div class="footer">
                            <p>© 2025 FLOPS Technologies. All rights reserved.</p>
                            <p>This inquiry was sent from the official FLOPS Technologies website.</p>
                        </div>
                    </div>
                </body>
                </html>
            `,
    }

    // Auto-reply to customer
    const mailOptionsToCustomer = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Thank you for reaching out to FLOPS Technologies',
      html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0a0e27; color: #ffffff; margin: 0; padding: 0; }
                        .container { max-width: 600px; margin: 20px auto; background-color: #111827; border: 1px solid #1f2937; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.5); }
                        .header { background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%); padding: 40px; text-align: center; }
                        .header h1 { margin: 0; font-size: 24px; letter-spacing: 1px; text-transform: uppercase; color: #ffffff; }
                        .content { padding: 40px; line-height: 1.6; }
                        .greeting { font-size: 18px; margin-bottom: 20px; color: #ffffff; }
                        .body-text { color: #9ca3af; margin-bottom: 30px; }
                        .summary-box { background-color: #1f2937; padding: 25px; border-radius: 12px; margin-bottom: 30px; border: 1px solid #374151; }
                        .summary-title { font-size: 14px; text-transform: uppercase; color: #3b82f6; letter-spacing: 1px; margin-bottom: 15px; font-weight: bold; }
                        .summary-item { margin-bottom: 10px; font-size: 14px; }
                        .summary-label { color: #6b7280; width: 80px; display: inline-block; }
                        .cta-button { display: inline-block; background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); color: #ffffff; padding: 12px 30px; border-radius: 8px; text-decoration: none; font-weight: bold; margin-top: 10px; }
                        .footer { background-color: #0a0e27; padding: 30px; text-align: center; font-size: 12px; color: #6b7280; border-top: 1px solid #1f2937; }
                        .contact-info { margin-top: 20px; padding-top: 20px; border-top: 1px solid #1f2937; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>Message Received</h1>
                        </div>
                        <div class="content">
                            <div class="greeting">Hello ${name},</div>
                            <div class="body-text">
                                Thank you for reaching out to <span style="color: #3b82f6; font-weight: bold;">FLOPS Technologies</span>. We've received your inquiry and our team is already reviewing it.
                                <br><br>
                                We aim to respond to all inquiries within 24-48 hours. In the meantime, here's a summary of what you sent us:
                            </div>
                            <div class="summary-box">
                                <div class="summary-title">Inquiry Summary</div>
                                <div class="summary-item"><span class="summary-label">Subject:</span> ${subject}</div>
                                <div class="summary-item"><span class="summary-label">Message:</span></div>
                                <div style="color: #ffffff; font-style: italic; margin-top: 10px; font-size: 14px;">"${message.substring(0, 200)}${message.length > 200 ? '...' : ''}"</div>
                            </div>
                            <div class="body-text">
                                If you have any urgent questions, feel free to reply to this email or call us directly.
                            </div>
                            <center>
                                <a href="https://primespark.in" class="cta-button">Visit Our Website</a>
                            </center>
                        </div>
                        <div class="footer">
                            <div class="contact-info">
                                <p style="margin: 5px 0; color: #ffffff; font-weight: bold;">FLOPS Technologies</p>
                                <p style="margin: 5px 0;">primespark.pvt@gmail.com | +91 6385420576</p>
                                <p style="margin: 5px 0;">India | Serving Worldwide</p>
                            </div>
                            <p style="margin-top: 20px;">© 2025 FLOPS Technologies. All rights reserved.</p>
                        </div>
                    </div>
                </body>
                </html>
            `,
    }

    // Send both emails
    await transporter.sendMail(mailOptionsToCompany)
    await transporter.sendMail(mailOptionsToCustomer)

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { message: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
}
