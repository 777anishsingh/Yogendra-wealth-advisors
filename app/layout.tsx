import type { Metadata } from "next";
import { DM_Sans, Playfair_Display, Baloo_2 } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin", "devanagari"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Yogendra Singh Panwar | LIC Agent & Financial Advisor, Dehradun",
  description:
    "Trusted LIC Insurance & Financial Advisor in Dehradun since 2007. Life, Health, Vehicle Insurance + SIP, ULIP, Pension Plans. Call 9759764093.",
  keywords: [
    "LIC agent Dehradun",
    "insurance advisor Uttarakhand",
    "Yogendra Panwar LIC",
    "bima salahkar Dehradun",
    "life insurance Dehradun",
    "health insurance Uttarakhand",
    "LIC premium calculator",
    "financial advisor Dehradun",
  ],
  openGraph: {
    title: "Yogendra Singh Panwar | LIC Agent & Financial Advisor, Dehradun",
    description:
      "Two Decades of Trust — Serving Thousands of Happy LIC Customers Since 2007",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${playfair.variable} ${baloo.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "OM Enterprises & Financial Solution",
              description:
                "Trusted LIC Insurance & Financial Advisory Services in Dehradun since 2007",
              url: "https://yogendrapanwar.com",
              telephone: ["+919759764093", "+919760848347"],
              email: "yogendrasingh748@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Maldevta",
                addressRegion: "Dehradun, Uttarakhand",
                addressCountry: "IN",
              },
              founder: {
                "@type": "Person",
                name: "Yogendra Singh Panwar",
                jobTitle: "Insurance & Financial Advisor",
              },
              foundingDate: "2007",
              areaServed: "Dehradun, Uttarakhand",
              serviceType: [
                "Life Insurance",
                "Health Insurance",
                "Vehicle Insurance",
                "Investment Planning",
                "Pension Plans",
                "Children's Future Planning",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
