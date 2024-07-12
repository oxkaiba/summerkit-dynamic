"use client";

import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import { Providers } from "./providers";
import { GeistSans } from 'geist/font/sans';
import { ThemeProvider, useTheme } from "next-themes";
import { useEffect, useState } from "react";

function AppLayout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState('light');

  useEffect(() => {
    if (theme) {
      setCurrentTheme(theme);
    }
  }, [theme]);

  return (
    <DynamicContextProvider
      theme={currentTheme === 'dark' ? 'dark' : 'light'}
      settings={{
        environmentId: "cefeb691-0523-41e8-8945-f1913da0df3c",
        walletConnectors: [EthereumWalletConnectors],
        recommendedWallets: [{ walletKey: "coinbase" }],
      }}
    >
      <Providers>
        <DynamicWagmiConnector>
          <div className="flex justify-center items-center">
            <Header />
          </div>
          <main className="flex-grow">{children}</main>
          <Footer />
        </DynamicWagmiConnector>
      </Providers>
    </DynamicContextProvider>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
        <body className={`${GeistSans.className} min-h-screen flex flex-col antialiased bg-background`}>
          <AppLayout>{children}</AppLayout>
        </body>
      </ThemeProvider>
    </html>
  );
}
