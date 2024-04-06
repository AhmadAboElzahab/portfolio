import BlogNavbar from '@/app/components/Home/BlogNavbar';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex flex-row relative'>
      <BlogNavbar />
      <div className='pl-[25%] w-[100%]'>{children}</div>
    </div>
  );
}
