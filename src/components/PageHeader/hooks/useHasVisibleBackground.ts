import { useEffect, useState } from 'react';
import { useViewportScroll } from 'framer-motion';

const useHasVisibleBackground = (): boolean => {
  const [hasVisibleBackground, setHasVisibleBackground] = useState<boolean>(false);
  const { scrollYProgress } = useViewportScroll();

  useEffect(() => {
    scrollYProgress.onChange((yProgress) => {
      setHasVisibleBackground(yProgress > 0);
    });
  }, [scrollYProgress]);

  return hasVisibleBackground;
};

export default useHasVisibleBackground;
