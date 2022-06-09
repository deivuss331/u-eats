import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 100vh;
  z-index: ${({ theme }) => theme.zIndex.heroImage};
`;

export const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-position: center;
  object-fit: cover;
`;
