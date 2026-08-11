export default function JourneyTemplate(data) {
  return `
  <div style="font-family:Arial,sans-serif;background:#f4f4f4;padding:40px;">
    <div style="max-width:650px;margin:auto;background:#fff;border-radius:10px;padding:30px;border:1px solid #e5e5e5;">

      <h2 style="margin:0;color:#0f172a;">
        🚀 New Journey Form Submission
      </h2>

      <p style="color:#666;margin-top:10px;">
        A visitor has submitted the journey form.
      </p>

      <table width="100%" cellspacing="0" cellpadding="12" style="margin-top:20px;border-collapse:collapse;">
        <tr>
          <td><strong>Name</strong></td>
          <td>${data.customer_name}</td>
        </tr>

        <tr style="background:#fafafa;">
          <td><strong>Email</strong></td>
          <td>${data.customer_email}</td>
        </tr>

        <tr>
          <td><strong>Phone</strong></td>
          <td>${data.customer_phone}</td>
        </tr>

        <tr style="background:#fafafa;">
          <td><strong>SMS Consent</strong></td>
          <td>${data.mesg_checked ? "Yes" : "No"}</td>
        </tr>
      </table>

      <hr style="margin:30px 0">

      <small style="color:#888;">
        Web Design Spectrum Website
      </small>

    </div>
  </div>
  `;
}