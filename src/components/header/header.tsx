import Image from 'next/image';
import CustomConnectButton from '../connectButton';
import Summer from "@/public/skit.svg";
import BaseSymbol from "@/public/base-brand-kit/wordmark/Base_Wordmark_Blue.svg";
import OnchainBalance from '@/components/hooks/read/useBalance';
import { NavMenu } from './nav-menu';
import { MobileNav } from './mobile-menu';
import { CustomCreateWalletButton } from '../customCreateWalletButton';

const Header = () => {
  return (
    <div className='w-full border-b dark:border-zinc-800/50 border-zinc-800/20'>
      <header className="sticky top-0 z-50 w-full max-w-screen-lg mx-auto">
        <nav className="mx-auto flex justify-between items-center p-1.5">
          <div className="flex items-center gap-1 ml-1.5">
            <Image src={Summer} alt="Summer" width={38} height={38} className=' contrast-150' />
            <div className="flex flex-col text-foreground/95">
              <span className="leading-1 text-xl onchainsummer-font">SuMmer Kit</span>
              <span className="items-center text-xxs font-semibold flex -mt-2 leading-3">
              Boilerplate & Tools on
                <Image src={BaseSymbol} alt="Base" width={48} className='ml-1' />
              </span>
            </div>
            <NavMenu />
          </div>
          <div className="flex">
            <div className="hidden md:flex space-x-1 pr-2">
              <OnchainBalance />
              <CustomCreateWalletButton />
              <CustomConnectButton />
            </div>
            <div className="flex md:hidden">
              <MobileNav />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;