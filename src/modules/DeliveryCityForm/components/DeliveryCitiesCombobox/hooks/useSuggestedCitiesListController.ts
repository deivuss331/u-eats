import { useState, useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

const useSuggestedCitiesListController = () => {
  const [isInputFocused, setIsInputFocused] = useState<Boolean>(false);
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement | null>;

  const hasInputValue: boolean = Boolean(inputRef.current?.value);
  const isListVisible: boolean = isInputFocused && hasInputValue;

  const onInputFocus = () => setIsInputFocused(true);

  useOnClickOutside(inputRef, () => setIsInputFocused(false));

  return {
    inputRef,
    onInputFocus,
    isListVisible,
  };
};

export default useSuggestedCitiesListController;
