'use client';

interface SignUpProps {
  onSuccess: () => void;
}

import { Mail, User, BookOpen, Lock } from 'lucide-react';
import { useFormState } from 'react-dom';
import { useEffect, useRef } from 'react';
import { createUser, SignUpFormState } from '@/actions/auth-action';
import { toast } from 'sonner';
import SubmitButton from '../ui/button/submit-button';

export default function SignUp({ onSuccess }: SignUpProps) {
  const [state, formAction] = useFormState<SignUpFormState, FormData>(createUser, {});
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message && state.status) {
      toast[state.status](state.message);
      if (state.status === 'success') {
        if (formRef.current) {
          formRef.current.reset();
        }
        onSuccess();
      }
    }
  }, [state, onSuccess]);

  return (
    <form
      ref={formRef}
      action={formAction}
      role='tabpanel'
      className='tab-content bg-base-100 border-base-300 rounded-box p-6 flex flex-col justify-center items-center h-auto'
    >
      <div className='w-full max-w-xs space-y-4'>
        <div className='flex justify-center avatar placeholder mb-7'>
          <div className='w-16 rounded-full bg-neutral text-neutral-content'>
            <span className='text-xl'>
              <BookOpen className='size-8' />
            </span>
          </div>
        </div>

        <label className='flex flex-col'>
          <div className='flex items-center gap-2 input input-bordered'>
            <Mail className='w-4 h-4 opacity-70' />
            <input name='email' type='text' className='grow' placeholder='Email' />
          </div>
          {state.errors?.email && <span className='text-red-500 text-sm'>{state.errors.email[0]}</span>}
        </label>

        <label className='flex flex-col'>
          <div className='flex items-center gap-2 input input-bordered'>
            <User className='w-4 h-4 opacity-70' />
            <input name='name' type='text' className='grow' placeholder='Username' />
          </div>
          {state.errors?.name && <span className='text-red-500 text-sm'>{state.errors.name[0]}</span>}
        </label>

        <label className='flex flex-col'>
          <div className='flex items-center gap-2 input input-bordered'>
            <Lock className='w-4 h-4 opacity-70' />
            <input
              name='password'
              type='password'
              className='grow'
              placeholder='Password'
              autoComplete='current-password'
            />
          </div>
          {state.errors?.password && <span className='text-red-500 text-sm'>{state.errors.password[0]}</span>}
        </label>

        <label className='flex flex-col'>
          <div className='flex items-center gap-2 input input-bordered'>
            <Lock className='w-4 h-4 opacity-70' />
            <input
              name='confirmPassword'
              type='password'
              className='grow'
              placeholder='Confirm Password'
              autoComplete='current-password'
            />
          </div>
          {state.errors?.confirmPassword && (
            <span className='text-red-500 text-sm'>{state.errors.confirmPassword[0]}</span>
          )}
        </label>

        <div className='form-control'>
          <label className='cursor-pointer label'>
            <span className='label-text'>Remember me</span>
            <input type='checkbox' defaultChecked className='checkbox checkbox-warning' />
          </label>
        </div>

        <div className='flex justify-center'>
          <SubmitButton title='Register' />
        </div>
      </div>
    </form>
  );
}
