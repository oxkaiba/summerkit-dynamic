"use client";
import Image from "next/image";

import * as React from "react";
import Link, { LinkProps } from "next/link";
import OnchainBalanceMobile from "@/components/hooks/read/useBalanceMobile";
import ConnectMobileWalletButton from "@/components/connectMobileButton";
import SummerKit from "@/public/SummerKit-Base.svg"
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

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="px-0 mr-2 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <div className="border border-zinc-800/50 p-1.5 rounded-full hover:bg-accent">
            <MenuIcon className="w-5 h-5" />
          </div>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className={`bg-card border-l border-zinc-800/50 rounded-l-3xl`}
      >
        <MobileLink
          href="/"
          className="flex items-center"
          onOpenChange={setOpen}
        >
          <Image src={SummerKit} alt='SummerKit' className='w-8' />
          <p className='text-xl font-semibold ml-1'>{siteConfig.title}</p>
        </MobileLink>
        <ScrollArea className="my-2">
          <div className="mb-1 flex justify-between items-center gap-1">
            <div className="w-full space-y-1">
              <ConnectMobileWalletButton />
              <OnchainBalanceMobile />
            </div>
          </div>
          <div className="space-y-1">
            <MobileLink
              href="/"
              className="flex items-center"
              onOpenChange={setOpen}>
              <Button className="p-1.5 border border-zinc-800/50 rounded-full hover:bg-accent bg-transparent text-foreground w-full">
                Explore
              </Button>
            </MobileLink>
            <MobileLink
              href={siteConfig.links.trade}
              className="flex items-center"
              onOpenChange={setOpen}>
              <Button className="p-1.5 border border-zinc-800/50 rounded-full hover:bg-accent bg-transparent text-foreground w-full">
                Trade
              </Button>
            </MobileLink>
            <MobileLink
              href={siteConfig.links.bridge}
              className="flex items-center"
              onOpenChange={setOpen}>
              <Button className="p-1.5 border border-zinc-800/50 rounded-full hover:bg-accent bg-transparent text-foreground w-full">
                Bridge
              </Button>
            </MobileLink>
          </div>
          <div className="flex gap-2 justify-center mt-2">
          <Link href={siteConfig.links.farcaster} target="_blank">
              <div className="p-1.5 border border-zinc-800/50 rounded-full hover:bg-accent">
                <SiFarcaster size={18} className='dark:text-zinc-300 dark:hover:text-zinc-100 text-zinc-900/90' />
              </div>
            </Link>
            <Link href={siteConfig.links.twitter} target="blank">
              <div className="p-1.5 border border-zinc-800/50 rounded-full hover:bg-accent">
                <PiXLogoFill size={18} />
              </div>
            </Link>
            <Link href={siteConfig.links.discord} target="blank">
              <div className="p-1.5 border border-zinc-800/50 rounded-full hover:bg-accent">
                <FaDiscord size={18} />
              </div>
            </Link>
            <Link href={siteConfig.links.telegram} target="blank">
              <div className="p-1.5 border border-zinc-800/50 rounded-full hover:bg-accent">
                <BiLogoTelegram size={18} />
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
