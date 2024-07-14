"use client";
import Image from "next/image";
import * as React from "react";
import Link, { LinkProps } from "next/link";
import OnchainBalanceMobile from "@/components/hooks/read/useBalanceMobile";
import ConnectMobileWalletButton from "@/components/connectMobileButton";
import SummerKit from "@/public/skit.svg"
import { SiFarcaster } from "react-icons/si";
import { useRouter } from "next/navigation";
import { MenuIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FaDiscord } from "react-icons/fa";
import { PiXLogoFill } from "react-icons/pi";
import { BiLogoTelegram } from "react-icons/bi";
import { siteConfig } from '@/lib/site';
import { ModeToggle } from "../ui/mode-toggle";
import { CustomCreateWalletMobileButton } from "../customCreateWalletMobileButton";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="px-0 mr-2 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <div className="border dark:border-zinc-800/50 border-zinc-800/30 p-1.5 rounded-full hover:bg-accent">
            <MenuIcon className="w-5 h-5 dark:text-zinc-700/50 text-zinc-800/80" />
          </div>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className={`bg-card border-l dark:border-zinc-800/50 border-zinc-800/20 rounded-l-3xl`}
      >
        <div className="flex items-center gap-1">
          <Image src={SummerKit} alt="Summer" className='w-8 contrast-150' />
          <span className="text-2xl onchainsummer-font mt-1.5 text-foreground/90">SuMmer Kit</span>
        </div>
        <ScrollArea className="my-2">
          <div className="mb-1 flex justify-between items-center gap-1">
            <div className="w-full space-y-1 mt-4">
              <span className="flex space-x-1 justify-center">
                <CustomCreateWalletMobileButton />
                <ConnectMobileWalletButton />
              </span>
              <OnchainBalanceMobile />
            </div>
          </div>
          <div className="space-y-1">
            <MobileLink
              href="/"
              className="flex items-center"
              onOpenChange={setOpen}>
              <Button className="p-1.5 border dark:border-zinc-800/50 border-zinc-800/20 rounded-full hover:bg-accent bg-transparent text-foreground w-full">
                Explore
              </Button>
            </MobileLink>
            <MobileLink
              href={siteConfig.links.trade}
              className="flex items-center"
              onOpenChange={setOpen}>
              <Button className="p-1.5 border dark:border-zinc-800/50 border-zinc-800/20 rounded-full hover:bg-accent bg-transparent text-foreground w-full">
                Trade
              </Button>
            </MobileLink>
            <MobileLink
              href={siteConfig.links.bridge}
              className="flex items-center"
              onOpenChange={setOpen}>
              <Button className="p-1.5 border dark:border-zinc-800/50 border-zinc-800/20 rounded-full hover:bg-accent bg-transparent text-foreground w-full">
                Bridge
              </Button>
            </MobileLink>
          </div>
          <div className="flex items-center gap-1.5 justify-center mt-2">
            <Link href={siteConfig.links.farcaster} target="_blank">
              <div className="p-2 border dark:border-zinc-800/50 border-zinc-800/20 rounded-full hover:bg-accent">
                <SiFarcaster size={18} className='text-zinc-900/95 dark:text-zinc-100 dark:hover:text-zinc-300' />
              </div>
            </Link>
            <Link href={siteConfig.links.twitter} target="blank">
              <div className="p-2 border dark:border-zinc-800/50 border-zinc-800/20 rounded-full hover:bg-accent">
                <PiXLogoFill size={18} className="text-zinc-900/95 dark:text-zinc-100 dark:hover:text-zinc-300" />
              </div>
            </Link>
            <Link href={siteConfig.links.discord} target="blank">
              <div className="p-2 border dark:border-zinc-800/50 border-zinc-800/20 rounded-full hover:bg-accent">
                <FaDiscord size={18} className="text-zinc-900/95 dark:text-zinc-100 dark:hover:text-zinc-300" />
              </div>
            </Link>
            <Link href={siteConfig.links.telegram} target="blank">
              <div className="p-2 border dark:border-zinc-800/50 border-zinc-800/20 rounded-full hover:bg-accent">
                <BiLogoTelegram size={18} className="text-zinc-900/95 dark:text-zinc-100 dark:hover:text-zinc-300" />
              </div>
            </Link>
            <ModeToggle />
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
