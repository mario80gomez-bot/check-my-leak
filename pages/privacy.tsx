import Head from "next/head";
export default function PrivacyPolicy() {
  return (
    <>
      {/* Navigation Links */}
      <nav style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <a href="/" style={{ marginRight: '1rem' }}>Home</a>
        <a href="/privacy">Privacy Policy</a>
      </nav>
      {/* Page Head */}
      <Head>
        <title>Privacy Policy | Check My Leak</title>
      </Head>
      {/* Main Content */}
      <main style={{ padding: "2rem", maxWidth: "800px", margin: "auto", lineHeight: "1.6" }}>
        <h1>Privacy Policy</h1>
        <p><strong>Effective Date:</strong> May 2025</p>
        <p>
          At Check My Leak, your privacy is important to us. This privacy policy outlines how we
          handle your personal information.
        </p>
        <h2>Information We Collect</h2>
        <p>
          We do not store or share your email or phone number. They are only used to check for data breaches.
        </p>
        <h2>Cookies</h2>
        <p>
          We use Google AdSense, which may use cookies to personalize ads and track performance.
        </p>
        <h2>Third-Party Services</h2>
        <p>
          Our site uses Google AdSense and other third-party tools. These services may collect data based on their own privacy policies.
        </p>
        <h2>Contact</h2>
        <p>
          If you have any questions, please contact us at <strong>support@checkmyleak.com</strong>.
        </p>
      </main>
    </>
  );
}













