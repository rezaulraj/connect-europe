// pages/api/send-email.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, phone, report, consent, activeTab } = req.body;
    return res
      .status(200)
      .json({
        message: "Data received",
        data: { name, email, phone, report, consent, activeTab },
      });
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}

// import nodemailer from "nodemailer";
// import type { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//   success?: boolean;
//   error?: string;
// };

// export default async function POST(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method Not Allowed" });
//   }

//   const { name, email, phone, report, consent, activeTab } = req.body;

//   if (!consent) {
//     return res.status(400).json({ error: "Consent is required." });
//   }

//   try {
//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com", // e.g., mail.yoursite.com
//       port: 465,
//       secure: true,
//       auth: {
//         user: "playergtax8@gmail.com",
//         pass: "kadwncgnwrczkvjz",
//       },
//     });

//     await transporter.sendMail({
//       from: `"${name}" <${email}>`,
//       to: "playergtax8@gmail.com",
//       subject: `New ${activeTab} Request`,
//       html: `
//         <p><strong>Type:</strong> ${activeTab}</p>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Message:</strong> ${report}</p>
//         <p><strong>Consent Given:</strong> ${consent ? "Yes" : "No"}</p>
//       `,
//     });

//     return res.status(201).json({ success: true });
//   } catch (error) {
//     console.error("Email error:", error);
//     return res.status(500).json({ error: "Failed to send email" });
//   }
// }
