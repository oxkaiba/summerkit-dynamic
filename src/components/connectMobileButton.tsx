"use client"

import { useDynamicContext, useIsLoggedIn } from "@dynamic-labs/sdk-react-core";
import { DynamicWidget } from "@dynamic-labs/sdk-react-core";
import { Button } from "./ui/button";

export default function ConnectMobileWalletButton() {
  const { setShowAuthFlow } = useDynamicContext();
  const isLoggedIn = useIsLoggedIn();

  return (
    isLoggedIn ? (
      <div className="flex justify-center items-center">
        <DynamicWidget />
      </div>
    ) : (
      <Button onClick={() => setShowAuthFlow(true)} className="p-1.5 border border-zinc-800/50 rounded-full hover:bg-accent bg-transparent text-foreground w-full">
        <div className='flex items-center'>
          <p>Connect&nbsp;Wallet</p>
        </div>
      </Button>
    )
  );
}
