import styled from 'styled-components';
import { H6 } from 'ui/typography';

export const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  background: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.boxShadow.popup};
  z-index: ${({ theme }) => theme.zIndex.popup};
`;

export const StyledHeadline = styled(H6)`
  padding: 0 ${({ theme }) => theme.space[4]};
  margin: ${({ theme }) => theme.space[2]} 0;
`;
