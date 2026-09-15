import PackageTemplate from "@/components/Template/PackageTemplate";
import JourneyTemplate from "@/components/Template/JourneyTemplate";
import ContactTemplate from "@/components/Template/ContactTemplate";
import DiscountTemplate from "@/components/Template/DiscountTemplate";
import WebBriefTemplate from "@/components/Template/WebBriefTemplate";

const BRIEF_ALLOWED_EXTENSIONS = ["pdf", "doc", "docx", "txt", "jpg", "jpeg", "png", "webp"];
// 2 MB file ≈ 2.8 MB once base64 encoded
const BRIEF_MAX_BASE64_LENGTH = Math.ceil((2 * 1024 * 1024) / 3) * 4;

export async function POST(req) {
  console.log("🔥 /api/contact POST HIT");

  try {
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

    const response = await fetch(
      "https://api.smtp2go.com/v3/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          api_key: "api-82B809750B784CDEBCA58EAA7D3FBFCD",

          sender: "Web Design Spectrum <noreply@webdesignspectrum.com>",

          to: ["info@webdesignspectrum.com"],

          subject,

          html_body: html,

          ...(attachments && { attachments }),
        }),
      }
    );

    const result = await response.json();

    console.log("🔥 SMTP2GO status:", response.status);
    console.log("🔥 SMTP2GO response:", result);

    if (!response.ok || result.data?.succeeded !== 1) {
      return Response.json(
        {
          success: false,
          message:
            result.data?.error ||
            result.error ||
            "Failed to send email",
        },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      messageId: result.data?.email_id,
    });
  } catch (err) {
    console.error("🔥 SMTP2GO error:", err);

    return Response.json(
      {
        success: false,
        message: err.message || "Something went wrong",
      },
      { status: 500 }
    );
  }
}
