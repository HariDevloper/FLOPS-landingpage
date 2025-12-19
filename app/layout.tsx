import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Orbitron } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CustomCursor } from "@/components/custom-cursor"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800", "900"],
})
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: {
    default: "FLOPS Technologies - Full Stack Development & Digital Solutions",
    template: "%s | FLOPS Technologies",
  },
  description:
    "FLOPS Technologies is an Indian-based tech company specializing in Data Analysis, Technical Documentation, Full Stack Web Development, and Digital Marketing. Founded by B.Tech AI&DS graduates.",
  keywords: [
    "FLOPS Technologies",
    "Full Stack Development India",
    "Data Analysis Services",
    "Technical Documentation",
    "Digital Marketing India",
    "AI and Data Science Solutions",
    "Web Development Company India",
    "B.Tech AI&DS Graduates",
  ],
  authors: [{ name: "FLOPS Technologies" }],
  creator: "FLOPS Technologies",
  publisher: "FLOPS Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://primespark.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "FLOPS Technologies - Full Stack Development & Digital Solutions",
    description:
      "Innovative digital solutions from India. Specializing in Data Analysis, Web Development, and Digital Marketing.",
    url: "https://primespark.in",
    siteName: "FLOPS Technologies",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "FLOPS Technologies Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FLOPS Technologies - Full Stack Development & Digital Solutions",
    description:
      "Innovative digital solutions from India. Specializing in Data Analysis, Web Development, and Digital Marketing.",
    images: ["/logo.png"],
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
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "48x48", type: "image/png" },
      { url: "/logo.png", sizes: "96x96", type: "image/png" },
      { url: "/logo.png", sizes: "144x144", type: "image/png" },
      { url: "/logo.png", sizes: "192x192", type: "image/png" },
      { url: "/logo.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/logo.png",
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/logo.png",
      },
    ],
  },
  manifest: "/manifest.json",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${montserrat.variable} ${orbitron.variable} font-sans antialiased uppercase`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "FLOPS Technologies",
              url: "https://primespark.in",
              logo: "https://primespark.in/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-6385420576",
                contactType: "customer service",
                email: "primespark.pvt@gmail.com",
                areaServed: "Worldwide",
                availableLanguage: ["en", "Hindi"],
              },
              sameAs: [
                "https://www.linkedin.com/company/flops-technologies",
                // Add other social links here
              ],
            }),
          }}
        />
        <CustomCursor />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
