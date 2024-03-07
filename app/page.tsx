'use client';
import BigText from './components/Home/BigText';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { TextGenerateEffect } from './components/ui/text-generate-effect';

export default function Home() {
  return (
    <main className=' w-[90%] md:w-[80%]	lg:w-[90%]  mx-auto '>
      <BigText />

      <div className='h-[50rem] w-full bg-black bg-dot-white/[0.2] relative flex items-center justify-center'>
        <div className='absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
        <div className='flex flex-col'>
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 300, transition: { duration: 1.0 } }}
          >
            <div className='text-5xl'>Who am I</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1.0 } }}
          >
            <TextGenerateEffect
              words='    Passionate software engineer with 3+ years of expertise in crafting immersive and
            responsive websites. Proficient in JavaScript Frameworks, and a suite of tools. I blend
            innovation with functionality to deliver seamless user experiences. A collaborative
            spirit fuels my agile approach, partnering with diverse teams to create digital
            landscapes that resonate with both clients and end-users.'
            />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
