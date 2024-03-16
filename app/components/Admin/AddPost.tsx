'use client';
import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import MDEditor from '@uiw/react-md-editor';
import { addPost, allCategories } from '@/actions/actions';

export default function AddPost() {
  let [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<any>('');
  const [categories, setCategories] = useState<any>([]);
  const [title, setTitle] = useState('');
  const [categoryID, setCategoryID] = useState<any>(null);

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
            <div className='fixed inset-0 bg-black bg-opacity-60' />
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
                    className='text-xl border-b-[1px] border-[#CFD7DE] mb-4 pb-2 font-medium leading-6 text-gray-900'
                  >
                    Add New Post
                  </Dialog.Title>
                  <div className='flex flex-col'>
                    <input
                      className='bg-white mb-2 text-sm appearance-none border-[1px] border-[#CFD7DE] rounded  w-full py-2 px-4 text-black leading-tight focus:outline-none '
                      type='txt'
                      name='title'
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                      placeholder='Add Title'
                    />
                    <select
                      onChange={(e) => {
                        setCategoryID(Number(e.target.value));
                      }}
                      value={categoryID}
                      className='bg-white mb-2 text-sm appearance-none border-[1px] border-[#CFD7DE] rounded  w-full py-2 px-4 text-black leading-tight focus:outline-none '
                    >
                      <option value=''>Please choose</option>
                      {categories.map((cat: any, index: number) => (
                        <option key={index} value={cat.id}>
                          {cat.title}
                        </option>
                      ))}
                    </select>
                    <div data-color-mode='light'>
                      <MDEditor
                        value={value}
                        height={500}
                        minHeight={500}
                        visibleDragbar={false}
                        onChange={setValue}
                      />
                    </div>
                  </div>
                  <div className='flex flex-row-reverse mt-8 gap-5'>
                    <button
                      onClick={() => {
                        console.log(categoryID);
                        addPost(title, categoryID, value);
                      }}
                      type='button'
                      className='inline-flex justify-center rounded-md px-4 py-2 text-sm font-medium bg-black text-white '
                    >
                      Add
                    </button>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2'
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
