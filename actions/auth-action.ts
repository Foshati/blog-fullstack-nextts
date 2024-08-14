'use server';

import { z } from 'zod';
import prismadb from '@/libs/prismadb';
import { hash, compare } from 'bcrypt';

// Sign Up Schema and Types
const SignUpSchema = z
  .object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

export type SignUpFormState = {
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
    confirmPassword?: string[];
  };
  message?: string;
  status?: 'success' | 'error';
};

//================ Sign Up Action ==================
export async function createUser(prevState: SignUpFormState, formData: FormData): Promise<SignUpFormState> {
  const name = formData.get('name');
  const email = formData.get('email');
  const password = formData.get('password');
  const confirmPassword = formData.get('confirmPassword');

  const validatedFields = SignUpSchema.safeParse({
    name,
    email,
    password,
    confirmPassword,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      status: 'error',
    };
  }

  try {
    const existingUser = await prismadb.user.findUnique({ where: { email: email as string } });
    if (existingUser) {
      return { message: 'User already exists', status: 'error' };
    }

    const hashedPassword = await hash(password as string, 12);

    await prismadb.user.create({
      data: {
        name: name as string,
        email: email as string,
        hashedPassword,
      },
    });

    return { message: 'User registered successfully', status: 'success' };
  } catch (error) {
    console.error('CreateUserAction', error);
    return { message: 'An error occurred while creating the user', status: 'error' };
  }
}

// Sign In Schema and Types
const SignInSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export type SignInFormState = {
  errors?: {
    email?: string[];
    password?: string[];
  };
  message?: string | null;
  status?: 'success' | 'error';
};

//================ Sign In Action ==================
export async function signInUser(prevState: SignInFormState, formData: FormData): Promise<SignInFormState> {
  const email = formData.get('email');
  const password = formData.get('password');

  const validatedFields = SignInSchema.safeParse({
    email,
    password,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      status: 'error',
    };
  }

  try {
    const user = await prismadb.user.findUnique({ where: { email: email as string } });
    if (!user?.hashedPassword) {
      return { message: 'Invalid email or password', status: 'error' };
    }

    const isPasswordValid = await compare(password as string, user.hashedPassword);
    if (!isPasswordValid) {
      return { message: 'Invalid email or password', status: 'error' };
    }

    // Instead of using signIn here, we'll return success
    // The actual sign in will be handled on the client side
    return { message: 'Credentials valid', status: 'success' };
  } catch (error) {
    console.error('SignInAction', error);
    return { message: 'An error occurred while signing in', status: 'error' };
  }
}
