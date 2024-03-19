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
      <div className='pt-24  '>
        <h1 className='text-3xl'>{postContent.title}</h1>
        <Image
          src={postContent.image}
          placeholder='blur'
          blurDataURL={`/_next/image?url=${postContent.image}&w=16&q=1`}
          width={500}
          height={500}
          alt='Picture of the author'
        />

        <hr />
        <article
          className=' 
        
        prose dark:prose-invert lg:prose-xl
'
        >
          <MarkdownRenderer>{postContent.content}</MarkdownRenderer>
        </article>
      </div>
    );
  } catch (error) {}
}
