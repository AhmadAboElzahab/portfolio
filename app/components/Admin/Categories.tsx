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
    <>
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
      {optimisticCategories.map((category: any) => (
        <div key={category.id}>{category.title}</div>
      ))}
    </>
  );
}
