'use client';

import React from 'react';
import Link from 'next/link';
import { useBlockNumber } from 'wagmi';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Loader2 } from 'lucide-react';


export default function BlockNumber() {
  const { data, isLoading } = useBlockNumber({
    chainId: 8453,
    watch: true,
  });
  //@ts-ignore
  const getLinkUrl = (blockNumber) =>
    `https://basescan.org/block/${blockNumber}`;

  return (
    <div className="flex items-center">
      {isLoading ? (
        <div className='flex items-center border dark:border-zinc-800/50 border-zinc-800/20 p-2 px-3 rounded-full'>
          <span className="text-foreground font-semibold text-sm flex items-center">
            Loading...
            <Loader2 size={14} className="ml-2 animate-spin text-foreground/80" />
          </span>

        </div>
      ) : (
        data !== undefined && (
          <Link
            className="flex items-center"
            href={getLinkUrl(data)}
            passHref
            target="_blank"
          >
            <HoverCard>
              <HoverCardTrigger>
                <div className="flex items-center border dark:border-zinc-800/50 border-zinc-800/20 p-2 px-3 text-foreground
                 font-semibold text-sm rounded-full hover:bg-accent">
                  {data.toString()}
                  <span className="bg-blue-500 rounded-full ml-1.5 h-2.5 w-2.5 inline-block animate-pulse"></span>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className='bg-card dark:border-zinc-800/50 border-zinc-800/20 text-sm ml-4 mb-6 rounded-full px-4'>
                The most recent block on Base.
              </HoverCardContent>
            </HoverCard>
          </Link>
        )
      )}
    </div>
  );
}
