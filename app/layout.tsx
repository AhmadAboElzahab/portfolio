import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Mypicture from './components/Mypicture';

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
      <body className='text-white bg-black'>
        <Navbar />
        <Mypicture />
        {children}
      </body>
    </html>
  );
}
