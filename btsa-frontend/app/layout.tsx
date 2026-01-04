import type { Metadata } from "next";
import { Montserrat, Open_Sans, Dancing_Script } from "next/font/google";
import "./globals.css";

// BTSA Brand Fonts
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Build To Shelter Africa | Building Homes, Empowering Communities, Protecting the Planet",
    template: "%s | Build To Shelter Africa",
  },
  description:
    "Build To Shelter Africa (BTSA) is an SDG-aligned NGO uniting professionals across the continent to address housing poverty, youth empowerment, and environmental sustainability through sustainable construction and skills training.",
  keywords: [
    "Build To Shelter Africa",
    "BTSA",
    "affordable housing Africa",
    "youth empowerment",
    "sustainable construction",
    "hydrofoam bricks",
    "Liberia housing",
    "African NGO",
    "environmental sustainability",
    "SDG goals",
    "sustainable development",
    "SDG-aligned NGO",
  ],
  authors: [{ name: "Build To Shelter Africa" }],
  creator: "Build To Shelter Africa",
  publisher: "Build To Shelter Africa",
  metadataBase: new URL("https://buildtoshelterafrica.org"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://buildtoshelterafrica.org",
    siteName: "Build To Shelter Africa",
    title: "Build To Shelter Africa | Building Homes, Empowering Communities, Protecting the Planet",
    description:
      "SDG-aligned NGO addressing housing poverty, youth empowerment, and environmental sustainability through sustainable construction and skills training.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Build To Shelter Africa - Empowering Communities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Build To Shelter Africa",
    description:
      "Building Homes, Empowering Communities, Protecting the Planet across Africa",
    images: ["/og-image.jpg"],
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
  verification: {
    // Add Google Search Console verification when available
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#8B4513" />
      </head>
      <body
        className={`${montserrat.variable} ${openSans.variable} ${dancingScript.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
