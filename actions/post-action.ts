'use server';
import prismadb from '@/libs/prismadb';
import { revalidatePath } from 'next/cache';

export async function CreatePostAction(state: any, formData: FormData) {
  const title = formData.get('title');
  const body = formData.get('body');
  const image = formData.get('image');

  if (!title || !body || !image) {
    return { success: false, message: 'All fields are required' };
  }

  try {
    const address = String(title).split(' ').join('-').toLowerCase();
    await prismadb.post.create({
      data: {
        title: String(title),
        address,
        body: String(body),
        image: String(image),
      },
    });

    revalidatePath('/admin');
    return { success: true, message: 'New post created successfully' };
  } catch (error) {
    console.error('CreatePostAction', error);
    return { success: false, message: 'Error creating new post' };
  }
}

export const DeletePostAction = async (id: number) => {
  try {
    await prismadb.post.delete({
      where: {
        id,
      },
    });

    revalidatePath('/admin');
  } catch (error) {
    console.log('DeletePostAction', error);
  }
};

export async function UpdatePostAction(state: any, formData: FormData) {
  const id = formData.get('id');
  const title = formData.get('title');
  const body = formData.get('body');
  const image = formData.get('image');

  if (!id || !title || !body || !image) {
    return { success: false, message: 'All fields are required' };
  }

  try {
    const address = String(title).split(' ').join('-').toLowerCase();
    await prismadb.post.update({
      where: {
        id: Number(id),
      },
      data: {
        title: String(title),
        address,
        body: String(body),
        image: String(image),
      },
    });

    revalidatePath('/admin');
    return { success: true, message: 'Post updated successfully' };
  } catch (error) {
    console.error('UpdatePostAction', error);
    return { success: false, message: 'Error updating post' };
  }
}
