import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

export const metadata: Metadata = {
  title: siteConfig.metadata.title,
  description: siteConfig.metadata.description,
  metadataBase: new URL(siteConfig.metadata.siteUrl),
  openGraph: {
    title: siteConfig.metadata.title,
    description: siteConfig.metadata.description,
    url: siteConfig.metadata.siteUrl,
    siteName: siteConfig.brand.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.metadata.title,
    description: siteConfig.metadata.description,
    creator: siteConfig.metadata.twitterHandle,
  },
  icons: {
    icon: "https://goldlabel.pro/favicons/favicon_light.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Anti-FOUC inline script: default to light theme unless explicitly stored as dark */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.classList.add('dark');document.documentElement.style.colorScheme='dark';}else{document.documentElement.classList.remove('dark');document.documentElement.style.colorScheme='light';}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[#2c2c2a] dark:bg-[#364450] dark:text-white antialiased selection:bg-[#FFD849] selection:text-[#2c2c2a] font-sans transition-colors duration-200">
        <ThemeProvider>
          <Header />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
