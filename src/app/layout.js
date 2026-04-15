import "./globals.css";

export const metadata = {
  title: "PausePay \u2014 Stop Losing Subscribers to a Missing Pause Button",
  description: "India's first subscription pause infrastructure. Resume billing under the existing RBI mandate \u2014 zero re-authentication, zero churn.",
  keywords: "subscription pause, RBI 2FA, churn reduction, recurring payments India, Razorpay pause, mandate management",
  openGraph: {
    title: "PausePay \u2014 India's Subscription Pause Infrastructure",
    description: "Don't let Pause become Cancel. Resume billing under the existing RBI mandate.",
    url: "https://pausepay.in",
    siteName: "PausePay",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PausePay \u2014 Stop Losing Subscribers",
    description: "India's first subscription pause infrastructure. Zero friction. Zero churn.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}