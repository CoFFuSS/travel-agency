import { useEffect, useRef, useState } from 'react';

export const useInfiniteScrolling = () => {
  const [showItems, setShowItems] = useState(1);
  const observerTarget = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowItems((prev) => prev + 1);
        }
      },
      { threshold: 1 },
    );

    const target = observerTarget.current;

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return [showItems, observerTarget] as const;
};
