'use server';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function addCategory(formData: FormData) {
  const title = formData.get('title');
  const type = formData.get('type');
  try {
    await prisma.category.create({
      data: {
        title: title as string,
        type: type as string,
      },
    });
    return 'Category added successfully!';
  } catch (error) {
    return error;
  } finally {
    revalidatePath('/dashboard/blog');
  }
}
