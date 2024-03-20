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
    <div className='grid grid-cols-3 w-[65%] mx-auto gap-10 pt-20 min-h-screen pb-40'>
      {posts.map((p: any, i: number) => (
        <Link href={`/blog/${p.category.type}/${p.category.title}/${p.id}`} key={i}>
          <div className='rounded-md hover:scale-105 transition-all duration-300 border-[1px] border-grayBorder'>
            <div
              className='rounded-md'
              style={{ position: 'relative', width: '100%', height: '279px' }}
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
            <div className='hover:text-white text-white/35 px-2 py-1 backdrop-blur-sm w-full rounded-b-md'>
              <h1 className='h-9'>{p.title}</h1>
              <p className='text-right text-sm'>
                {formatDistanceToNow(new Date(p.date), { addSuffix: true })}
              </p>
              {p.category && (
                <div className='text-xs mt-1'>
                  Category: <strong>{p.category.title}</strong> ({p.category.type})
                </div>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
