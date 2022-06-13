import { usePopper } from 'react-popper';
import { useRef } from 'react';

const useSelectListPosition = () => {
  const buttonWrapperRef = useRef() as React.MutableRefObject<HTMLDivElement | null>;
  const listWrapperRef = useRef() as React.MutableRefObject<HTMLDivElement | null>;
  const { styles, attributes } = usePopper(buttonWrapperRef.current, listWrapperRef.current);

  return { buttonWrapperRef, listWrapperRef, styles, attributes };
};

export default useSelectListPosition;
