import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req, res) => {
  if (req.method === "POST") {
    try {
      const result = {};
      const data = await req.formData();

      const file = data.get("file");
      if (!file) {
        return NextResponse.json(
          { error: "File blob is required." },
          { status: 400 }
        );
      }
      const buffer = Buffer.from(await file.arrayBuffer());

      for (const [name, value] of data.entries()) {
        result[name] = value;
      }

      // Check if file is attached in the result object
      if (result.file) {
        const file = result.file;

        const transporter = nodemailer.createTransport({
          host: "smtp.hostinger.com",
          port: 465,
          secure: true,
          auth: {
            user: "muhammaddaniyal@slidey.io",
            pass: "MuhammadDaniyal321*",
          },
        });

        const mailOptions = {
          from: "muhammaddaniyal@slidey.io",
          to: "ahmed@slidey.io",
          subject: "Form Submission",
          text: "Form data submitted:",
          attachments: [
            {
              filename: file.name,
              content: buffer,
            },
          ],
          html: `
            <h1>Form Data:</h1>
            <p>Name: ${result.name}</p>
            <p>Email: ${result.email}</p>
            <p>Telephone: ${result.tel}</p>
            <p>Message: ${result.message}</p>
          `,
        };

        // Send email
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log("Error sending email:", error);
            return new NextResponse(
              JSON.stringify({ message: "Error sending email" }),
              {
                status: 500,
              }
            );
          } else {
            console.log("Email sent:", info.response);
            return new NextResponse(
              JSON.stringify({ message: "Form SUbmitted", data: result }),
              {
                status: 201,
              }
            );
          }
        });
      } else {
        return new NextResponse(
          JSON.stringify({ message: "No file attached in the form data" }),
          {
            status: 400,
          }
        );
      }
      return new NextResponse(
        JSON.stringify({ message: "Form SUbmitted", data: result }),
        {
          status: 201,
        }
      );
    } catch (error) {
      console.log(error);
      return new NextResponse(
        { message: "Error handling form submission" },
        { status: 500 }
      );
    }
  } else {
    return new NextResponse({ message: "Method Not Allowed" }, { status: 405 });
  }
};
