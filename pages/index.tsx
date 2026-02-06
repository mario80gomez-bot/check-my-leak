import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string>("");

  const handleCheck = () => {
    setLoading(true);
    setResult("");

    setTimeout(() => {
      // demo result
      setResult("⚠️ Your information appears in at least one known data breach.");
      setLoading(false);
    }, 1500);
  };

  return (
    <div style={{ backgroundColor: "#f0f4f8", minHeight: "100vh", padding: "2rem" }}>
      <Head>
        <title>Check My Leak</title>
        <meta
          name="description"
          content="Find out if your email or phone number has been exposed in a data breach."
        />
      </Head>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Top Navigation */}
      <nav style={{ marginBottom: "2rem", textAlign: "center" }}>
        <a href="/" style={{ marginRight: "1rem" }}>
          Home
        </a>
        <a href="/privacy" style={{ marginRight: "1rem" }}>
          Privacy Policy
        </a>
        <a href="/terms" style={{ marginRight: "1rem" }}>
          Terms
        </a>
        <a href="/faq">FAQ</a>
      </nav>

      {/* Main Container */}
      <div
        style={{
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 0 20px rgba(0,0,0,0.1)",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#0070f3" }}>Check My Leak</h1>

        <p style={{ textAlign: "center", marginBottom: "2rem" }}>
          Find out instantly if your personal data has been exposed online.
          <br />
          Protect yourself with one quick check.
        </p>

        {/* Checker UI */}
        <div style={{ marginTop: "1.5rem" }}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter email or phone number"
            style={{
              width: "100%",
              padding: "12px 14px",
              borderRadius: "10px",
              border: "1px solid #d8d8d8",
              marginBottom: "12px",
              fontSize: "16px",
            }}
          />

          <button
            onClick={handleCheck}
            disabled={loading || input.trim().length === 0}
            style={{
              width: "100%",
              padding: "12px 14px",
              borderRadius: "10px",
              border: "none",
              backgroundColor: loading ? "#9bbcf5" : "#0070f3",
              color: "white",
              fontSize: "16px",
              fontWeight: 600,
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "Checking..." : "Check Now"}
          </button>

          {/* Result */}
         {result && (
  <div
    style={{
      marginTop: "12px",
      padding: "12px 14px",
      borderRadius: "12px",
      backgroundColor: "#f5f7ed",
      border: "1px solid #d8d8d8",
      color: "#222",
      animation: "fadeIn 250ms ease-out",
    }}
  >
    {result}

    <p
      style={{
        marginTop: "8px",
        fontSize: "12px",
        color: "#666",
        textAlign: "center",
      }}
    >
      We don’t store what you type. This tool provides general guidance only.
    </p>
  </div>
)}


          {/* Next Steps (only shows after a result) */}
          {result && (
            <div style={{ marginTop: "16px", animation: "fadeIn 250ms ease-out" }}>
              <h3 style={{ margin: "0 0 10px 0" }}>Next Steps</h3>
              <p style={{ margin: "0 0 10px 0" }}>
                If your information appears in breaches, consider updating passwords and enabling 2FA.
              </p>
              <ul style={{ margin: 0, paddingLeft: "18px" }}>
                <li>Change passwords for important accounts</li>
                <li>Enable two-factor authentication (2FA)</li>
                <li>Watch for phishing emails or texts</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}























 