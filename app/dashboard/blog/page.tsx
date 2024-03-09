// Blog.js
import React from 'react';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import AddPost from '@/app/components/Admin/Categories';
import { addCategory } from '@/actions/actions';
export default async function Blog() {
  const categories = await prisma.category.findMany();

  return (
    <>
      <h1 className='text-5xl font-extrabold mb-2 border-[#242426]  pb-4 border-b-[1px] '>Blog</h1>
      <AddPost addCategory={addCategory} categories={categories} />
    </>
  );
}
