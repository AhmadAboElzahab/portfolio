import React from 'react';
import { prisma } from '@/lib/prisma';
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow';
import Image from 'next/image';
import Link from 'next/link';

export default async function Page() {
  const posts = await prisma.post.findMany({
    include: {
      category: true,
    },
  });

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] md:w-[75%] lg:w-[65%] mx-auto gap-10 pt-20 min-h-screen pb-40'>
      {posts.map((p: any, i: number) => (
        <Link href={`/blog/${p.category.type}/${p.category.title}/${p.id}`} key={i}>
          <div className='rounded-md hover:scale-105 transition-all duration-300 border-[1px] border-grayBorder'>
            <div
              className='rounded-md'
              style={{ position: 'relative', width: '100%', height: '200px' }}
            >
              <Image src={p.image} fill alt='' className='blur-md' style={{ objectFit: 'cover' }} />
              <Image
                src={p.image}
                fill
                alt=''
                className='rounded-md'
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className='pt-2 text-white/35 px-2 py-1 backdrop-blur-sm w-full rounded-b-md'>
              <h1 className='text-white h-11 font-bold pb-3'>{p.title}</h1>
              <p className='text-right text-sm'>
                {formatDistanceToNow(new Date(p.date), { addSuffix: true })}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
