import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Icons } from './icons';
import { buttonVariants } from '@/components/ui/button';
import { Shell } from './shell';

const logos = [
  {
    src: '/images/logo/elevenlabs.svg',
    alt: 'elevenlabs',
  },
  {
    src: '/images/logo/flatfile.svg',
    alt: 'flatfile',
  },
  {
    src: '/images/logo/goody.svg',
    alt: 'goody',
  },
  {
    src: '/images/logo/homebot.svg',
    alt: 'homebot',
  },
  {
    src: '/images/logo/mindsdb.svg',
    alt: 'mindsdb',
  },
  {
    src: '/images/logo/resend.svg',
    alt: 'resend',
  },
  {
    src: '/images/logo/smartcar.svg',
    alt: 'smartcar',
  },
  {
    src: '/images/logo/stedi.svg',
    alt: 'stedi',
  },
  {
    src: '/images/logo/teleport.svg',
    alt: 'teleport',
  },
  {
    src: '/images/logo/whop.svg',
    alt: 'whop',
  },
];

const CompanyLogo = () => (
  <Shell className='relative z-10'>
    <div className='px-6 py-12 mx-auto w-full max-w-5xl text-center'>
      <span className='space-x-1.5 text-primint justify-center '>
        Powering developer experiences from fast growing startups to
        enterprises.
        <Link
          href='/demo'
          className={cn(
            buttonVariants({
              className: 'text-primint font-medium text-base font-primint',
              variant: 'ghost',
            })
          )}
        >
          Learn More
          <Icons.arrow className='h-4 w-4 ml-3 text-primint' />
          <span className='sr-only'>Demo</span>
        </Link>
      </span>

      <ul className='mt-16 grid grid-cols-2 sm:grid-cols-5 gap-10'>
        {logos.map((item, idx) => (
          <li key={idx} className='flex items-center justify-center'>
            <div className='block'>
              <Image src={item.src} alt={item.alt} width={85} height={85} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  </Shell>
);

export default CompanyLogo;
