import styled from 'styled-components';
import { HeroImage } from 'ui/layout';

export const StyledWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100vw;
`;

export const StyledHeroImage = styled(HeroImage)`
  position: absolute;
  top: 0;
  left: 0;
`;
