export default function PackageTemplate(data) {
  return `
  <div style="font-family:Arial,sans-serif;background:#f4f4f4;padding:40px;">
    <div style="max-width:650px;margin:auto;background:#fff;border-radius:10px;padding:30px;border:1px solid #e5e5e5;">

      <h2 style="margin:0;color:#0f172a;">
        💼 New Package Inquiry
      </h2>

      <p style="color:#666;margin-top:10px;">
        A customer has shown interest in one of your packages.
      </p>

      <table width="100%" cellspacing="0" cellpadding="12" style="margin-top:20px;border-collapse:collapse;">
        <tr>
          <td><strong>Name</strong></td>
          <td>${data.name}</td>
        </tr>

        <tr style="background:#fafafa;">
          <td><strong>Email</strong></td>
          <td>${data.email}</td>
        </tr>

        <tr>
          <td><strong>Phone</strong></td>
          <td>${data.phone}</td>
        </tr>

        <tr style="background:#fafafa;">
          <td><strong>Package</strong></td>
          <td>${data.packageName}</td>
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