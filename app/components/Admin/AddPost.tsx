'use client';
import React from 'react';
import { addCategory } from '@/actions/Categories';
export default function AddPost() {
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
