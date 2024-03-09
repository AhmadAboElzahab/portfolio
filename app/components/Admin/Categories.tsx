'use client';

import { useOptimistic, useRef } from 'react';
import { useFormStatus } from 'react-dom';
export default function Categories({ addCategory, categories }: any) {
  const { pending } = useFormStatus();
  const ref = useRef<HTMLFormElement>(null);
  const [optimisticCategories, addOptimisticCategory] = useOptimistic(
    categories,
    (state, newCategory: any) => {
      return [...state, newCategory];
    },
  );

  return (
    <div className='w-[25%] '>
      <div className='border-grayBorder border-[1px] bg-darkGray mb-[0.75rem] rounded-lg p-5'>
        <h1 className='text-2xl font-bold'>Add Category</h1>
        <form
          ref={ref}
          action={async (formData) => {
            ref.current?.reset();
            addOptimisticCategory({
              id: Math.random(),
              title: formData.get('title') as string,
              type: formData.get('type') as string,
            });

            await addCategory(formData);
          }}
          className='text-red-500'
        >
          <input type='text' name='title' />

          <input disabled={pending} type='submit' value='add' />
        </form>
      </div>
      <div className='w-full border-grayBorder border-[1px] bg-darkGray rounded-lg p-5 '>
        {optimisticCategories.map((category: any) => (
          <div key={category.id}>{category.title + ' ' + category.type}</div>
        ))}
      </div>
    </div>
  );
}
