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
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] md:w-[75%] lg:w-[65%] mx-auto gap-10 pt-20 pb-40'>
      {posts.map((p: any, i: number) => (
        <div className='rounded-md hover:scale-105 transition-all duration-300 border-[1px] border-grayBorder'>
          <Link href={`/blog/${p.category.type}/${p.category.title}/${p.id}`} key={i}>
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
          </Link>
          <div className='pt-2 text-white/35 px-2  rounded-b-md'>
            <Link href={`/blog/${p.category.type}/${p.category.title}/${p.id}`}>
              <h1 className='text-white font-bold '>{p.title}</h1>
            </Link>
            <p>{p.descreption.substring(0, 100)}</p>
            <div className='flex  justify-between pt-2 pb-1'>
              <div className='flex flex-row'>
                <Link className=' mr-1' href={`/blog/${p.category.type}/`}>
                  <p className='bg-[#19191C] text-white px-2 py-1 rounded-3xl text-xs hover:bg-[#2C2C31]'>
                    {p.category.type}
                  </p>
                </Link>
                <Link href={`/blog/${p.category.type}/${p.category.title}/`}>
                  <p className='bg-[#19191C] text-white px-2 py-1 rounded-3xl text-xs hover:bg-[#2C2C31]'>
                    {p.category.title}
                  </p>
                </Link>
              </div>
              <p className='text-right text-xs pt-1'>
                {formatDistanceToNow(new Date(p.date), { addSuffix: true })}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
