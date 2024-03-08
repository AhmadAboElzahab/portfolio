import { RiSettings4Line } from 'react-icons/ri';
import { AiOutlineUser } from 'react-icons/ai';
import { RxDashboard } from 'react-icons/rx';
import { GoProjectRoadmap, GoProjectTemplate } from 'react-icons/go';

import React from 'react';
import Link from 'next/link';
import VerticalLogo from '@/app/dashboard/Logo';

const Navbar = () => {
  const menus = [
    { name: 'Dashboard', link: '/dashboard', icon: RxDashboard },
    { name: 'Info', link: '/dashboard/info', icon: AiOutlineUser },
    { name: 'Blog', link: '/dashboard/blog', icon: GoProjectRoadmap, margin: true },
    { name: 'Project', link: '/dashboard/projects', icon: GoProjectTemplate },
    { name: 'Setting', link: '/dashboard/settings', icon: RiSettings4Line, margin: true },
  ];

  return (
    <section className='flex z-50  gap-6 dashboard-navbar'>
      <div className='fixed top-0 left-0 h-screen bg-black border-r-[1px] border-[#242426] w-16 text-gray-100'>
        <div className='mt-4 flex flex-col gap-4 relative' id='main-nav'>
          <VerticalLogo />
          {menus?.map((menu, i) => (
            <Link
              href={menu?.link}
              key={i}
              className={` ${
                menu?.margin && 'mt-5'
              } group flex items-center  p-2 hover:border-l-2 hover:border-[#742EFF] hover:pl-1.5 `}
            >
              <div className=' px-4'>{React.createElement(menu?.icon, { size: '20' })}</div>
              <h2 className='absolute  left-48 bg-white  whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit '>
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
