import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import SiteHeader from '@/components/layouts/site-header';
import { cn } from '@/lib/utils';
import { fontHeading, fontMono, fontSans } from '@/lib/fonts';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://mintary.vercel.app'),
  title: 'Mintary',
  description: 'The documentation you want, effortlessly',
  openGraph: {
    title: 'Mintary',
    description: 'The documentation you want, effortlessly',
    url: 'https://mintary.vercel.app',
    siteName: 'Mintary',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'w-full h-full mx-auto max-w-6xl bg-[#E6FAF5]  font-sans antialiased',
          fontSans.variable,
          fontMono.variable,
          fontHeading.variable
        )}
      >
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
