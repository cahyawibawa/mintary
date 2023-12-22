import Link from 'next/link';
import { MainNav } from './main-nav';
import { MobileNav } from './mobile-nav';
import { siteConfig } from '@/config/site';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
export default function SiteHeader() {
  return (
    <header className='z-50 top-0 w-full '>
      <div className='px-8 flex h-24 items-center'>
        <MainNav items={siteConfig.mainNav} />
        <MobileNav mainNavItems={siteConfig.mainNav} />
        <div className='flex flex-1 items-center justify-end space-x-4'>
          <nav className='flex items-center space-x-2'>
            <Link
              href='/signin'
              className={buttonVariants({
                className: 'text-primint',
                variant: 'ghost',
              })}
            >
              Sign In
              <span className='sr-only'>Sign In</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
