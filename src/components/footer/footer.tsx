import Link from 'next/link';
import BlockNumber from "@/components/hooks/read/useBlockNumber";
import WETHPrice from '@/components/hooks/read/useWETHPrice';
import { FaDiscord } from "react-icons/fa";
import { PiXLogoFill } from "react-icons/pi";
import { BiLogoTelegram } from "react-icons/bi";
import { siteConfig } from '@/lib/site';
import { ModeToggle } from '../ui/mode-toggle';
import { SiFarcaster } from "react-icons/si";

const Footer = () => {
  return (
    <div className='w-full border-t border-zinc-800/50'>
      <footer className="w-full max-w-5xl mx-auto">
        <div className="flex justify-between items-center p-2.5">
          <div className='flex items-center gap-1'>
            <BlockNumber />
            <WETHPrice />
          </div>
          <div className="gap-1 hidden md:flex">
            <Link href={siteConfig.links.farcaster} target="_blank">
              <div className="p-1.5 border border-zinc-800/50 rounded-full hover:bg-accent">
                <SiFarcaster size={18} className='dark:text-zinc-300 dark:hover:text-zinc-100 text-zinc-900/90' />
              </div>
            </Link>
            <Link href={siteConfig.links.twitter} target="blank">
              <div className="p-1.5 border border-zinc-800/50 rounded-full hover:bg-accent">
                <PiXLogoFill size={18} className='dark:text-zinc-300 dark:hover:text-zinc-100 text-zinc-900/90' />
              </div>
            </Link>
            <Link href={siteConfig.links.discord} target="blank">
              <div className="p-1.5 border border-zinc-800/50 rounded-full hover:bg-accent">
                <FaDiscord size={18} className='dark:text-zinc-300 dark:hover:text-zinc-100 text-zinc-900/90' />
              </div>
            </Link>
            <Link href={siteConfig.links.telegram} target="blank">
              <div className="p-1.5 border border-zinc-800/50 rounded-full hover:bg-accent">
                <BiLogoTelegram size={18} className='dark:text-zinc-300 dark:hover:text-zinc-100 text-zinc-900/90' />
              </div>
            </Link>
            <ModeToggle />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
