// Blog.js
import React from 'react';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import AddPost from '@/app/components/Admin/AddPost';
import { addCategory } from '@/actions/actions';
export default async function Blog() {
  const categories = await prisma.category.findMany();

  return (
    <div>
      <AddPost addCategory={addCategory} />
      {categories.map((category) => (
        <div key={category.id}>{category.title}</div>
      ))}
    </div>
  );
}
