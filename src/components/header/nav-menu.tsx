'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function NavMenu() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex ml-4">
      <nav className="flex items-center text-sm font-bold gap-1">
        <Link
          href="/"
          className={cn(
            'hover:bg-accent p-1.5 px-4 rounded-full border dark:border-zinc-800/50 border-zinc-800/20 text-foreground/90',
            pathname === '/'
              ? 'p-1.5 px-4 rounded-full border dark:border-zinc-800/50 border-zinc-800/20 text-foreground/90'
              : 'text-foreground/90'
          )}
        >
          <p>
            Explore
          </p>
        </Link>
      </nav>
    </div>
  );
}