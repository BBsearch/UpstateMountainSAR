import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.upstatemountainsar.org"),
  title: "Upstate Mountain SAR | Search & Rescue – SC Mountains",
  description:
    "Upstate Mountain SAR is a volunteer search and rescue team serving the South Carolina mountains. Ready to go anywhere, do anything, for anyone.",
  keywords:
    "search and rescue, SAR, South Carolina mountains, Table Rock, Pinnacle Mountain, volunteer rescue, SARTECH II, wilderness rescue, SC SAR team, preventative SAR",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Upstate Mountain SAR | Search & Rescue Team",
    description:
      "Volunteer SAR team in the SC mountains. SARTECH II, Wilderness First Aid, Ocean Rescue, SCUBA, Advanced Land Nav, and more.",
    url: "https://www.upstatemountainsar.org",
    siteName: "Upstate Mountain SAR",
    images: [{ url: "/images/logo.webp", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Upstate Mountain SAR | Search & Rescue Team",
    description:
      "Volunteer SAR team serving the SC mountains. Ready to go anywhere, do anything, for anyone.",
    images: ["/images/logo.webp"],
  },
  robots: { index: true, follow: true },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Upstate Mountain SAR",
  url: "https://www.upstatemountainsar.org",
  logo: "https://www.upstatemountainsar.org/images/logo.webp",
  description:
    "Volunteer search and rescue team serving the South Carolina mountains.",
  email: "info@upstatemountainsar.org",
  areaServed: "South Carolina",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
