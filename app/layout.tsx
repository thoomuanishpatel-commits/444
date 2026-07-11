import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { Loader } from "@/components/ui/Loader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "AARIVON — Premium Digital Agency | Web, App & AI Solutions",
    template: "%s | AARIVON",
  },
  description:
    "AARIVON is a world-class premium digital agency specializing in Website Development, Mobile Apps, UI/UX Design, SaaS, AI Solutions, and Business Automation. We build digital experiences that inspire.",
  keywords: [
    "premium digital agency",
    "web development",
    "mobile app development",
    "UI UX design",
    "SaaS development",
    "AI solutions",
    "business automation",
    "branding",
    "e-commerce",
    "cloud applications",
    "SEO",
    "digital marketing",
    "AI chatbots",
    "AARIVON",
  ],
  authors: [{ name: "AARIVON", url: "https://aarivon.com" }],
  creator: "AARIVON",
  publisher: "AARIVON",
  metadataBase: new URL("https://aarivon.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aarivon.com",
    title: "AARIVON — Premium Digital Agency | Web, App & AI Solutions",
    description:
      "World-class digital experiences crafted with precision. AARIVON builds premium websites, apps, and AI solutions for forward-thinking businesses.",
    siteName: "AARIVON",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AARIVON Premium Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AARIVON — Premium Digital Agency",
    description:
      "World-class digital experiences. We build premium websites, apps, and AI solutions.",
    images: ["/og-image.png"],
    creator: "@aarivon",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://aarivon.com",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://aarivon.com/#organization",
                  "name": "AARIVON",
                  "url": "https://aarivon.com",
                  "logo": "https://aarivon.com/logo.png",
                  "description": "Premium digital agency specializing in web development, mobile apps, UI/UX design, SaaS, AI solutions and business automation.",
                  "sameAs": [
                    "https://www.linkedin.com/company/aarivon",
                    "https://twitter.com/aarivon",
                    "https://instagram.com/aarivon"
                  ]
                },
                {
                  "@type": "LocalBusiness",
                  "name": "AARIVON",
                  "image": "https://aarivon.com/og-image.png",
                  "@id": "https://aarivon.com/#localbusiness",
                  "url": "https://aarivon.com",
                  "telephone": "+919876543210",
                  "priceRange": "$$$",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "India · Global Services",
                    "addressLocality": "Mumbai",
                    "addressRegion": "Maharashtra",
                    "postalCode": "400001",
                    "addressCountry": "IN"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "19.0760",
                    "longitude": "72.8777"
                  },
                  "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday"
                    ],
                    "opens": "09:00",
                    "closes": "18:00"
                  }
                }
              ]
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <Providers>
          <Loader />
          <CursorGlow />
          {children}
        </Providers>
      </body>
    </html>
  );
}
