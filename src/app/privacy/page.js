"use client";
import Link from "next/link";

export default function PrivacyPolicy() {
  const C = {
    bg: "#FFFFFF", bgAlt: "#F8F9FA", text: "#202124", textSub: "#5F6368",
    border: "#DADCE0", accent: "#1A73E8", accentHighlight: "#1E8E3E",
  };

  return (
    <div style={{ background: C.bg, minHeight: "100vh", fontFamily: "'Sora', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #FFFFFF; -webkit-font-smoothing: antialiased; }
      `}</style>

      <nav style={{ borderBottom: `1px solid ${C.border}`, padding: "16px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{ width: 34, height: 34, borderRadius: 9, background: C.accent, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="3" width="5" height="18" rx="1"/><rect x="14" y="3" width="5" height="18" rx="1"/></svg>
            </div>
            <span style={{ fontWeight: 700, fontSize: 19, color: C.text, letterSpacing: "-0.03em" }}>
              Pause<span style={{ color: C.accentHighlight }}>Pay</span>
            </span>
          </Link>
          <Link href="/" style={{ color: C.textSub, textDecoration: "none", fontSize: 14, fontWeight: 500 }}>{"\u2190"} Back to Home</Link>
        </div>
      </nav>

      <main style={{ maxWidth: 800, margin: "0 auto", padding: "60px 24px 100px" }}>
        <p style={{ color: C.accent, fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Legal</p>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800, color: C.text, letterSpacing: "-0.03em", marginBottom: 12 }}>Privacy Policy</h1>
        <p style={{ color: C.textSub, fontSize: 15, marginBottom: 48 }}>Last updated: April 16, 2026</p>

        <div style={{ color: C.text, fontSize: 16, lineHeight: 1.75 }}>
          <p style={{ marginBottom: 24 }}>
            PausePay (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This policy explains how we collect, use, and safeguard information when you use our website and services.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 40, marginBottom: 16 }}>1. Information We Collect</h2>
          <p style={{ marginBottom: 16 }}>When you join our waitlist or use PausePay, we may collect:</p>
          <ul style={{ paddingLeft: 24, marginBottom: 24 }}>
            <li style={{ marginBottom: 8 }}>Name, email address, and phone number (when you sign up)</li>
            <li style={{ marginBottom: 8 }}>Company name and role (for business accounts)</li>
            <li style={{ marginBottom: 8 }}>Technical data (IP address, browser type, device information)</li>
            <li style={{ marginBottom: 8 }}>Usage data (pages visited, actions taken on the platform)</li>
          </ul>

          <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 40, marginBottom: 16 }}>2. How We Use Your Information</h2>
          <ul style={{ paddingLeft: 24, marginBottom: 24 }}>
            <li style={{ marginBottom: 8 }}>To provide and improve our services</li>
            <li style={{ marginBottom: 8 }}>To communicate with you about PausePay updates and features</li>
            <li style={{ marginBottom: 8 }}>To comply with legal and regulatory requirements (including RBI mandates)</li>
            <li style={{ marginBottom: 8 }}>To prevent fraud and ensure platform security</li>
          </ul>

          <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 40, marginBottom: 16 }}>3. Data Sharing</h2>
          <p style={{ marginBottom: 24 }}>
            We do not sell your personal data. We may share information with trusted third-party processors (payment gateways like Razorpay, email providers like MSG91) strictly to deliver our services. All processors are bound by data protection agreements.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 40, marginBottom: 16 }}>4. Data Security</h2>
          <p style={{ marginBottom: 24 }}>
            We implement industry-standard security measures including encryption at rest and in transit, access controls, and regular security audits. No system is 100% secure, but we take reasonable steps to protect your data.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 40, marginBottom: 16 }}>5. Your Rights</h2>
          <p style={{ marginBottom: 16 }}>Under Indian data protection laws, you have the right to:</p>
          <ul style={{ paddingLeft: 24, marginBottom: 24 }}>
            <li style={{ marginBottom: 8 }}>Access the personal data we hold about you</li>
            <li style={{ marginBottom: 8 }}>Correct inaccurate data</li>
            <li style={{ marginBottom: 8 }}>Request deletion of your data</li>
            <li style={{ marginBottom: 8 }}>Withdraw consent for marketing communications</li>
          </ul>
          <p style={{ marginBottom: 24 }}>
            To exercise these rights, email us at <a href="mailto:hello@pausepay.in" style={{ color: C.accent }}>hello@pausepay.in</a>.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 40, marginBottom: 16 }}>6. Cookies</h2>
          <p style={{ marginBottom: 24 }}>
            We use essential cookies for authentication and performance. Analytics cookies help us understand how the site is used. You can disable cookies in your browser settings, though some features may not work correctly.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 40, marginBottom: 16 }}>7. Changes to This Policy</h2>
          <p style={{ marginBottom: 24 }}>
            We may update this policy from time to time. Material changes will be communicated via email or a prominent notice on our website.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 40, marginBottom: 16 }}>8. Contact Us</h2>
          <p style={{ marginBottom: 24 }}>
            For privacy questions or concerns, contact:<br />
            <strong>PausePay</strong><br />
            Email: <a href="mailto:hello@pausepay.in" style={{ color: C.accent }}>hello@pausepay.in</a><br />
            Based in Assam, India
          </p>
        </div>
      </main>
    </div>
  );
}