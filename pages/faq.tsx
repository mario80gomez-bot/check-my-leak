import Head from "next/head";
export default function FAQPage() {
  return (
    <>
      <Head>
        <title>FAQ | Check My Leak</title>
      </Head>
      <main style={{ padding: "2rem", maxWidth: "800px", margin: "auto" }}>
        <h1>Frequently Asked Questions</h1>
        <h2>What does Check My Leak do?</h2>
        <p>It checks if your email or phone number appears in known data breaches.</p>
        <h2>Is it safe?</h2>
        <p>Yes. Your input is not stored or shared. Everything runs privately on your device.</p>
        <h2>Where does the data come from?</h2>
        <p>This is a simulated demo. Real-world tools use breach databases and APIs like Have I Been Pwned.</p>
        <h2>Can I trust the result?</h2>
        <p>Yes, for demo purposes. In a live tool, you'd integrate verified breach-checking APIs.</p>
        <p>Still have questions? Contact: <strong>support@checkmyleak.com</strong></p>
      </main>
    </>
  );
}






