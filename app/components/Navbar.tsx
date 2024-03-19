'use client';

import Link from 'next/link';
import Logo from './Home/Logo';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
interface link {
  id: number;
  name: string;
  path: string;
}
export default function Navbar() {
  const [header, setHeader] = useState(false);
  const scrollHeader = () => {
    if (typeof window !== 'undefined' && window.pageYOffset >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHeader);
    return () => {
      window.removeEventListener('scroll', scrollHeader);
    };
  }, []);
  const NavLinks = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Blog', path: '/blog' },
    { id: 3, name: 'About', path: '/about' },
    { id: 4, name: 'Contact', path: '/contact' },
  ];
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  return (
    <nav
      className={`${
        header
          ? 'w-full z-20 pt-2 pb-3  fixed bg-black/50 backdrop-blur-lg border-b-[1px] border-grayBorder '
          : 'bg-transparent w-full pt-2 z-20  fixed  pb-3'
      }`}
    >
      <div className='mx-auto flex justify-between flex-col sm:flex-row'>
        <div className='mx-auto  text-[#727279]  w-[90%] md:w-[80%]	lg:w-[58%] flex felx-row justify-between pt-4'>
          <div>
            <Logo />
          </div>
          <div className='flex gap-x-2 md:gap-x-3 lg:gap-x-5  '>
            <div className='pt-1 flex gap-x-2 md:gap-x-3 lg:gap-x-5 '>
              {NavLinks.map((link: link, index: number) => {
                return (
                  <Link
                    key={index}
                    className={` ${
                      isActive(link.path) ? 'text-white ' : ''
                    }hover:text-white hover:transition duration-300`}
                    href={link.path}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
            <Link
              className='bg-[#8E8E98] hover:bg-[#aaaab1] py-1 px-2 hover:transition duration-300	text-black  rounded-lg'
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
