import { MdOutlineDashboard } from 'react-icons/md';
import { RiSettings4Line } from 'react-icons/ri';
import { MdOutlineAddPhotoAlternate } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';

import { IoVideocamOutline } from 'react-icons/io5';
import React from 'react';
import Link from 'next/link';
import VerticalLogo from '@/app/dashboard/Logo';

const Navbar = () => {
  const menus = [
    { name: 'Dashboard', link: '', icon: MdOutlineDashboard },
    { name: 'Accounts', link: 'socialmedia', icon: AiOutlineUser },
    { name: 'Graphic', link: 'graphic', icon: MdOutlineAddPhotoAlternate, margin: true },
    { name: 'Video', link: 'video', icon: IoVideocamOutline },
    { name: 'Setting', link: 'settings', icon: RiSettings4Line, margin: true },
  ];

  return (
    <section className='flex z-50  gap-6 dashboard-navbar'>
      <div className='fixed top-0 left-0 h-screen bg-black border-r-[1px] border-gray-600 w-16 text-gray-100'>
        <div className='mt-4 flex flex-col gap-4 relative' id='main-nav'>
          <VerticalLogo />
          {menus?.map((menu, i) => (
            <Link
              href={menu?.link}
              key={i}
              className={` ${
                menu?.margin && 'mt-5'
              } group flex items-center  p-2 hover:border-l-2 hover:border-[#70358A] hover:pl-1.5 `}
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
