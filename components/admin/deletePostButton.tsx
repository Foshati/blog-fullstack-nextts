'use client';

import { DeletePostAction } from '@/actions/post-action';
import { Trash } from 'lucide-react';

type DeletePostButtonProps = {
  id: number;
};

export const DeletePostButton = ({ id }: DeletePostButtonProps) => {
  return (
    <button
      className='rounded-md bg-gray-100 p-4 text-rose-500 shadow-md hover:bg-gray-200'
      onClick={(e) => {
        e.preventDefault();
        void DeletePostAction(id);
      }}
    >
      <Trash className='size-5' />
    </button>
  );
};
