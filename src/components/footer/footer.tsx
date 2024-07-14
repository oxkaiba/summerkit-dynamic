import Link from 'next/link';
import BlockNumber from "@/components/hooks/read/useBlockNumber";
import WETHPrice from '@/components/hooks/read/useWETHPrice';
import { FaDiscord } from "react-icons/fa";
import { PiXLogoFill } from "react-icons/pi";
import { BiLogoTelegram } from "react-icons/bi";
import { siteConfig } from '@/lib/site';
import { SiFarcaster } from "react-icons/si";

const Footer = () => {
  return (
    <div className='w-full border-t dark:border-zinc-800/50 border-zinc-800/20'>
      <footer className="w-full max-w-6xl mx-auto">
        <div className="flex justify-between items-center p-2.5 px-4">
          <div className='flex items-center gap-1'>
            <BlockNumber />
            <WETHPrice />
          </div>
          <div className="gap-1 hidden md:flex items-center">
            <Link href={siteConfig.links.farcaster} target="_blank">
              <div className="p-2 border dark:border-zinc-800/50 border-zinc-800/20 rounded-full hover:bg-accent">
                <SiFarcaster size={20} className='dark:text-zinc-100 dark:hover:text-zinc-300 text-zinc-900/95' />
              </div>
            </Link>
            <Link href={siteConfig.links.twitter} target="blank">
              <div className="p-2 border dark:border-zinc-800/50 border-zinc-800/20 rounded-full hover:bg-accent">
                <PiXLogoFill size={20} className='dark:text-zinc-100 dark:hover:text-zinc-300 text-zinc-900/95' />
              </div>
            </Link>
            <Link href={siteConfig.links.discord} target="blank">
              <div className="p-2 border dark:border-zinc-800/50 border-zinc-800/20 rounded-full hover:bg-accent">
                <FaDiscord size={20} className='dark:text-zinc-100 dark:hover:text-zinc-300 text-zinc-900/95' />
              </div>
            </Link>
            <Link href={siteConfig.links.telegram} target="blank">
              <div className="p-2 border dark:border-zinc-800/50 border-zinc-800/20 rounded-full hover:bg-accent">
                <BiLogoTelegram size={20} className='dark:text-zinc-100 dark:hover:text-zinc-300 text-zinc-900/95' />
              </div>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
