import type { ComponentCommonProps } from 'types';
import { appPaths } from 'routes';
import { StyledHeadline, ColorAccent, StyledLink } from './UEatsLogo.styles';

function UEatsLogo({ className }: ComponentCommonProps): JSX.Element {
  return (
    <StyledHeadline as="h2" className={className}>
      <StyledLink to={appPaths.root()}>
        <ColorAccent>🍕 U</ColorAccent>-Eats
      </StyledLink>
    </StyledHeadline>
  );
}

export default UEatsLogo;
