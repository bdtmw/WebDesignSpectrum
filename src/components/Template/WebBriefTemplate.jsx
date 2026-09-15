const escapeHtml = (value) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/\r?\n/g, "<br>");

const row = (label, value, index) => `
        <tr${index % 2 ? ' style="background:#fafafa;"' : ""}>
          <td style="width:45%;vertical-align:top;"><strong>${label}</strong></td>
          <td style="vertical-align:top;">${value ? escapeHtml(value) : '<span style="color:#999;">Not provided</span>'}</td>
        </tr>`;

const table = (rows) => `
      <table width="100%" cellspacing="0" cellpadding="12" style="margin-top:12px;border-collapse:collapse;">
        ${rows.map(([label, value], i) => row(label, value, i)).join("")}
      </table>`;

export default function WebBriefTemplate(data) {
  const designRows = [
    ["Do you have any specific design, preferences?", data.designPreferences],
  ];

  if (data.designPreferences === "Yes") {
    designRows.push(
      ["Reference Link", data.referenceLink],
      ["Overall feeling for the website", data.overallFeeling]
    );
  }

  return `
  <div style="font-family:Arial,sans-serif;background:#f4f4f4;padding:40px;">
    <div style="max-width:650px;margin:auto;background:#fff;border-radius:10px;padding:30px;border:1px solid #e5e5e5;">

      <h2 style="margin:0;color:#0f172a;">
        📝 New Website Brief Submission
      </h2>

      <p style="color:#666;margin-top:10px;">
        A client has submitted the website brief form.
      </p>

      <h3 style="margin:28px 0 0;color:#A31621;">Website Design Questionnaire</h3>
      ${table([
        ["Name", data.name],
        ["Email", data.email],
        ["Contact Number", data.phone],
        ["Business / Organization", data.businessName],
        ["Purpose of the website", data.websitePurpose],
        ["Target audience", data.targetAudience],
        ["Competitors & their websites", data.competitors],
        ["Page titles (navigation)", data.pageTitles],
        ...designRows,
        ["When to go live", data.goLive],
        ["Additional comments", data.comments],
        ["Images / sketches / documents", data.attachmentName ? `${data.attachmentName} (attached)` : ""],
      ])}

      <h3 style="margin:28px 0 0;color:#A31621;">Domain and Web Hosting Details</h3>
      ${table([
        ["Do you have a Domain Name?", data.hasDomain],
        ["Do you want us to provide server hosting?", data.needsHosting],
        ["Mobile application in future?", data.mobileApp],
      ])}

      <hr style="margin:30px 0">

      <small style="color:#888;">
        Web Design Spectrum Website
      </small>

    </div>
  </div>
  `;
}
