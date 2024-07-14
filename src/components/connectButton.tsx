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
        className="bg-accent border dark:border-zinc-800/50 border-zinc-800/20 hover:bg-card p-2 px-4 rounded-full text-md font-medium"
        onClick={() => setShowAuthFlow(true)}
      >
        Connect&nbsp;Wallet
      </button>
    )
  );
}
