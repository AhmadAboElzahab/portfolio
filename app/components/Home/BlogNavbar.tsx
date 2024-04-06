import React from 'react';
import { allCategories } from '@/actions/actions';

export default async function BlogNavbar() {
  const categories: any = await allCategories();
  return (
    <aside className='fixed top-0  pt-[62px] w-[13%] pl-4 h-full'>
      <div className='border-grayBorder border-r-[1px] h-full text-white flex-col'>
        {categories.map((c: any, i: number) => (
          <div>
            {c.type === 'General' && <p>{c.title}</p>}
            {c.type === 'Frontend' && <p>{c.title}</p>}
            {c.type === 'Backend' && <p>{c.title}</p>}
          </div>
        ))}
      </div>
    </aside>
  );
}
