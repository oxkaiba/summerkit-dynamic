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
        <div className='flex items-center border border-zinc-800/50 p-2 px-2.5 rounded-full'>
          <span className="text-zinc-100 hover:text-zinc-300 font-semibold text-xs flex items-center">
            Loading...
            <Loader2 size={16} className="ml-2 animate-spin text-base-500" />
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
                <div className="flex items-center border border-zinc-800/50 p-2 px-2.5 text-zinc-100
                 hover:text-zinc-300 font-semibold text-xs rounded-full hover:bg-zinc-900">
                  {data.toString()}
                  <span className="bg-base-500 rounded-full ml-1.5 h-2 w-2 inline-block animate-pulse"></span>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className='bg-zinc-900/50 border-zinc-800/50 text-xxs font-medium ml-2 mb-4 rounded-full px-2.5'>
                The most recent block on Base.
              </HoverCardContent>
            </HoverCard>
          </Link>
        )
      )}
    </div>
  );
}
