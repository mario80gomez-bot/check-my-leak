import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #ddd", marginTop: "24px" }}>
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "12px 16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
          fontSize: "14px",
          color: "#666",
        }}
      >
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} Check My Leak. Educational use only.
        </p>

        <nav style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>
        </nav>
      </div>
    </footer>
  );
}
