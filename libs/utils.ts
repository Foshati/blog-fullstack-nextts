import clsx from 'clsx';
import { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getSliceWords = (input: string, numWords: number) => {
  const words = input.split(' ');
  const SliceWords = words.slice(0, numWords);

  return SliceWords.join(' ');
};
