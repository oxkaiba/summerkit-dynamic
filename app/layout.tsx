import "./globals.css";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site"
import { Inter } from "next/font/google";
import {
  DynamicContextProvider,
  EthereumWalletConnectors,
  DynamicWagmiConnector,
} from "@/lib/dynamic";
import { Providers } from "./providers";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  authors: [
    {
      name: siteConfig.title,
      url: siteConfig.url,
    },
  ],
  creator: "SummerKit",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterUsername,
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <DynamicContextProvider
        settings={{
          environmentId: "cefeb691-0523-41e8-8945-f1913da0df3c",
          walletConnectors: [EthereumWalletConnectors],
          recommendedWallets: [{ walletKey: "coinbase" }],
        }}
      >
        <Providers>
          <DynamicWagmiConnector>
            <body className={`${inter.className} bg-soul-950 min-h-screen flex flex-col antialiased`}>
              <div className="flex justify-center items-center">
                <Header />
              </div>
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </body>
          </DynamicWagmiConnector>
        </Providers>
      </DynamicContextProvider>
    </html>
  );
}
