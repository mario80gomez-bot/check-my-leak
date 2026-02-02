import Head from "next/head";
export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms of Service | Check My Leak</title>
      </Head>
      <main style={{ padding: "2rem", maxWidth: "800px", margin: "auto" }}>
        <h1>Terms of Service</h1>
        <p>Effective Date: May 2025</p>
        <h2>1. Acceptance of Terms</h2>
        <p>By using Check My Leak, you agree to these terms and conditions.</p>
        <h2>2. Use of the Site</h2>
        <p>This service is provided for informational purposes only. You may not misuse the tool for malicious purposes.</p>
        <h2>3. Intellectual Property</h2>
        <p>All content is the property of Check My Leak and may not be reused without permission.</p>
        <h2>4. Limitation of Liability</h2>
        <p>We provide the service “as is.” We do not guarantee its accuracy or reliability.</p>
        <h2>5. Changes</h2>
        <p>We may update these terms at any time. Continued use of the site means you accept the changes.</p>
        <p>For questions, contact: <strong>support@checkmyleak.com</strong></p>
      </main>
    </>
  );
}
