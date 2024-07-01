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
    <Card className="mt-4 md:mt-12 bg-zinc-900 border-zinc-800/50 rounded-3xl max-w-2xl shadow-2xl shadow-base-550/5">
      <CardHeader>
        <CardTitle className="flex justify-between">
          <span className="flex items-center">
            <Image src={SummerKit} alt='SummerKit' className='w-8' />
            <p className="ml-1">SummerKit</p>
          </span>
          <Link href={siteConfig.links.repo} target="blank">
            <Badge className="hover:bg-zinc-800 p-2 px-2.5"><FaGithub /><p className="ml-1">
              {siteConfig.version}
            </p>

            </Badge>
          </Link>
        </CardTitle>
        <CardDescription className="text-xs font-semibold text-center">
          The SummerKit to easily get started building the Onchain Summer on Base
          <div className="mt-2 space-x-1 space-y-1 items-center justify-center">
            <Badge className="bg-zinc-300/20 hover:bg-zinc-300/10">Next.js</Badge>
            <Badge className="bg-gray-500/20 hover:bg-gray-500/10">Dynamic</Badge>
            <Badge className="bg-emerald-200/20 hover:bg-emerald-200/10">Wagmi</Badge>
            <Badge className="bg-sky-200/20 hover:bg-sky-200/10">Shadcn</Badge>
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
          <code className="bg-zinc-800/50 border-zinc-600/50 border p-0.5 rounded-full px-2 mx-1">
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
          <code className="bg-zinc-800/50 border-zinc-600/50 border p-0.5 rounded-full px-2 mx-1">
            lib/site.ts
          </code>
          then begin editing the page by modifying
          <code className="bg-zinc-800/50 border-zinc-600/50 border p-0.5 rounded-full px-2 mx-1">
            app/page.tsx
          </code>
        </p>
      </CardContent>
      <div className="border-t border-zinc-800/50 -mt-2">
        <p className="text-xs font-semibold flex items-center justify-center text-center mb-2 mt-4">
          More about Dynamic and Wagmi hooks can be found below.
        </p>
        <div className="flex justify-center gap-1 mb-4">
          <Badge className="hover:bg-zinc-800/50"><Link href="https://docs.dynamic.xyz/introduction/welcome" target="blank">docs.dynamic.xyz</Link></Badge>
          <Badge className="hover:bg-zinc-800/50"><Link href="https://wagmi.sh/react/getting-started" target="blank">wagmi.sh</Link></Badge>
        </div>
      </div>
    </Card>
  );
}
