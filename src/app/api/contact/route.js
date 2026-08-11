import { Resend } from "resend";

export const resend = new Resend("324j3hg423hjasnbad);

import PackageTemplate from "@/components/Template/PackageTemplate";
import JourneyTemplate from "@/components/Template/JourneyTemplate";
import ContactTemplate from "@/components/Template/ContactTemplate";
import DiscountTemplate from "@/components/Template/DiscountTemplate";


export async function POST(req) {
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

    await resend.emails.send({
      from: "Web Design Spectrum <noreply@webdesignspectrum.com>",
      to: ["info@webdesignspectrum.com"],
      subject,
      html,
    });

    return Response.json({
      success: true,
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
