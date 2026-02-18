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
    }, 1200);
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
        a {
          color: #0b63ce;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
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
        <h1 style={{ textAlign: "center", color: "#0070f3", marginBottom: "6px" }}>
          Check My Leak
        </h1>

        <p style={{ textAlign: "center", marginTop: 0, marginBottom: "1.25rem" }}>
          Find out instantly if your personal data has been exposed online.
          <br />
          Protect yourself with one quick check.
        </p>

        {/* Checker UI */}
        <div style={{ marginTop: "1rem" }}>
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
            type="button"
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
              fontWeight: 700,
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "Checking..." : "Check Now"}
          </button>

          {/* Result + Warm “Next steps” box (shows AFTER you click Check Now) */}
          {result && (
            <div
              style={{
                marginTop: "12px",
                padding: "14px 14px",
                borderRadius: "12px",
                backgroundColor: "#fff6e6", // warm/tan
                border: "1px solid #f1d2a6",
                color: "#222",
                animation: "fadeIn 250ms ease-out",
              }}
            >
              <div style={{ fontWeight: 700, marginBottom: "8px" }}>
                {result}{" "}
                <span style={{ fontWeight: 400 }}>
                  We recommend securing your accounts.
                </span>
              </div>

              <div style={{ fontWeight: 700, marginTop: "10px", marginBottom: "8px" }}>
                Next steps to protect yourself
              </div>

              {/* Action items */}
              <div
                style={{
                  display: "grid",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    background: "white",
                    border: "1px solid #f1e2c8",
                    borderRadius: "10px",
                    padding: "10px 12px",
                  }}
                >
                  <div style={{ fontWeight: 700, marginBottom: "4px" }}>
                    🔐 Password Manager (recommended)
                  </div>
                  <div style={{ fontSize: "13px", color: "#444", marginBottom: "6px" }}>
                    Create strong unique passwords + secure them in one place.
                  </div>
                  <a href="/affiliate-disclosure">View recommended tools →</a>
                </div>

                <div
                  style={{
                    background: "white",
                    border: "1px solid #f1e2c8",
                    borderRadius: "10px",
                    padding: "10px 12px",
                  }}
                >
                  <div style={{ fontWeight: 700, marginBottom: "4px" }}>
                    🧾 Identity / Credit Monitoring
                  </div>
                  <div style={{ fontSize: "13px", color: "#444", marginBottom: "6px" }}>
                    Get alerts if your identity details appear in suspicious activity.
                  </div>
                  <a href="/faq">See options →</a>
                </div>

                <div
                  style={{
                    background: "white",
                    border: "1px solid #f1e2c8",
                    borderRadius: "10px",
                    padding: "10px 12px",
                  }}
                >
                  <div style={{ fontWeight: 700, marginBottom: "4px" }}>
                    ✉️ Email Aliases + Spam Protection
                  </div>
                  <div style={{ fontSize: "13px", color: "#444", marginBottom: "6px" }}>
                    Reduce spam — protect your real email from future leaks.
                  </div>
                  <a href="/faq">Learn more →</a>
                </div>
              </div>

              <div style={{ marginTop: "10px", fontSize: "12px", color: "#6a5a44" }}>
                We don&apos;t store what you type. This tool provides general guidance only.
              </div>
            </div>
          )}

          {/* Info / Education section (always visible, stays BELOW the result once result appears) */}
          <div style={{ marginTop: result ? "18px" : "18px" }}>
            <h3 style={{ margin: "0 0 10px 0" }}>🔍 What is Check My Leak?</h3>
            <p style={{ margin: "0 0 10px 0" }}>
              Check My Leak is a simple tool that helps you find out if your email or phone number
              has been exposed in a data breach.
            </p>

            <h3 style={{ margin: "16px 0 10px 0" }}>🛠️ How It Works</h3>
            <ul style={{ margin: 0, paddingLeft: "18px" }}>
              <li>📧 Enter your email address or phone number</li>
              <li>🛡️ We scan known data breaches</li>
              <li>⚡ You instantly get a result on whether your data may have been exposed</li>
            </ul>

            <h3 style={{ margin: "16px 0 10px 0" }}>🔒 Your Privacy Is Our Priority</h3>
            <p style={{ margin: 0 }}>
              We don&apos;t store or share your input. This tool provides general guidance only.
            </p>
          </div>

          {/* Footer */}
          <div
            style={{
              marginTop: "30px",
              paddingTop: "16px",
              borderTop: "1px solid #eee",
              fontSize: "12px",
              color: "#777",
              textAlign: "center",
            }}
          >
            <p style={{ margin: "0 0 8px 0" }}>© 2026 Check My Leak. Educational use only.</p>

            <div>
              <a href="/privacy" style={{ margin: "0 8px" }}>
                Privacy
              </a>
              <a href="/terms" style={{ margin: "0 8px" }}>
                Terms
              </a>
              <a href="/affiliate-disclosure" style={{ margin: "0 8px" }}>
                Affiliate Disclosure
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}























 