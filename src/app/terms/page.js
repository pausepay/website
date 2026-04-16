"use client";
import Link from "next/link";

export default function TermsOfService() {
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
        <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800, color: C.text, letterSpacing: "-0.03em", marginBottom: 12 }}>Terms of Service</h1>
        <p style={{ color: C.textSub, fontSize: 15, marginBottom: 48 }}>Last updated: April 16, 2026</p>

        <div style={{ color: C.text, fontSize: 16, lineHeight: 1.75 }}>
          <p style={{ marginBottom: 24 }}>
            Welcome to PausePay. By accessing our website or using our services, you agree to these Terms of Service. Please read them carefully.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 40, marginBottom: 16 }}>1. Service Description</h2>
          <p style={{ marginBottom: 24 }}>
            PausePay provides subscription pause infrastructure for Indian payment gateways. We act as middleware between merchant applications and payment processors (Razorpay, Cashfree, PhonePe) to enable pause and resume functionality for recurring subscriptions.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 40, marginBottom: 16 }}>2. Eligibility</h2>
          <p style={{ marginBottom: 24 }}>
            You must be at least 18 years old and legally capable of entering into binding contracts. If you use PausePay on behalf of a business, you confirm you have authority to bind that business.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 40, marginBottom: 16 }}>3. Account Registration</h2>
          <p style={{ marginBottom: 24 }}>
            To use PausePay services, you must create an account with accurate and complete information. You are responsible for maintaining the confidentiality of your credentials and all activity under your account.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 40, marginBottom: 16 }}>4. Subscription and Billing</h2>
          <ul style={{ paddingLeft: 24, marginBottom: 24 }}>
            <li style={{ marginBottom: 8 }}>Paid plans are billed monthly in Indian Rupees (INR)</li>
            <li style={{ marginBottom: 8 }}>14-day free trial is available for Starter and Growth tiers</li>
            <li style={{ marginBottom: 8 }}>Subscriptions auto-renew unless cancelled before the renewal date</li>
            <li style={{ marginBottom: 8 }}>Refunds are issued at our discretion on a case-by-case basis</li>
          </ul>

          <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 40, marginBottom: 16 }}>5. Acceptable Use</h2>
          <p style={{ marginBottom: 16 }}>You agree not to:</p>
          <ul style={{ paddingLeft: 24, marginBottom: 24 }}>
            <li style={{ marginBottom: 8 }}>Use PausePay for any illegal or unauthorized purpose</li>
            <li style={{ marginBottom: 8 }}>Attempt to reverse-engineer or exploit our systems</li>
            <li style={{ marginBottom: 8 }}>Transmit malware or interfere with service infrastructure</li>
            <li style={{ marginBottom: 8 }}>Violate RBI regulations or any applicable laws</li>
          </ul>

          <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 40, marginBottom: 16 }}>6. RBI Compliance</h2>
          <p style={{ marginBottom: 24 }}>
            PausePay complies with all applicable Reserve Bank of India regulations, including e-mandate and 2FA requirements effective April 2026. We maintain bank mandates according to RBI guidelines and do not bypass required authentication processes.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 40, marginBottom: 16 }}>7. Intellectual Property</h2>
          <p style={{ marginBottom: 24 }}>
            All content, code, and trademarks on PausePay are owned by us or our licensors. You may not copy, modify, or redistribute our materials without written permission.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 40, marginBottom: 16 }}>8. Limitation of Liability</h2>
          <p style={{ marginBottom: 24 }}>
            PausePay is provided &quot;as is&quot; without warranties of any kind. We are not liable for indirect, incidental, or consequential damages. Our total liability is limited to the amount you paid us in the 12 months preceding the claim.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 40, marginBottom: 16 }}>9. Termination</h2>
          <p style={{ marginBottom: 24 }}>
            Either party may terminate the agreement with 30 days&apos; notice. We reserve the right to suspend accounts that violate these Terms immediately and without notice.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 40, marginBottom: 16 }}>10. Governing Law</h2>
          <p style={{ marginBottom: 24 }}>
            These Terms are governed by the laws of India. Any disputes will be resolved in the courts of Guwahati, Assam.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 40, marginBottom: 16 }}>11. Changes to Terms</h2>
          <p style={{ marginBottom: 24 }}>
            We may update these Terms periodically. Continued use of PausePay after changes constitutes acceptance. Material changes will be notified via email.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 40, marginBottom: 16 }}>12. Contact</h2>
          <p style={{ marginBottom: 24 }}>
            Questions about these Terms? Contact us at <a href="mailto:hello@pausepay.in" style={{ color: C.accent }}>hello@pausepay.in</a>.
          </p>
        </div>
      </main>
    </div>
  );
}