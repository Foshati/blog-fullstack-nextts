import { cn } from '@/libs/utils';
import logoPng from '@/public/img/foshatiLogo.png';
import Image from 'next/image';

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <div className={cn('relative w-[39px] h-[39px]', className)}>
      <Image
        src={logoPng}
        alt='blog-logo'
        fill
        /* sizes="10vw" */
        sizes='(max-width: 768px) 39px, 50px'
        priority
        className='object-contain'
      />
    </div>
  );
}
