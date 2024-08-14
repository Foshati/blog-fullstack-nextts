import Container from '@/components/ui/container';
import prismadb from '@/libs/prismadb';
import { getSliceWords } from '@/libs/utils';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default async function BlogPage() {
  const posts = await prismadb.post.findMany({
    orderBy: {
      id: 'desc',
    },
  });

  return (
    <Container className='py-8 sm:py-12'>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {posts.map((post) => (
          <div
            key={post.id}
            className='card bg-black text-white shadow-xl transition duration-300 hover:scale-105 hover:shadow-2xl'
          >
            <figure className='relative h-48 w-full'>
              <Image src={post.image} alt={post.title} fill sizes='100%' className='object-cover' />
            </figure>
            <div className='card-body'>
              <h2 className='card-title text-[#ffaa05]'>{post.title}</h2>
              <p className='text-gray-300'>{getSliceWords(post.body, 20)} ...</p>
              <div className='card-actions justify-end mt-4'>
                <Link href={`/blog/${post.address}`} className='btn btn-neutral btn-sm'>
                  Read More
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
