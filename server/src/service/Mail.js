import * as dotenv from 'dotenv';
dotenv.config();
import nodemailer from 'nodemailer';

class mailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,

      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }

  async sendActivationMail(to, link) {
    const stateLink = `${process.env.API_URL}/api/activate/${link}`;

    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: 'Активация аккаунта на ' + process.env.API_URL,
      text: '',
      html: `
                    <div>
                        <h1>Для активации перейдите по ссылке</h1>
                        <a href="${stateLink}">${stateLink}</a>
                    </div>
                `,
    });
  }
}

export const MailService = new mailService();
