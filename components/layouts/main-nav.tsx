'use client';

import * as React from 'react';
import Link from 'next/link';
import type { MainNavItem } from '@/types';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';

interface MainNavProps {
  items?: MainNavItem[];
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className='hidden space-x-7 items-center gap-28 lg:flex'>
      <Link href='/' className='hidden items-center space-x-2 lg:flex'>
        <Icons.leaf className='h-6 w-6 text-primint' aria-hidden='true' />
        <span className='hidden font-bold text-xl text-[#0F4F57] lg:inline-block'>
          {siteConfig.name}
        </span>
        <span className='sr-only'>Home</span>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          {items?.[0]?.items ? (
            <NavigationMenuItem>
              <NavigationMenuTrigger className='h-auto'>
                {items[0].title}
              </NavigationMenuTrigger>
            </NavigationMenuItem>
          ) : null}
          {items
            ?.filter((item) => item.title !== items[0]?.title)
            .map((item) =>
              item?.items ? (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuTrigger className='h-auto capitalize'>
                    {item.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
                      {item.items.map((item) => (
                        <ListItem
                          key={item.title}
                          title={item.title}
                          href={item.href}
                        >
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                item.href && (
                  <NavigationMenuItem key={item.title}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(navigationMenuTriggerStyle(), 'h-auto')}
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )
              )
            )}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={String(href)}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
