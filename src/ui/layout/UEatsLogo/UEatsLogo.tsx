import type { ComponentCommonProps } from 'types';
import { H4 } from 'ui/typography';
import { ColorAccent } from './UEatsLogo.styles';

function UEatsLogo({ className }: ComponentCommonProps): JSX.Element {
  return (
    <H4 as="h2" className={className}>
      <ColorAccent>🍕 U</ColorAccent>-Eats
    </H4>
  );
}

export default UEatsLogo;
