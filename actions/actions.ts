'use server';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function addCategory(formData: FormData) {
  const title = formData.get('title');
  try {
    await prisma.category.create({
      data: {
        title: title as string,
      },
    });
    return 'Category added successfully!'; // Return a success message
  } catch (error) {
    return error; // Return the error for client-side handling
  } finally {
    revalidatePath('/dashboard/blog');
  }
}
