import Container from '@/components/ui/container';
import prismadb from '@/libs/prismadb';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';

export default async function SinglePostPage({ params }: { params: { slug: string } }) {
  const post = await prismadb.post.findUnique({
    where: {
      address: decodeURI(params.slug),
    },
  });

  if (!post) notFound();

  return (
    <Container className='py-8 sm:py-12'>
      <article className='prose prose-lg max-w-none'>
        <div className='relative h-60 w-full overflow-hidden rounded-lg shadow-xl md:h-96 mb-8'>
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes='100vw'
            className='object-cover object-center'
            quality={100}
          />
        </div>
        <h1 className='text-4xl font-bold mb-6 text-center text-[#ffaa05]'>{post.title}</h1>
        <div className='space-y-6 text-justify'>
          {post.body.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </Container>
  );
}
