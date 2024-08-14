'use client';

import { useRef, useEffect } from 'react';
import { useFormState } from 'react-dom';
import SubmitButton from '../ui/button/submit-button';
import Container from '../ui/container';
import { CreatePostAction } from '@/actions/post-action';
import { toast } from 'sonner';

type FormState = {
  success?: boolean;
  message?: string;
};

export const PostFormAdmin = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState<FormState, FormData>(CreatePostAction, {});

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast.success(state.message);
      } else {
        toast.error(state.message);
      }
      if (state.success && formRef.current) {
        formRef.current.reset();
      }
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction}>
      <Container className='flex flex-start flex-col gap-8'>
        <label className='form-control w-full max-w-xs'>
          <div className='label'>
            <span className='label-text'>Title Blog</span>
          </div>
          <input name='title' type='text' className='input input-bordered w-full max-w-xs bg-black' />
        </label>

        <label className='form-control w-full max-w-xs'>
          <div className='label'>
            <span className='label-text'>Body Blog</span>
          </div>
          <textarea name='body' className='input input-bordered w-full max-w-xs bg-black h-32' />
        </label>

        <label className='form-control w-full max-w-xs'>
          <div className='label'>
            <span className='label-text'>Address Image</span>
          </div>
          <input name='image' type='text' className='input input-bordered w-full max-w-xs bg-black' />
        </label>

        <div>
          <SubmitButton title='Create Post' />
        </div>
      </Container>
    </form>
  );
};
