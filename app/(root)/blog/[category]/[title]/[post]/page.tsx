import { prisma } from '@/lib/prisma';
import Image from 'next/image';
import { MarkdownRenderer } from '@/components/Markdown';

type Post = {
  id: number;
  title: string;
  date: Date;
  content: string;
  image: string;
  categoryId: number;
};

export default async function Page({
  params,
}: {
  params: { category: string; title: string; post: string };
}) {
  const { category, title, post } = params;

  try {
    const postContent = await prisma.post.findFirst({
      where: {
        id: parseInt(post),
        category: {
          type: category,
          title: title,
        },
      },
      include: { category: true },
    });

    if (!postContent) {
      return <h1>not found</h1>;
    }

    return (
      <article
        className=' 
        
        prose dark:prose-invert prose-lg mx-auto pb-20 text-wrap 
'
      >
        <MarkdownRenderer>{postContent.content}</MarkdownRenderer>
      </article>
    );
  } catch (error) {}
}
