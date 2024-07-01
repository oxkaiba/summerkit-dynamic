import Image from 'next/image';
import Link from 'next/link';
import BlockNumber from "@/components/hooks/read/useBlockNumber";
import WETHPrice from '@/components/hooks/read/useWETHprice';
import Farcaster from "@/public/farcasterLogo.svg";
import { FaDiscord } from "react-icons/fa";
import { PiXLogoFill } from "react-icons/pi";
import { BiLogoTelegram } from "react-icons/bi";
import { siteConfig } from '@/lib/site';

const Footer = () => {
  return (
    <div className='w-full border-t border-zinc-800/50 rounded-2xl md:rounded-none'>
      <footer className="w-full max-w-5xl mx-auto">
        <div className="flex justify-between items-center p-2.5">
          <div className='flex items-center gap-1'>
            <BlockNumber />
            <WETHPrice />
          </div>
          <div className="gap-1 hidden md:flex">
            <Link href={siteConfig.links.farcaster} target="blank">
              <div className="p-1 border border-zinc-800/50 rounded-full hover:bg-zinc-900">
                <Image src={Farcaster} width={18} alt="Farcaster" />
              </div>
            </Link>
            <Link href={siteConfig.links.twitter} target="blank">
              <div className="p-1 border border-zinc-800/50 rounded-full hover:bg-zinc-900">
                <PiXLogoFill size={18} />
              </div>
            </Link>
            <Link href={siteConfig.links.discord} target="blank">
              <div className="p-1 border border-zinc-800/50 rounded-full hover:bg-zinc-900">
                <FaDiscord size={18} />
              </div>
            </Link>
            <Link href={siteConfig.links.telegram} target="blank">
              <div className="p-1 border border-zinc-800/50 rounded-full hover:bg-zinc-900">
                <BiLogoTelegram size={18} />
              </div>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
