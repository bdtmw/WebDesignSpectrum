import { Resend } from "resend";
import PackageTemplate from "@/components/Template/PackageTemplate";
import JourneyTemplate from "@/components/Template/JourneyTemplate";
import ContactTemplate from "@/components/Template/ContactTemplate";
import DiscountTemplate from "@/components/Template/DiscountTemplate";
import WebBriefTemplate from "@/components/Template/WebBriefTemplate";

const BRIEF_ALLOWED_EXTENSIONS = ["pdf", "doc", "docx", "txt", "jpg", "jpeg", "png", "webp"];
// 2 MB file ≈ 2.8 MB once base64 encoded
const BRIEF_MAX_BASE64_LENGTH = Math.ceil((2 * 1024 * 1024) / 3) * 4;

export async function POST(req) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return Response.json(
        { success: false, message: "Email service is not configured" },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();

    let subject = "";
    let html = "";
    let attachments;

    switch (body.formType) {
      case "webBrief": {
        const file = body.attachment;

        if (file?.fileblob) {
          const extension = String(file.filename).split(".").pop().toLowerCase();

          if (!BRIEF_ALLOWED_EXTENSIONS.includes(extension)) {
            return Response.json(
              { success: false, message: "Please attach a PDF, DOC, DOCX, TXT, JPG, PNG or WebP file." },
              { status: 400 }
            );
          }

          if (file.fileblob.length > BRIEF_MAX_BASE64_LENGTH) {
            return Response.json(
              { success: false, message: "Max. file size is 2 MB." },
              { status: 400 }
            );
          }

          const filename = String(file.filename).replace(/[^\w.\-]/g, "_").slice(-100);

          attachments = [
            {
              filename,
              fileblob: file.fileblob,
              mimetype: file.mimetype || "application/octet-stream",
            },
          ];
          body.attachmentName = filename;
        }

        subject = `📝 New Website Brief - ${body.businessName || body.name || ""}`;
        html = WebBriefTemplate(body);
        break;
      }

      case "contact":
        subject = "📩 New Contact Form";
        html = ContactTemplate(body);
        break;

      case "discount":
        subject = "🎁 New Discount Request";
        html = DiscountTemplate(body);
        break;

      case "package":
        subject = "💼 New Package Inquiry";
        html = PackageTemplate(body);
        break;

      case "journey":
        subject = "🚀 New Journey Form";
        html = JourneyTemplate(body);
        break;

      default:
        return Response.json(
          {
            success: false,
            message: "Invalid Form",
          },
          { status: 400 }
        );
    }

    const { data, error } = await resend.emails.send({
      from: "Web Design Spectrum <noreply@webdesignspectrum.com>",
      to: ["info@webdesignspectrum.com"],
      subject,
      html,
      ...(attachments && {
        attachments: attachments.map(({ filename, fileblob }) => ({
          filename,
          content: fileblob,
        })),
      }),
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        {
          success: false,
          message: error.message || "Failed to send email",
        },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      messageId: data?.id,
    });
  } catch (err) {
    console.error("Contact API error:", err);

    return Response.json(
      {
        success: false,
        message: err.message || "Something went wrong",
      },
      { status: 500 }
    );
  }
}
