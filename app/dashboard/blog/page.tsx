import { prisma } from '@/lib/prisma';
import React from 'react';
import { revalidatePath } from 'next/cache';

export default async function Blog() {
  const categories = await prisma.category.findMany();
  const addCategory = async (formData: FormData) => {
    'use server';
    const title = formData.get('title');

    try {
      await prisma.category.create({
        data: {
          title: title as string,
          description: 'Posts related to technology',
        },
      });
      revalidatePath('/dashboard/blog');
    } catch (error) {
      console.error('Error creating category:', error);
      // Handle errors appropriately, e.g., display error message to user
    }
  };
  return (
    <div>
      <form action={addCategory} className='text-red-500'>
        <input type='text' name='title' />
        <input type='submit' value='add' />
      </form>
      {categories.map((category) => (
        <div key={category.id}>{category.title}</div>
      ))}
    </div>
  );
}
