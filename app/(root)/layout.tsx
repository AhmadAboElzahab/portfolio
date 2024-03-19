import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import Navbar from '../components/Navbar';
import { TracingBeam } from '../components/ui/tracing-beam';
import Template from '../components/FramerMotionWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ahmad Abo Elzahab',
  description: "This ahmad's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className=' bg-black'>
        <Navbar />
        <div className='pt-20'>
          <Template>
            <TracingBeam className='px-10 lg:px-6 '>{children}</TracingBeam>
          </Template>
        </div>
      </body>
    </html>
  );
}
