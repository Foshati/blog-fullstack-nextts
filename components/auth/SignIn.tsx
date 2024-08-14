'use client';

import { Mail, Lock, BookOpen } from 'lucide-react';
import { useFormState } from 'react-dom';
import { useEffect, useRef } from 'react';
import { signInUser, SignInFormState } from '@/actions/auth-action';
import { toast } from 'sonner';
import SubmitButton from '../ui/button/submit-button';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

interface SignInProps {
  onSuccess: () => void;
}

export default function SignIn({ onSuccess }: SignInProps) {
  const [state, formAction] = useFormState<SignInFormState, FormData>(signInUser, {});
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleSignIn = async () => {
      if (state.status === 'success' && formRef.current) {
        try {
          const email = formRef.current.email as HTMLInputElement;
          const password = formRef.current.password as HTMLInputElement;

          const result = await signIn('credentials', {
            email: email.value,
            password: password.value,
            redirect: false,
          });

          if (result?.error) {
            toast.error(result.error);
          } else {
            toast.success('Logged in successfully');
            onSuccess();
            router.push('/');
            window.location.reload();
          }
        } catch (error) {
          console.error('Sign in error:', error);
          toast.error('An error occurred during sign in');
        }
      } else if (state.message) {
        toast[state.status || 'error'](state.message);
      }
    };

    void handleSignIn();
  }, [state, router, onSuccess]);
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
            <input name='email' type='text' className='grow' placeholder='Email' autoComplete='email' />
          </div>
          {state.errors?.email && <span className='text-red-500 text-sm'>{state.errors.email[0]}</span>}
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

        <div className='form-control'>
          <label className='cursor-pointer label'>
            <span className='label-text'>Remember me</span>
            <input type='checkbox' defaultChecked className='checkbox checkbox-warning' />
          </label>
        </div>

        <div className='flex justify-center'>
          <SubmitButton title='Log In' />
        </div>
      </div>
    </form>
  );
}
