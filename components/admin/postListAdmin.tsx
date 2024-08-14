import prismadb from '@/libs/prismadb';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { DeletePostButton } from './deletePostButton';

export const PostListAdmin = async () => {
  const posts = await prismadb.post.findMany({
    orderBy: {
      id: 'desc',
    },
  });

  return (
    <div className='m-4'>
      <div className='space-y-6'>
        {posts.map((post) => (
          <div key={post.id} className='flex flex-col lg:flex-row gap-4 bg-black p-4 rounded-md shadow-lg'>
            <div className='flex-shrink-0'>
              <Image
                src={post.image}
                height={240}
                width={240}
                alt={post.title}
                className='rounded-md border border-gray-700 object-cover shadow-md'
              />
            </div>
            <div className='flex flex-1 flex-col justify-between'>
              <div>
                <h3 className='text-2xl font-bold text-white'>{post.title}</h3>
                <p className='mt-2 text-gray-300 hidden lg:block'>{post.body.slice(0, 100)}...</p>
              </div>
              <div className='mt-4 lg:mt-0 flex gap-2'>
                <DeletePostButton id={post.id} />
                <Link href={`/blog/${post.address}`} className='btn btn-info'>
                  <ExternalLink className='w-5 h-5' />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
