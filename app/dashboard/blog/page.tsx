// Blog.js
import React from 'react';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import Categories from '@/app/components/Admin/Categories';
import { addCategory } from '@/actions/actions';
export default async function Blog() {
  const categories = await prisma.category.findMany();

  return (
    <>
      <h1 className='text-5xl font-extrabold mb-5 border-grayBorder  pb-4 border-b-[1px] '>Blog</h1>

      <div className='min-h-screen flex flex-col gap-3 lg:flex-row'>
        <div className='border-grayBorder border-[1px] rounded-lg h-screen w-full bg-darkGray lg:w-[75%]'>

          
        </div>

        <Categories addCategory={addCategory} categories={categories} />
      </div>
    </>
  );
}
