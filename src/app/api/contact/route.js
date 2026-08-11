import PackageTemplate from "@/components/Template/PackageTemplate";
import JourneyTemplate from "@/components/Template/JourneyTemplate";
import ContactTemplate from "@/components/Template/ContactTemplate";
import DiscountTemplate from "@/components/Template/DiscountTemplate";

export async function POST(req) {
  console.log("🔥 /api/contact POST HIT");

  try {
    const body = await req.json();

    let subject = "";
    let html = "";

    switch (body.formType) {
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
