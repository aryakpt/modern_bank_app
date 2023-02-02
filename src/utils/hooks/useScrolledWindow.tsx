import { useState, useEffect } from 'react';

const useScrolledWindow = (height: number) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const onScrollHandler = () => {
    if (window.scrollY > height) return setIsScrolled(true);
    return setIsScrolled(false);
  };

  useEffect(() => {
    addEventListener('scroll', onScrollHandler);
    return () => {
      removeEventListener('scroll', onScrollHandler);
    };
  }, []);

  return isScrolled;
};

export default useScrolledWindow;
