'use client';
import { useOptimistic, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { VscEdit } from 'react-icons/vsc';
import { RxCross2 } from 'react-icons/rx';
import { deleteCategory } from '@/actions/actions';
import { toast } from 'react-toastify';

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

  const addNewCategory = async (formData: FormData) => {
    ref.current?.reset();
    addOptimisticCategory({
      id: Math.random(),
      title: formData.get('title') as string,
      type: formData.get('type') as string,
    });
    const result = await addCategory(formData);
    if (result?.error) {
      toast.error(result.error);
    }
    if (result?.message) {
      toast.success(result.message);
    }
  };

  return (
    <div className=' w-full lg:w-[25%]'>
      <div className='border-grayBorder border-[1px] bg-darkGray mb-[0.75rem] rounded-lg p-5'>
        <h1 className='text-2xl mb-4 font-bold'>Add Category</h1>

        <form ref={ref} action={addNewCategory} className='flex flex-col'>
          <input
            className='bg-black mb-2 text-sm appearance-none border-[1px] border-grayBorder rounded  w-full py-2 px-4 text-white leading-tight focus:outline-none placeholder:text-grayBorder '
            type='txt'
            name='title'
            placeholder='Title'
          />
          <>
            <select
              className='bg-black mb-2 text-sm invalid:text-gray-400 appearance-none border-[1px] border-grayBorder rounded w-full py-2 px-4 text-white leading-tight focus:outline-none placeholder-text-grayBorder'
              name='type'
              defaultValue=''
            >
              <option defaultValue='' disabled selected>
                Select your option
              </option>
              <option defaultValue='Backend'>Backend</option>
              <option defaultValue='Frontend'>Frontend</option>
              <option defaultValue='General'>General</option>
            </select>
          </>
          <input
            disabled={pending}
            type='submit'
            className='bg-white self-end mr-4 text-black rounded py-1 px-2 hover:bg-gray-300 hover:cursor-pointer'
            value='Save'
          />
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
                      category.type === 'Frontend' ? 'text-[#B574E4] bg-[#2F1939]' : ''
                    } ${category.type === 'Backend' ? 'text-[#FF6166] bg-[#3B1618]' : ''} ${
                      category.type === 'General' ? 'text-[#0CC7B4] bg-[#093A33]' : ''
                    }`}
                  >
                    {category.type}
                  </p>
                </td>
                <td className='text-center'>
                  <RxCross2
                    className='mx-auto text-lg hover:text-red-500 hover:cursor-pointer '
                    onClick={async () => {
                      const result = await deleteCategory(category.id);
                      if (result?.error) {
                        toast.error(result.error);
                      }
                      if (result?.message) {
                        toast.success(result.message);
                      }
                    }}
                  />
                </td>
                <td className='text-center'>
                  <VscEdit className='mx-auto text-center hover:text-blue-500 hover:cursor-pointer text-lg' />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
