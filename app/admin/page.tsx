import { PostFormAdmin } from '@/components/admin/postFormAdmin';
import { PostListAdmin } from '@/components/admin/postListAdmin';
import Container from '@/components/ui/container';
import { authOptions } from '@/libs/next-auth';
import { getServerSession } from 'next-auth';
import React from 'react';

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session || session.user.userRole !== 'ADMIN') {
    return (
      <div className='flex flex-col items-center justify-center h-screen '>
        <p className='text-red-500 text-2xl'>Only admin users can access this page</p>
      </div>
    );
  }

  return (
    <Container className='my-10'>
      <div className='grid grid-cols-2'>
        <div>
          <PostFormAdmin />
        </div>
        <div>
          <PostListAdmin />
        </div>
      </div>
    </Container>
  );
}
