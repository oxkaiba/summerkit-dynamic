"use client";

import { useDynamicContext, useIsLoggedIn } from "@dynamic-labs/sdk-react-core";
import { DynamicWidget } from "@dynamic-labs/sdk-react-core";

export default function CustomConnectButton() {
  const { setShowAuthFlow } = useDynamicContext();
  const isLoggedIn = useIsLoggedIn();

  return (
    isLoggedIn ? (
      <DynamicWidget />
    ) : (
      <button
        className="bg-transparent border dark:border-zinc-800/50 border-zinc-800/20 hover:bg-accent p-2 px-4 rounded-full text-sm
        font-semibold"
        onClick={() => setShowAuthFlow(true)}
      >
        Connect&nbsp;Wallet
      </button>
    )
  );
}
