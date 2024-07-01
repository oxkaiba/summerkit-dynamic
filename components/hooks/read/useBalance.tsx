"use client";

import { useAccount, useBalance } from 'wagmi';
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { CircleAlert, Loader2, Wallet } from "lucide-react";
import Eth from "@/public/eth.svg";

export default function OnchainBalance() {
  const { address, isConnecting, isDisconnected } = useAccount();
  const { data, isError, isLoading } = useBalance({
    address: address,
  });

  if (isConnecting) return <div className="bg-zinc-900 p-2 px-4 rounded-full text-sm font-semibold flex justify-center border border-zinc-800/50 items-center">
    Connecting… <Loader2 className="ml-2 h-4 w-4 animate-spin text-base-500" />
  </div>;
  if (isDisconnected) return <div className="bg-zinc-900 px-4 rounded-full text-sm font-semibold flex justify-center items-center border border-zinc-800/50">
    No&nbsp;account&nbsp;connected <Wallet size={18} className='ml-2 text-base-500' />
  </div>;
  if (isLoading) return <div className="bg-zinc-900 p-2 px-4 rounded-full text-sm font-semibold flex justify-center border border-zinc-800/50 items-center">
    Fetching balance… <Loader2 className="ml-2 h-4 w-4 animate-spin text-base-500" /></div>;
  if (isError) return <div className="bg-zinc-900 p-2 px-4 rounded-full text-sm font-semibold flex justify-center border border-zinc-800/50 items-center">
    Error fetching balance <CircleAlert size={20} className='ml-2 text-base-500' />
  </div>;

  let formattedBalance = "0";
  if (data) {
    const balance = Number(data.formatted);
    formattedBalance = balance < 0.0001 ? "0" : balance.toFixed(4);
  }

  return (
    <div className="bg-zinc-900 p-2 px-4 rounded-full text-sm font-semibold flex justify-center border border-zinc-800/50 items-center">
      {formattedBalance}&nbsp;{data?.symbol} <Avatar className='w-5 h-5 ml-2 bg-soul-900 border border-zinc-800/50 hidden md:flex'>
        <AvatarImage src={Eth.src} />
      </Avatar>
    </div>
  );
}
