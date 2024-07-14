"use client";

import React, { useCallback, useEffect, useState } from 'react';
import { CoinbaseWalletSDK } from '@coinbase/wallet-sdk';
import { useAccount } from 'wagmi';
import { RiStopCircleFill } from "react-icons/ri";
import { CircleCheck } from 'lucide-react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Badge } from './ui/badge';
import Image from 'next/image';
import CoinbaseWallet from "@/public/base-brand-kit/symbol/Smart-Wallet-Logo.png"
import { siteConfig } from '@/lib/site';
import { Button } from './ui/button';

const formatAddress = (address: string) => {
  return `${address.slice(0, 4)}...${address.slice(-4)}`;
};

let sdk: CoinbaseWalletSDK | null = null;

if (typeof window !== 'undefined') {
  sdk = new CoinbaseWalletSDK({
    appName: 'SummerKit',
    appLogoUrl: siteConfig.logo,
    appChainIds: [8453, 84532],
  });
}

export function CustomCreateWalletMobileButton() {
  const [provider, setProvider] = useState<ReturnType<CoinbaseWalletSDK['makeWeb3Provider']> | null>(null);
  const { isDisconnected } = useAccount();
  const [hasWallet, setHasWallet] = useState<boolean>(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  useEffect(() => {
    if (sdk) {
      setProvider(sdk.makeWeb3Provider());
    }
  }, []);

  useEffect(() => {
    async function checkWallet() {
      if (!provider) return;

      try {
        const accounts = await provider.request({
          method: 'eth_accounts',
        }) as string[];

        if (accounts.length > 0) {
          setHasWallet(true);
          setWalletAddress(accounts[0]);
        }
      } catch (error) {
        console.error('Failed to check wallet:', error);
      }
    }

    checkWallet();
  }, [provider]);

  const createWallet = useCallback(async () => {
    if (!provider) {
      console.error('Provider is not initialized');
      return;
    }

    try {
      const accounts = await provider.request({
        method: 'eth_requestAccounts',
      }) as string[];
      const address = accounts[0];
      console.log('Wallet created with address:', address);
      setHasWallet(true);
      setWalletAddress(address);
    } catch (error) {
      console.error('Failed to create wallet:', error);
    }
  }, [provider]);

  if (!provider) {
    return null;
  }

  if (!isDisconnected) {
    return null;
  }

  if (hasWallet) {
    return (
      <HoverCard>
        <HoverCardTrigger>
          <Button
            className="flex items-center bg-transparent border dark:border-zinc-800/50 border-zinc-800/20 hover:bg-accent px-4 rounded-full text-sm font-semibold"
          >
            <RiStopCircleFill size={18} className='dark:text-zinc-300 text-zinc-900/80' />&nbsp;
            <p className='dark:text-zinc-300/70 text-zinc-900/80 text-xxs'>/</p>&nbsp;
            <CircleCheck size={18} className='dark:text-blue-500 text-blue-500' />
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className='bg-card dark:border-zinc-800/50 border-zinc-800/20 text-xs font-medium rounded-2xl px-4'>
          <div className='flex items-center'>
            <p>Smart Wallet found </p>
            <Badge className='text-foreground text-xs dark:bg-zinc-800/80 bg-zinc-800/20 ml-1 font-normal px-1.5'>
              <p className='mt-0.5'>{formatAddress(walletAddress!)}</p>
              <Image src={CoinbaseWallet} alt='Coinbase' width={18} className='ml-0.5' />
            </Badge>
          </div>
          <p className='mt-0.5'>connect it using the connect button.</p>
        </HoverCardContent>
      </HoverCard>
    );
  }

  return (
    <button
      className='flex animate-background-shine items-center justify-center rounded-full 
    border dark:border-zinc-800/50 border-zinc-800/20 dark:bg-[linear-gradient(110deg,#1a1a1a,45%,#505050,55%,#1a1a1a)] bg-[linear-gradient(110deg,#f4f4f5,45%,#0053FE2b,55%,#f4f4f5)] bg-[length:200%_100%] 
    p-1 md:p-2 md:px-4 px-4 dark:hover:bg-[linear-gradient(110deg,#1a1a1a,45%,#323232,55%,#1a1a1a)] transition-all'
      onClick={createWallet}
    >
      <RiStopCircleFill size={18} className='text-foreground/90' />
      <p className='text-sm font-medium ml-1.5 pr-1.5'>Create&nbsp;Wallet</p>
    </button>
  );
}
