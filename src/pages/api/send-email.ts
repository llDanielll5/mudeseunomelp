import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message, phone } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: false,
    auth: {
      user: "suporte@mudedenome.com.br",
      pass: "Provisoria4!",
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    replyTo: email,
    to: process.env.EMAIL_USER,
    subject: `Mensagem de ${name}`,
    text: `Telefone para contato: ${phone}\n\n${message}`,
  };

  const testEmail = {
    from: "suporte@mudedenome.com.br",
    to: "suporte@mudedenome.com.br",
    subject: "Teste SMTP",
    text: "Se você recebeu isso, o SMTP está funcionando!",
  };

  try {
    await transporter.sendMail(testEmail);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return res.status(500).json({ success: false, error });
  }
}
