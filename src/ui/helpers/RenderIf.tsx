import React from 'react';

interface IProps {
  isTrue: boolean;
  children: React.ReactElement;
  else?: React.ReactElement | null | undefined;
}

function RenderIf({ children, isTrue, else: elseElement = null }: IProps): JSX.Element | null {
  if (isTrue) {
    return children;
  }

  return elseElement;
}

export default RenderIf;
