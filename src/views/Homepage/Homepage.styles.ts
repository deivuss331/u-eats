import styled from 'styled-components';
import { HeroImage } from 'ui/layout';

export const StyledWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100vw;

  &:after {
    content: '';
    display: block;
    position: absolute;
    inset: 0;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.15) 100%);
  }
`;

export const StyledHeroImage = styled(HeroImage)`
  position: absolute;
  top: 0;
  left: 0;
`;
