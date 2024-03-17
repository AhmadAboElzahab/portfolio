// Blog.js
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

  return (
    <>
      <h1 className='text-5xl font-extrabold mb-5 border-grayBorder py-4 border-b-[1px] '>Blog</h1>

      <div className='min-h-screen flex flex-col gap-3 lg:flex-row'>
        <div className='border-grayBorder border-[1px] rounded-lg fl h-screen w-full bg-darkGray lg:w-[75%]'>
          <div className='flex justify-between  border-grayBorder  border-b-[1px] p-5'>
            <h2 className='text-white font-bold text-4xl'>All Posts</h2>
            <AddPost />
          </div>
        </div>

        <Categories addCategory={addCategory} categories={categories} />
      </div>
    </>
  );
}
