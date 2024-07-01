"use client";

import { useAccount, useBalance } from 'wagmi';
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Eth from "@/public/eth.svg";

export default function OnchainBalanceMobile() {
  const { address, isDisconnected } = useAccount();
  const { data } = useBalance({
    address: address,
  });

  let formattedBalance = "0";
  if (data) {
    const balance = Number(data.formatted);
    formattedBalance = balance < 0.0001 ? "0" : balance.toFixed(4);
  }

  if (isDisconnected) {
    return null;
  }

  return (
    <div className="bg-zinc-900 p-2.5 px-4 rounded-full text-sm font-medium flex justify-center">
      {formattedBalance} {data?.symbol}
      <Avatar className='w-5 h-5 ml-2 bg-soul-900 border border-zinc-800/50'>
        <AvatarImage src={Eth.src} />
      </Avatar>
    </div>
  );
}
