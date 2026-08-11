import Link from "next/link";

export default function PrivacyPolicy() {
    return (
        <section style={{ marginTop: "80px !important", marginBottom: "80px" }} className="main-privacy">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 privacy">
                        <div style={{display: "flex" , flexDirection: "column" , gap: "20px" }} className="term-text">
                            <h3>Privacy Policy</h3>
                            <p>Welcome to Web Design Spectrum (“we,” “our,” or “us”). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, Web Design Spectrum, or use our services. Please read this policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site or use our services.</p>

                            <h3>Information We Collect</h3>

                            <p>We collect clients’ information via email, phone, contact forms, and order forms. This includes the following:</p>
                            <ul>
                                <li><b>Personal Information:</b> Name, company name, billing address, email address, secondary email, phone and fax numbers, and order details.</li>
                                <li><b>Optional Information:</b> Additional details you may provide in creative briefs or during communication.</li>
                                <li><b>Technical Information:</b> IP address, browser version, operating system, and date and time of your visit. Tools like Google Analytics may also be used to collect and record this data.</li>
                                <li><b>Feedback Information:</b> Opinions, complaints, appreciation, and comments about our products or services.</li>
                            </ul>

                            <h3>How We Use Your Information</h3>
                            <p>The information we collect is used for the following purposes:</p>
                            <ul>
                                <li><b>1. Order Processing:</b> Understanding your needs, customizing your order, and processing payments.</li>
                                <li><b>2. Communication:</b> Keeping you informed about the status of your order, updates, and delivery of finalized products.</li>
                                <li><b>3. Marketing:</b> Sending updates about new services, promotional offers, and industry news (with your consent).</li>
                                <li><b>4. Improvement:</b> Enhancing our website, marketing strategies, and customer experience.</li>
                            </ul>

                            <h3>Data Sharing and Disclosure</h3>
                            <p>We are committed to protecting your privacy and confidentiality. However, your information may be shared in the following scenarios:</p>
                            <ul>
                                <li><b>1. Service Providers:</b> To support our business operations (e.g., billing, fraud prevention, technology services) while ensuring limited use for the intended purposes.</li>
                                <li><b>2. Legal Obligations:</b> To comply with applicable laws, judicial proceedings, or court orders.</li>
                                <li><b>3. SMS Consent:</b> Phone numbers and SMS consent information will never be shared with third parties or affiliates under any circumstances.</li>
                            </ul>

                            <h3>Privacy of Payments</h3>
                            <p>
                                We prioritize the privacy of payment information. Payments are processed through secure systems using Secure Sockets Layer (SSL) technology, as indicated by the “https://” prefix in the website domain. We ensure that billing information is handled securely and confidentially.
                            </p>
                            <h3>Cookies and Tracking Technologies</h3>
                            <p>We do not use cookies or other tracking technologies to monitor or collect information from your device.</p>

                            <h3>Confidentiality</h3>
                            <p>We treat your personal information as confidential. All data is stored securely and accessed only by designated personnel. We reassure you that your information will not be released to third parties without your consent unless required by law.</p>

                            <h3>Your Choices</h3>
                            <p>You have the following choices regarding your information:</p>
                            <ul>
                                <li><b>1. Access and Correction:</b> Contact us to access or update your personal information.</li>
                                <li><b>2. Opt-Out:</b> Unsubscribe from marketing communications by following the instructions in emails or contacting us directly.</li>
                                <li><b>3. Cookies Management:</b> Adjust your browser settings to manage cookie preferences.</li>
                            </ul>

                            <h3>Children’s Privacy</h3>
                            <p>Our website and services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware of such collection, we will take immediate steps to delete the information.</p>

                            <h3>Amendments</h3>
                            <p>Web Design Spectrum may update this Privacy Policy as needed. Changes will be communicated via an updated policy on our website with a new effective date. Continued use of our services implies acceptance of the updated terms.</p>

                            <h3>Conditions for Information Disclosure</h3>
                            <p>We prioritize avoiding information disclosure. However, disclosure may occur if required by law for judicial proceedings, court orders, or other legal processes.</p>

                            <h3>Contact Us</h3>
                            <p>If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us:</p>

                            <ul>
                                <li><b>Web Design Spectrum</b></li>
                                <li><b>Email:</b> <Link href="mailto:info@webdesignspectrum.com">info@webdesignspectrum.com</Link></li>
                                <li><b>Phone:</b> <Link href="tel:307-218-3240">(307) 218-3240 (USA)</Link></li>
                            </ul>

                            <p>You can stop messaging by sending <b>"STOP"</b> and get more help by sending <b>"HELP."</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}