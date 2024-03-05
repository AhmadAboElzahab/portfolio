import Link from 'next/link';
export default function Navbar() {
  return (
    <nav className='border-b-2 border-white  rsticky drop-shadow-xl z-10'>
      <div className=' mx-auto flex justify-between flex-col sm:flex-row'>
        <Link href='/' className='no-underline text-4xl text-white'>
          Home
        </Link>
        <Link href='/contact' className='no-underline text-4xl text-white'>
          Blog
        </Link>
        <Link href='/about' className='no-underline text-4xl text-white'>
          About
        </Link>
        <Link href='/contact' className='no-underline text-4xl text-white'>
          Contact
        </Link>
      </div>
    </nav>
  );
}
