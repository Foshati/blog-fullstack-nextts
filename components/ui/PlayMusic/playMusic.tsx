'use client';

import { useState, useRef, useEffect } from 'react';
import { Disc3 } from 'lucide-react';

const MusicIco: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio('/audio/andyfa.mp3');
    audio.loop = true;
    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        void audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      <div onClick={togglePlay}>{isPlaying ? <Disc3 className='animate-spin' /> : <Disc3 />}</div>
    </div>
  );
};

export default MusicIco;
