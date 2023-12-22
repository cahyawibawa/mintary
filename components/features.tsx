import Image from 'next/image';
import { Icons } from './icons';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const features = [
  {
    id: 'Guides',
    title: 'Guides',
    description: '',
    image: '/images/guides.png',
    icon: Icons.book,
  },
  {
    id: 'Api-reff',
    title: 'API Refference',
    description: '',
    image: '/images/api-reference.png',
    icon: Icons.api,
  },
  {
    id: 'sdk',
    title: 'SDK Docs',
    description: '',
    image: '/images/sdk.png',
    icon: Icons.sdk,
  },
  {
    id: 'Chat',
    title: 'Chat',
    description: '',
    image: '/images/chat.png',
    icon: Icons.chat,
  },

  // {
  //   id: "Back-end",
  //   title: "Back-end",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque recusandae atque nulla fugit quas est quaerat culpa eum tempore eius.",
  //   image: "/images/resend-ui.png",
  // },
];
const Features = () => {
  return (
    <>
      <Tabs defaultValue='Guides' className='mt-16 w-full sm:mt-20 '>
        <div className='flex justify-center'>
          <TabsList className='mb-2 h-auto w-fit overflow-x-auto p-2'>
            {features.map((data) => (
              <TabsTrigger
                value={data.id}
                key={data.id}
                className='w-full py-2 font-normal text-base text-primint capitalize focus-visible:ring-0'
              >
                <span className='mr-2'>
                  {data.icon && <data.icon className='h-5 w-5 text-primint' />}
                </span>
                {data.title}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        {features.map((data) => (
          <TabsContent value={data.id} key={data.id}>
            <Card>
              <CardHeader>
                {/* <CardTitle className=' text-2xl font-bold capitalize'>
                  {data.title}
                </CardTitle> */}
                <CardDescription>{data.description}</CardDescription>
              </CardHeader>
              <CardContent className='w-full overflow-hidden'>
                <Image
                  src={data?.image}
                  width={1300}
                  height={500}
                  alt='preview image'
                  loading='lazy'
                  className='rounded sm:rounded-lg block'
                />
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
};

export default Features;
