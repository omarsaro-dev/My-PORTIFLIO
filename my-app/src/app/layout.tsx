import type { Metadata, Viewport } from "next";
import {
  Bebas_Neue,
  IBM_Plex_Mono,
  IBM_Plex_Sans_Arabic,
  Manrope,
} from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const fontDisplay = Bebas_Neue({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
});

const fontBody = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
});

const fontIbmMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-ibm-mono",
});

const fontArabic = IBM_Plex_Sans_Arabic({
  weight: ["400", "500"],
  subsets: ["arabic"],
  variable: "--font-arabic",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  applicationName: site.ogSiteName,
  generator: "Next.js",
  keywords: [
    "Omar Mohamed",
    "frontend developer",
    "AI automation",
    "web developer",
    "portfolio",
    "Egypt",
  ],
  authors: [{ name: site.name, url: site.linkedinUrl }],
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: site.title,
    description: site.ogDescription,
    url: site.url,
    siteName: site.ogSiteName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.ogDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: site.email,
  telephone: site.phoneTel,
  jobTitle: "Frontend Developer",
  worksFor: {
    "@type": "Organization",
    name: site.name,
  },
  knowsAbout: [
    "Frontend Development",
    "Web Development",
    "AI Automation",
    "User Experience",
  ],
  sameAs: [site.githubUrl, site.linkedinUrl],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${fontDisplay.variable} ${fontBody.variable} ${fontIbmMono.variable} ${fontArabic.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}