import Link from 'next/link';
import Logo from './Logo';
export default function Navbar() {
  return (
    <nav className=' border-b-2 border-white  rsticky drop-shadow-xl z-10'>
      <div className='mx-auto flex justify-between flex-col sm:flex-row'>
        <div className='mx-auto text-white w-[55%] flex felx-row justify-between p-5'>
          <div>
            <h1 className='text-white no-underline '>
              <Link href='/'>
                <Logo />
              </Link>
            </h1>
          </div>
          <div className='bg-red-200  flex gap-x-4'>
            <Link href='/'>Home</Link>
            <Link href='/contact'>Blog</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
