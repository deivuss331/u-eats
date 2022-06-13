import styled from 'styled-components';
import { HeroImage, Container } from 'ui/layout';
import { H1 } from 'ui/typography';

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

export const StyledHeroContainer = styled(Container)`
  height: 100vh;
  display: grid;
  align-items: center;
`;

export const StyledMain = styled.main`
  width: 100%;
  max-width: 740px;
  background: ${({ theme }) => theme.color.white};
  padding: ${({ theme }) => theme.space[6]} ${({ theme }) => theme.space[8]};
  box-shadow: ${({ theme }) => theme.boxShadow.popup};
`;

export const StyledH1 = styled(H1)`
  margin-bottom: ${({ theme }) => theme.space[8]};
`;
