import Link from 'next/link';
import { Shell } from '@/components/shell';
import { buttonVariants } from '@/components/ui/button';
import { Balancer } from 'react-wrap-balancer';
import { cn } from '@/lib/utils';
import Features from '@/components/features';
import { Icons } from '@/components/icons';
import CompanyLogo from '@/components/company-logo';

export default function Home() {
  return (
    <div className='bg-[#E6FAF5]'>
      <section
        id='hero'
        aria-labelledby='hero-heading'
        className='mx-auto w-full max-w-[22rem] md:max-w-[42rem] items-center justify-center  mt-12 text-center'
      >
        <Balancer
          as='h1'
          className='text-[2rem] text-[#0F4F57] leading-tight font-heading md:text-6xl md:leading-[1.08] space-y-2'
        >
          The documentation you want, effortlessly
        </Balancer>
        <Balancer
          as='p'
          className='mt-4 max-w-[16rem] md:max-w-xl text-primint md:leading-loose'
        >
          Meet the modern standard for public facing documentation. Beautiful
          out of the box, easy to maintain, and optimized for user engagement.
        </Balancer>
        <div className='flex flex-wrap items-center justify-center px-12 mt-12 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-10'>
          <Link
            href='/signup'
            className={cn(
              buttonVariants({
                className: 'text-base',
                size: 'xl',
                variant: 'mint',
              })
            )}
          >
            Get Started
            <Icons.arrow className='h-4 w-4 ml-3' />
            <span className='sr-only'>signup</span>
          </Link>
          <Link
            href='/demo'
            className={cn(
              buttonVariants({
                className: 'text-base font-normal text-primint',
                variant: 'ghost',
              })
            )}
          >
            Documentation
            <Icons.arrow className='h-4 w-4 ml-3 text-primint' />
            <span className='sr-only'>Demo</span>
          </Link>
        </div>
      </section>
      <section id='features' aria-labelledby='features'>
        <div className='px-2'>
          <Features />
          <CompanyLogo />
        </div>
      </section>
      {/* <section id='modern-standard' aria-labelledby='modern-standard'>
        <div className='w-full text-center mt-12 h-full mx-auto max-w-6xl bg-white'>
          <Balancer
            as='h1'
            className='text-[2rem] text-foregound leading-tight font-heading md:text-6xl md:leading-[1.08] space-y-2'
          >
            Beautiful documentation that converts users
          </Balancer>
        </div>
      </section> */}
    </div>
  );
}
