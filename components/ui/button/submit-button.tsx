'use client';

import { useFormStatus } from 'react-dom';

const SubmitButton = ({ title }: { title: string }) => {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      disabled={pending}
      className='rounded-md bg-black px-7 py-2 text-white hover:bg-gray-800 disabled:bg-gray-400 flex items-center justify-center'
    >
      {pending ? <span className='loading loading-dots loading-sm'></span> : title}
    </button>
  );
};

export default SubmitButton;
