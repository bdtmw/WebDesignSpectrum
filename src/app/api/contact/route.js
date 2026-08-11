import PackageTemplate from "@/components/Template/PackageTemplate";
import JourneyTemplate from "@/components/Template/JourneyTemplate";
import ContactTemplate from "@/components/Template/ContactTemplate";
import DiscountTemplate from "@/components/Template/DiscountTemplate";

export async function POST(req) {

  console.log("🔥 /api/forms POST HIT");
  
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

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": "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",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: "Web Design Spectrum",
          email: "noreply@webdesignspectrum.com",
        },
        to: [
          {
            email: "info@webdesignspectrum.com",
          },
        ],
        subject,
        htmlContent: html,
      }),
    });

    if (!response.ok) {
      const error = await response.json();

      return Response.json(
        {
          success: false,
          message: error.message || "Failed to send email",
        },
        { status: response.status }
      );
    }

    const result = await response.json();

    console.log("Brevo status:", response.status);
console.log("Brevo response:", result);

    return Response.json({
      success: true,
      messageId: result.messageId,
    });
  } catch (err) {
    return Response.json(
      {
        success: false,
        message: err.message,
      },
      { status: 500 }
    );
  }
}
