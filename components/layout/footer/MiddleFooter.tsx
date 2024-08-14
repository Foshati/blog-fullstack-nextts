import { BookOpen } from 'lucide-react';

export const MiddleFooter = () => {
  return (
    <div className='relative z-50 '>
      <div className='absolute inset-0 flex items-center justify-center space-x-4 bg-black bg-opacity-50'>
        <div className='flex-grow border-t border-gray-400 max-w-[33%]'></div>
        <BookOpen className='text-4xl text-gray-600 duration-150 ease-in cursor-pointer hover:text-yellow-500 hover:animate-bounce ' />
        <div className='flex-grow border-t border-gray-400 max-w-[33%]'></div>
      </div>
    </div>
  );
};
