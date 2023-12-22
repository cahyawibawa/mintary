'use client';

import * as React from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import type { MainNavItem, SidebarNavItem } from '@/types';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Icons } from '@/components/icons';

interface MobileNavProps {
  mainNavItems?: MainNavItem[];
}

export function MobileNav({ mainNavItems }: MobileNavProps) {
  const segment = useSelectedLayoutSegment();
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = React.useMemo(() => {
    const items = mainNavItems ?? [];
    // const myAccountItem = {
    //   title: 'My Account',
    // };
    // const myAccountIndex = items.findIndex(
    //   (item) => item.title === 'My Account'
    // );
    // if (myAccountIndex !== -1) {
    //   items.splice(myAccountIndex, 1);
    // }
    // items.splice(1, 0, myAccountItem);
    return items;
  }, [mainNavItems]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant='ghost'
          className='mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden'
        >
          <HamburgerMenuIcon className='h-6 w-6' aria-hidden='true' />
          <span className='sr-only'>Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='pl-1 pr-0'>
        <div className='px-7'>
          <Link
            href='/'
            className='flex items-center'
            onClick={() => setIsOpen(false)}
          >
            {/* <Icons.logo className='mr-2 h-4 w-4' aria-hidden='true' /> */}
            <span className='font-bold'>{siteConfig.name}</span>
            <span className='sr-only'>Home</span>
          </Link>
        </div>
        <ScrollArea className='my-4 h-[calc(100vh-8rem)] pb-10 pl-6'>
          <div className='pl-1 pr-7'>
            <Accordion
              type='multiple'
              defaultValue={navItems.map((item) => item.title)}
              className='w-full'
            >
              {navItems?.map((item, index) => (
                <AccordionItem value={item.title} key={index}>
                  <AccordionTrigger className='text-sm capitalize'>
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className='flex flex-col space-y-2'>
                      {item.items?.map((subItem, index) =>
                        subItem.href ? (
                          <MobileLink
                            key={index}
                            href={String(subItem.href)}
                            segment={String(segment)}
                            setIsOpen={setIsOpen}
                            disabled={subItem.disabled}
                          >
                            {subItem.title}
                          </MobileLink>
                        ) : (
                          <div
                            key={index}
                            className='text-foreground/70 transition-colors'
                          >
                            {item.title}
                          </div>
                        )
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends React.PropsWithChildren {
  href: string;
  disabled?: boolean;
  segment: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileLink({
  children,
  href,
  disabled,
  segment,
  setIsOpen,
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'text-foreground/70 transition-colors hover:text-foreground',
        href.includes(segment) && 'text-foreground',
        disabled && 'pointer-events-none opacity-60'
      )}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  );
}
