'use client';
import { LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';

type UserProp = {
  name: string;
};

const User = ({ name }: UserProp) => {
  return (
    <div className='flex items-center justify-between gap-x-2'>
      <div className='flex size-10 items-center justify-center rounded-full border'>
        <span className='text-2xl font-bold'>{name[0]}</span>
      </div>
      <button
        className='btn btn-ghost btn-circle'
        onClick={(e) => {
          e.preventDefault();
          void signOut({
            callbackUrl: '/',
          });
        }}
      >
        <LogOut />
      </button>
    </div>
  );
};

export default User;
