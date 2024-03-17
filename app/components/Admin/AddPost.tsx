'use client';
import { Fragment, useState, useEffect, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { addPost, allCategories } from '@/actions/actions';
import { toast } from 'react-toastify';
import { IoMdAdd } from 'react-icons/io';

export default function AddPost() {
  let [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState<any>([]);
  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    async function fetchCategories() {
      const categoriesData = await allCategories();
      setCategories(categoriesData);
    }
    fetchCategories();
  }, []);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const addNewPost = async (formData: FormData) => {
    ref.current?.reset();
    const result = await addPost(formData);

    if (result?.error) {
      toast.error(result.error);
    }
    if (result?.message) {
      toast.success(result.message);
      closeModal();
    }
  };
  return (
    <>
      <div>
        <button
          type='button'
          className='bg-white text-black rounded text-lg px-4 py-2 hover:bg-gray-300 mx-auto'
          onClick={openModal}
        >
          Add Post
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black backdrop-blur-md bg-opacity-60' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex  min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-[85vw] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-xl flex border-b-[1px] border-[#CFD7DE] mb-4  font-medium leading-6 text-gray-900'
                  >
                    <IoMdAdd size={40} className='pb-4' />
                    Add New Post
                  </Dialog.Title>
                  <form ref={ref} action={addNewPost} className='flex flex-col'>
                    <input
                      className='bg-white mb-2 text-sm appearance-none border-[1px] border-[#CFD7DE] rounded  w-full py-2 px-4 text-black leading-tight focus:outline-none '
                      type='txt'
                      name='title'
                      placeholder='Add Title'
                    />
                    <select
                      name='categoryID'
                      defaultValue={''}
                      className='bg-white mb-2 text-sm appearance-none border-[1px] border-[#CFD7DE] rounded  w-full py-2 px-4 text-black leading-tight focus:outline-none '
                    >
                      <option defaultValue=''>Please choose</option>
                      {categories.map((cat: any, index: number) => (
                        <option key={index} value={cat.id}>
                          {cat.title}
                        </option>
                      ))}
                    </select>
                    <textarea
                      name='body'
                      placeholder='Add Post Body'
                      id=''
                      rows={20}
                      className='resize-none  bg-white mb-2 text-sm appearance-none border-[1px] border-[#CFD7DE] rounded  w-full py-2 px-4 text-black leading-tight focus:outline-none '
                    ></textarea>
                    <div className='flex flex-row-reverse mt-3 gap-5'>
                      <button
                        type='submit'
                        className='inline-flex justify-center rounded-md px-4 py-2 text-sm font-medium bg-black text-white '
                      >
                        Submit
                      </button>
                      <button
                        type='button'
                        className='inline-flex justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2'
                        onClick={closeModal}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
