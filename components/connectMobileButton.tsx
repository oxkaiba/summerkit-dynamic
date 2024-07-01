"use client"

import { useDynamicContext, useIsLoggedIn } from "@dynamic-labs/sdk-react-core";
import { DynamicWidget } from "@dynamic-labs/sdk-react-core";

export default function ConnectMobileWalletButton() {
  const { setShowAuthFlow } = useDynamicContext();
  const isLoggedIn = useIsLoggedIn();

  return (
    isLoggedIn ? (
      <div className="bg-zinc-900 rounded-full flex justify-center items-center">
        <DynamicWidget />
      </div>
    ) : (
      <div onClick={() => setShowAuthFlow(true)} className="bg-zinc-900 p-2.5 rounded-full text-sm font-semibold flex justify-center items-center
     hover:bg-zinc-800/80 hover:cursor-pointer">
        <div className='flex items-center'>
          <p>Connect&nbsp;Wallet</p>
        </div>
      </div>
    )
  );
}
