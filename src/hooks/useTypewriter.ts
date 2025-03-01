import { useState, useEffect } from 'react';

interface TypewriterOptions {
  words: string[];
  loop?: boolean;
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
}

export function useTypewriter({
  words = [],
  loop = true,
  typeSpeed = 80,
  deleteSpeed = 50,
  delayBetweenWords = 1500,
}: TypewriterOptions) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    let timeout: NodeJS.Timeout;

    if (isWaiting) {
      timeout = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, delayBetweenWords);
      return () => clearTimeout(timeout);
    }

    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
        
        if (text.length <= 1) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }, deleteSpeed);
    } else {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
        
        if (text.length >= currentWord.length) {
          if (loop || wordIndex < words.length - 1) {
            setIsWaiting(true);
          }
        }
      }, typeSpeed);
    }

    return () => clearTimeout(timeout);
  }, [words, text, wordIndex, isDeleting, isWaiting, loop, typeSpeed, deleteSpeed, delayBetweenWords]);

  return text;
}