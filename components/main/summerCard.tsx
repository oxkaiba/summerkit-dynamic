import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import SummerKit from "@/public/SummerKit-Base.svg";
import { siteConfig } from "@/lib/site";
import { FaGithub } from "react-icons/fa";

export default function SummerCard() {
  return (
    <Card className="mt-4 md:mt-12 border-zinc-800/50 rounded-2xl max-w-2xl shadow-2xl dark:shadow-white/5 shadow-blue-500/75 bg-card">
      <CardHeader>
        <CardTitle className="flex justify-between">
          <span className="flex items-center">
            <Image src={SummerKit} alt='SummerKit' className='w-8' />
            <p className="ml-1">SummerKit</p>
          </span>
          <Link href={siteConfig.links.repo} target="blank">
            <Badge className="p-2 px-2.5 text-foreground border dark:border-foreground/5 border-foreground/40 hover:bg-accent bg-card"><FaGithub /><p className="ml-1">
              {siteConfig.version}
            </p>
            </Badge>
          </Link>
        </CardTitle>
        <CardDescription className="text-xs font-semibold text-center text-foreground">
          The SummerKit to easily get started building the Onchain Summer on Base
          <div className="mt-2 space-x-1 space-y-1 items-center justify-center italic">
            <Badge>Next.js</Badge>
            <Badge>Dynamic</Badge>
            <Badge>Wagmi</Badge>
            <Badge>Shadcn</Badge>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="-mt-2 border-t border-zinc-800/50">
        <p className="text-sm font-medium leading-6 text-center mt-2">
          Start by grabbing your Dynamic
          <Link
            href="https://app.dynamic.xyz/dashboard/developer/api"
            target="_blank"
            className="underline mx-1 text-base-500 hover:text-base-500/70"
          >
            Environment Key
          </Link>
          and update it in
          <code className="bg-zinc-800/20 border-zinc-600/50 border p-0.5 rounded-full px-2 mx-1 italic">
            app/layout.tsx
          </code>
          , customize the Wallet UI at
          <Link
            href="https://app.dynamic.xyz/dashboard/design"
            target="_blank"
            className="underline mx-1 text-base-500 hover:text-base-500/70"
          >
            Dynamic
          </Link>
          and your changes will be applied automatically.
        </p>
        <p className="text-sm font-medium leading-7 text-center">
          To update most of the links, edit
          <code className="bg-zinc-800/20 border-zinc-600/50 border p-0.5 rounded-full px-2 mx-1 italic">
            lib/site.ts
          </code>
          then begin editing the page by modifying
          <code className="bg-zinc-800/20 border-zinc-600/50 border p-0.5 rounded-full px-2 mx-1 italic">
            app/page.tsx
          </code>
        </p>
      </CardContent>
      <div className="border-t border-zinc-800/50 -mt-2">
        <p className="text-xs font-semibold flex items-center justify-center text-center mb-2 mt-4">
          More about Dynamic and Wagmi hooks can be found below.
        </p>
        <div className="flex justify-center gap-1 mb-4">
          <Badge><Link href="https://docs.dynamic.xyz/introduction/welcome" target="blank">docs.dynamic.xyz</Link></Badge>
          <Badge><Link href="https://wagmi.sh/react/getting-started" target="blank">wagmi.sh</Link></Badge>
        </div>
      </div>
    </Card>
  );
}
