'use client';
import React from 'react';
export default function AddPost({ addCategory }: any) {
  return (
    <form
      action={async (formData) => {
        await addCategory(formData);
      }}
      className='text-red-500'
    >
      <input type='text' name='title' />
      <input type='submit' value='add' />
    </form>
  );
}
