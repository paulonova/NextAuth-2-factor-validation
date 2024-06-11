import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `https://localhost:3000/auth/new-verification?token=${token}`

  await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['paulonova144@gmail.com'],
    subject: 'Hello World',
    html: `<p>Click <a href="${confirmLink}">here</a> to confirm your email</p>`,
  })
}
