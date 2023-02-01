import { useState, useEffect } from 'react';

const useScrolledWindow = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const onScrollHandler = () => {
    if (window.scrollY > 0) return setIsScrolled(true);
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
