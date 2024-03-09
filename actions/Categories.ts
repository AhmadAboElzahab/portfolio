import { revalidatePath } from 'next/cache';

export const addCategory = async (formData: FormData) => {
  'use server';

  const title = formData.get('title');
  try {
    await prisma.category.create({
      data: {
        title: title as string,
      },
    });
    revalidatePath('/dashboard/blog');
  } catch (error) {
    return error;
  }
};
