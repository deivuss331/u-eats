import { useState, useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

const useSuggestedCitiesListController = () => {
  const [isInputFocused, setIsInputFocused] = useState<Boolean>(false);
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement | null>;
  const wrapperRef = useRef() as React.MutableRefObject<HTMLDivElement | null>;

  const hasInputValue: boolean = Boolean(inputRef.current?.value);
  const isListVisible: boolean = isInputFocused && hasInputValue;

  const onInputFocus = () => setIsInputFocused(true);

  useOnClickOutside(wrapperRef, () => setIsInputFocused(false));

  return {
    inputRef,
    wrapperRef,
    onInputFocus,
    isListVisible,
  };
};

export default useSuggestedCitiesListController;
