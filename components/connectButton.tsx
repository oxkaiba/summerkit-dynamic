"use client";

import { useDynamicContext, useIsLoggedIn } from "@dynamic-labs/sdk-react-core";
import { DynamicWidget } from "@dynamic-labs/sdk-react-core";

export default function CustomConnectButton() {
  const { setShowAuthFlow } = useDynamicContext();
  const isLoggedIn = useIsLoggedIn();

  return (
    isLoggedIn ? (
      <div className="border border-zinc-800/50 rounded-full">
        <DynamicWidget />
      </div>
    ) : (
      <button
        className="bg-zinc-900 hover:bg-zinc-800/80 p-2 px-4 rounded-full text-sm
        font-semibold transition-transform transform hover:scale-101 border border-zinc-800/50"
        onClick={() => setShowAuthFlow(true)}
      >
        Connect&nbsp;Wallet
      </button>
    )
  );
}
