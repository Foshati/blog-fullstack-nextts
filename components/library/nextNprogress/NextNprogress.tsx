'use client';

import { ReactNode } from 'react';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

interface NextNprogressProps {
  children: ReactNode;
}

const NextNprogress = ({ children }: NextNprogressProps) => {
  return (
    <>
      {children}
      <ProgressBar height='4px' color='#ffaa05' options={{ showSpinner: false }} shallowRouting />
    </>
  );
};

export default NextNprogress;
