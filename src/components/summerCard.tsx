import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Summer from "@/public/skit.svg";
import { siteConfig } from "@/lib/site";
import Link from "next/link";
import CardImage from "@/public/summercard.png";
import { RefreshCcw } from "lucide-react";
import { RiGithubLine } from "react-icons/ri";
import { Badge } from "./ui/badge";

export function SummerCard() {
  return (
    <Card className="bg-card dark:border-zinc-800/50 border-zinc-800/20 w-10/12 md:w-2/3 max-w-lg mx-auto relative overflow-hidden">
      <div className="absolute inset-0 bg-no-repeat bg-right bg-cover opacity-25" style={{ backgroundImage: `url(${CardImage.src})` }}></div>
      <CardHeader className="grid items-start gap-4 space-y-0 relative z-10">
        <div className="space-y-1">
          <CardTitle className="flex items-center justify-between text-lg">
            <span className="flex">
              <p>SummerKit</p>
              <Image src={Summer} alt="Summer" width={22} height={22} className="ml-1.5 contrast-150" />
            </span>
            <span className="space-x-1 ml-1">
              <Link href="https://docs.dynamic.xyz/introduction/welcome" target="blank">
                <Badge className="bg-blue-500 hover:bg-blue-500/50 dark:text-zinc-100 text-zinc-800">
                  Dynamic
                </Badge>
              </Link>
              <Link href="https://wagmi.sh/react/getting-started" target="blank">
                <Badge className="dark:bg-zinc-800 hover:dark:bg-zinc-800/50 hover:bg-zinc-800/50 bg-zinc-400 dark:text-zinc-100 text-zinc-800">
                  Wagmi
                </Badge>
              </Link>
            </span>
          </CardTitle>
          <CardDescription className="text-xs text-foreground">
            Start by grabbing your Dynamic Environment Key and update it in app/layout.tsx.
            <br />
            To update all the links, edit lib/site.ts then begin editing the page by modifying app/page.tsx.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="relative z-10">
        <div className="flex justify-between items-center text-xxs text-muted-foreground">
          <div className="flex items-center text-foreground/90">
            <RefreshCcw className="mr-1 h-3 w-3 text-blue-500" />
            Updated on 14/07/24
          </div>
          <Link href={siteConfig.links.repo} target="blank" className="flex items-center bg-card/80 p-1 rounded-full">
            <Button variant="link" size="icon" className="gap-1">
              <p className="text-foreground text-xs">{siteConfig.version}</p>
              <RiGithubLine className="w-4 h-4 text-foreground" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
