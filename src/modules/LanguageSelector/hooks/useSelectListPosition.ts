import { useRef } from 'react';
import { usePopper } from 'react-popper';

const useSelectListPosition = () => {
  const buttonWrapperRef = useRef() as React.MutableRefObject<HTMLDivElement | null>;
  const listWrapperRef = useRef() as React.MutableRefObject<HTMLDivElement | null>;
  const { styles, attributes } = usePopper(buttonWrapperRef.current, listWrapperRef.current);

  return { buttonWrapperRef, listWrapperRef, styles, attributes };
};

export default useSelectListPosition;
