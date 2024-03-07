'use client';

import Link from 'next/link';
import Logo from './Logo';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const NavLinks = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Blog', path: '/blog' },
    { id: 3, name: 'About', path: '/about' },
    { id: 4, name: 'Contact', path: '/contact' },
  ];
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  return (
    <nav className=''>
      <div className='mx-auto flex justify-between flex-col sm:flex-row'>
        <div className='mx-auto fon text-[#727279]  w-full md:w-[70%]	lg:w-[58%] flex felx-row justify-between pt-4'>
          <div>
            <h1 className=' no-underline pt-3'>
              <Link href='/'>
                <Logo />
              </Link>
            </h1>
          </div>
          <div className='flex gap-x-5 '>
            <div className='pt-1 flex gap-x-5 '>
              {NavLinks.map((link) => {
                return (
                  <>
                    <Link
                      className={` ${
                        isActive(link.path) ? 'text-white ' : ''
                      }hover:text-white hover:transition duration-300`}
                      href={link.path}
                    >
                      {link.name}
                    </Link>
                  </>
                );
              })}
            </div>
            <Link
              className='bg-[#8E8E98] hover:bg-[#aaaab1] py-1 px-2 hover:transition duration-300	text-black  rounded-sm '
              href='/contact'
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
