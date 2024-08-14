import Link from 'next/link';
import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className='p-4 bg-black rounded footer footer-center text-base-content'>
      <div className='m-1'>
        <p className='hidden lg:block'>
          Copyright &copy; 2024 - All right reserved by{' '}
          <a
            className='cursor-pointer hover:text-red-500'
            href='https://github.com/Foshati'
            target='_blank'
            rel='noopener noreferrer' /* Prevent tabnabbing security attack */
          >
            Foshati
          </a>
        </p>

        <div className='grid grid-flow-col gap-8 '>
          <Link href='' className='link link-hover'>
            About us
          </Link>
          <Link href='' className='link link-hover'>
            Contact
          </Link>
          <Link href='' className='link link-hover'>
            Jobs
          </Link>
          <Link href='' className='link link-hover'>
            Press kit
          </Link>

          <label className='swap swap-rotate '>
            {/* this hidden checkbox controls the state */}
            <input type='checkbox' className='theme-controller' value='dim' />

            {/* moon icon */}
            <Moon className='w-5 h-5 fill-current swap-off' />

            {/* sun icon */}
            <Sun className='w-5 h-5 fill-current swap-on' />
          </label>
        </div>
      </div>
    </footer>
  );
};
