import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { siteConfig } from "@/lib/site";
import Farcaster from "@/public/farcasterLogo.svg";
import FarcasterWhite from "@/public/farcasterLogo-white.svg";

export default function FarcasterLogo() {
  const { theme } = useTheme();
  // Determine which logo to use based on the theme
  const logoImage = theme === 'dark' ? FarcasterWhite : Farcaster;

  return (
    <Link href={siteConfig.links.farcaster} target="_blank">
      <div className="p-1.5 border border-zinc-800/50 rounded-full hover:bg-accent">
        <Image src={logoImage} width={18} alt="Farcaster Logo" />
      </div>
    </Link>
  );
}
