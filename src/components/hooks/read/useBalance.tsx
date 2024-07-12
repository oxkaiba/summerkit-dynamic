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

  if (isConnecting) return <div className="text-xxs font-semibold flex justify-center items-center">
    Connecting… <Loader2 size={12} className="ml-2 animate-spin text-foreground/80" />
  </div>;
  if (isDisconnected) return null;
  if (isLoading) return <div className="text-xxs font-semibold flex justify-center items-center">
    Fetching balance… <Loader2 size={12} className="ml-2 animate-spin text-foreground/80" /></div>;
  if (isError) return <div className="text-xxs font-semibold flex justify-center items-center">
    Error fetching balance <CircleAlert size={20} className='ml-2 text-base-500' />
  </div>;

  let formattedBalance = "0";
  if (data) {
    const balance = Number(data.formatted);
    formattedBalance = balance < 0.0001 ? "0" : balance.toFixed(4);
  }

  return (
    <div className="text-xs font-semibold flex justify-center items-center px-2 mt-0.25">
      {formattedBalance}&nbsp;{data?.symbol} <Avatar className='w-4 h-4 ml-1 hidden md:flex'>
        <AvatarImage src={Eth.src} />
      </Avatar>
    </div>
  );
}
