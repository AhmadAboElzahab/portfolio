import Image from 'next/image';

export default function Mypicture() {
  return (
    <section className='w-full mx-auto'>
      <Image
        className='rounded-full border-purple-600'
        src={'/images/profile.jpg'}
        width={200}
        height={200}
        alt='ahmad abo elzahab'
        priority={true}
      ></Image>
    </section>
  );
}
