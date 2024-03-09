'use server';
import { revalidatePath } from 'next/cache';

export const addCategory = async (formData: FormData) => {
  const title = formData.get('title');
  try {
    await prisma.category.create({
      data: {
        title: title as string,
        description: 'Posts related to technology',
      },
    });
  } catch (error) {
    return error;
  }
};
