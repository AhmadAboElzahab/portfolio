// Blog.js
import Image from 'next/image';

import React from 'react';
import { prisma } from '@/lib/prisma';
import Categories from '@/app/components/Admin/Categories';
import { addCategory } from '@/actions/actions';
import AddPost from '@/app/components/Admin/AddPost';
export const metadata = {
  title: 'Dashboard | Blog',
  description: 'Blog Page Ahmad Abo Elzahab Dashboard ',
};
export default async function Blog() {
  const categories = await prisma.category.findMany();
  const posts = await prisma.post.findMany();

  return (
    <>
      <h1 className='text-5xl font-extrabold mb-5 border-grayBorder py-4 border-b-[1px] '>Blog</h1>

      <div className='min-h-screen flex flex-col gap-3 lg:flex-row'>
        <div className='border-grayBorder border-[1px] rounded-lg fl h-screen w-full bg-darkGray lg:w-[75%]'>
          <div className='flex justify-between  border-grayBorder  border-b-[1px] p-5'>
            <h2 className='text-white font-bold text-4xl'>All Posts</h2>
            <AddPost />
          </div>
          <div className='bg-red-300 p-5 grid grid-cols-3'>
            {posts.map((post: any, index: number) => (
              <div key={index} className='relative'>
                <Image
                  src={post.image}
                  placeholder='blur'
                  blurDataURL={`/_next/image?url=${post.image}&w=16&q=1`}
                  width={500}
                  height={500}
                  alt='Picture of the author'
                />
                <div className='absolute bg-green-300/25 z-10 w-56 top-0'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat sed atque
                  expedita a delectus fugit est perferendis ipsum quibusdam necessitatibus illo, eos
                  recusandae. Nulla, aut maiores autem officia quidem voluptatum.
                </div>
              </div>
            ))}
          </div>
        </div>

        <Categories addCategory={addCategory} categories={categories} />
      </div>
    </>
  );
}
