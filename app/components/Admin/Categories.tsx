'use client';
import { useOptimistic, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { VscEdit } from 'react-icons/vsc';
import { RxCross2 } from 'react-icons/rx';

type category = {
  id: number;
  title: string;
  type: string;
};
type categories = {
  categories: category[];
};
export default function Categories({ addCategory, categories }: any) {
  const { pending } = useFormStatus();
  const ref = useRef<HTMLFormElement>(null);
  const [optimisticCategories, addOptimisticCategory] = useOptimistic(
    categories,
    (state: any, newCategory: category) => {
      return [...state, newCategory];
    },
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    ref.current?.reset();
    addOptimisticCategory({
      id: Math.random(),
      title: formData.get('title') as string,
      type: formData.get('type') as string,
    });
    await addCategory(formData);
  };

  return (
    <div className='w-[25%]'>
      <div className='border-grayBorder border-[1px] bg-darkGray mb-[0.75rem] rounded-lg p-5'>
        <h1 className='text-2xl font-bold'>Add Category</h1>

        <form onSubmit={handleSubmit}>
          <input type='text' name='title' className='' />
          <input type='text' name='type' />

          <input disabled={pending} type='submit' value='add' />
        </form>
      </div>
      <div className='border-grayBorder border-[1px] bg-darkGray rounded-lg p-3'>
        <table className='w-full'>
          <thead>
            <tr>
              <th className='text-left'>Title</th>
              <th>Type</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody className='text-xs'>
            {optimisticCategories.map((category: category) => (
              <tr key={category.id}>
                <td className='text-left'>{category.title}</td>
                <td>
                  <p
                    className={` w-fit mx-auto text-center  rounded-xl px-2 py-1 ${
                      category.type === 'Frontend' ? 'text-[#BF7AF0] bg-[#2F1939]' : ''
                    } ${category.type === 'Backend' ? 'text-[#FF5733] bg-[#33130A]' : ''} ${
                      category.type === 'General' ? 'text-[#3498DB] bg-[#154360]' : ''
                    }`}
                  >
                    {category.type}
                  </p>
                </td>
                <td className='text-center'>
                  <RxCross2 className='mx-auto text-lg' />
                </td>
                <td className='text-center'>
                  <VscEdit className='mx-auto text-center text-lg' />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
