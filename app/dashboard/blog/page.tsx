import { prisma } from '@/lib/prisma';
import React from 'react';
import AddPost from '@/app/components/Admin/AddPost';

export default async function Blog() {
  const categories = await prisma.category.findMany();
 
  return (
    <div>
      <AddPost />
      {categories.map((category) => (
        <div key={category.id}>{category.title}</div>
      ))}
    </div>
  );
}
