import Navbar from '../components/Admin/Navbar';
import NextTopLoader from 'nextjs-toploader';
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};
import '../globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <NextTopLoader
          initialPosition={0.08}
          crawlSpeed={200}
          height={0}
          crawl={true}
          showSpinner={false}
          easing='ease'
          speed={800}
          template='<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
          zIndex={1600}
          showAtBottom={false}
        />

        <div className='bg-black h-screen overflow-y-scroll bg_grid pb-36'>
          <Navbar />
          <div className='ml-16 overflow-hidden w-[calc(100vw-4rem)] text-white p-6'>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
