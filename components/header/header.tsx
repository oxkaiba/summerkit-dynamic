import Image from 'next/image';
import CustomConnectButton from '../connectButton';
import Summer from "@/public/SummerKit-Base.svg";
import OnchainBalance from '@/components/hooks/read/useBalance';
import { NavMenu } from './nav-menu';
import { MobileNav } from './mobile-menu';

const Header = () => {
  return (
    <div className='w-full border-b border-zinc-800/50'>
      <header className="sticky top-0 z-50 w-full max-w-screen-lg mx-auto">
        <nav className="mx-auto flex justify-between items-center p-1.5">
          <div className="flex items-center gap-2 ml-1.5">
            <Image src={Summer} alt="Summer" width={38} height={38} />
            <div className="flex flex-col">
              <span className="font-bold leading-tight text-lg">SummerKit</span>
              <span className="items-center text-xs font-semibold flex -mt-0.5">
                Kit of 🛠️ on Base
              </span>
            </div>
            <NavMenu />
          </div>
          <div className="flex">
            <div className="hidden md:flex space-x-1 pr-2">
              <OnchainBalance />
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