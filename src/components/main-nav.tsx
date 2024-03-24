'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function MainNav(): JSX.Element | null {
  const pathname = usePathname();

  return (
    <nav className='flex h-16 items-center gap-x-6 border-b px-4 font-medium'>
      <Link
        className={cn(
          'hover:text-foreground/80',
          pathname.startsWith('/appointments')
            ? 'text-accent-foreground'
            : 'text-muted-foreground',
        )}
        href='/appointments'
      >
        Appointments
      </Link>
      <Link
        className={cn(
          'hover:text-foreground/80',
          pathname.startsWith('/visitors')
            ? 'text-accent-foreground'
            : 'text-muted-foreground',
        )}
        href='/visitors'
      >
        Visitors
      </Link>
      <Link
        className={cn(
          'hover:text-foreground/80',
          pathname.startsWith('/settings')
            ? 'text-accent-foreground'
            : 'text-muted-foreground',
        )}
        href='/settings'
      >
        Settings
      </Link>
    </nav>
  );
}
