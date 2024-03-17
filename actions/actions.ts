'use server';
import { prisma } from '@/lib/prisma';
import { error } from 'console';
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
    return { message: 'Category added successfully!' };
  } catch (error) {
    return { error: 'something went wrong' };
  } finally {
    revalidatePath('/dashboard/blog');
  }
}
export async function allCategories() {
  try {
    const categories = await prisma.category.findMany({});
    return categories;
  } catch (error) {
    return error;
  } finally {
    revalidatePath('/dashboard/blog');
  }
}

export async function deleteCategory(id: number) {
  try {
    await prisma.category.delete({
      where: {
        id: id as number,
      },
    });
    return { message: 'Category Deleted successfully!' };
  } catch (error) {
    return { error: 'something went wrong' };
  } finally {
    revalidatePath('/dashboard/blog');
  }
}

export async function addPost(title: string, categoryId: number, body: string) {
  try {
    await prisma.post.create({
      data: {
        title: title,
        content: body as string,
        date: new Date(),
        category: {
          connect: { id: categoryId },
        },
      },
    });

    return 'Post added successfully!';
  } catch (error) {
    return error;
  } finally {
    revalidatePath('/dashboard/blog');
  }
}
