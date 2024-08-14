'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { AuroraBackground } from './aurora-background';
import { TypeAnimation } from 'react-type-animation';

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className='relative flex flex-col items-center justify-center gap-4 px-4'
      >
        <div className='text-3xl font-bold text-center md:text-7xl dark:text-white'>
          Background lights are cool you know.
        </div>
        <div>
          <TypeAnimation
            className='text-[#ffaa05]'
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'We produce food for Mice',
              3000, // wait 1s before replacing "Mice" with "Hamsters"
              'We produce food for Hamsters',
              3000,
              'We produce food for Guinea Pigs',
              3000,
              'We produce food for Chinchillas',
              3000,
            ]}
            wrapper='span'
            speed={5}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
            //  cursor='false'
            cursor={false as boolean | undefined}
          />
        </div>

        <button className='px-4 py-2 text-white bg-black rounded-full dark:bg-white w-fit dark:text-black'>
          Debug now
        </button>
      </motion.div>
    </AuroraBackground>
  );
}
