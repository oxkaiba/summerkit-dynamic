import PcLogoSummer from "@/components/pcLogoSummer";
import { SummerCard } from "@/components/summerCard";
import { siteConfig } from "@/lib/site";

// We export the metadata here because we are using "use client" on layout.tsx
export const metadata = {
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
};

const Home = () => (
  <>
    <main className="flex flex-col items-center justify-center">
      <div className="w-full flex justify-center p-4">
        <PcLogoSummer />
      </div>
      <div className="w-full flex-col justify-center space-y-4 mt-auto pb-20">
        <SummerCard />
      </div>
    </main>
  </>
);

export default Home;



