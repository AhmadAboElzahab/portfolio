import React from 'react';
import { SparklesCore } from '../ui/sparkles';

export default function BigText() {
  return (
    <div className='bg-red-800'>
      <h1 className='text-6xl lg:text-8xl  font-extrabold text-white'>
        <div className='h-[50rem] text-center w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md'>
          Ahmaad Abo Elzahab
          <div className='w-[60rem] h-40 relative'>
            <div className='absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm' />
            <div className='absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4' />
            <div className='absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm' />
            <div className='absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4' />

            <SparklesCore
              background='transparent'
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className='w-full h-full'
              particleColor='#FFFFFF'
            />
            <div className='absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]'></div>
          </div>
        </div>
      </h1>
    </div>
  );
}
