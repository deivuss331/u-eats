import styled from 'styled-components';
import { transparentize } from 'polished';
import { Container } from 'ui/layout';

export const StyledFooter = styled.footer`
  margin-top: auto;
  background: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  padding: ${({ theme }) => theme.space[10]} 0;
`;

export const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledAppCredentials = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space[1]};
  justify-items: end;
  color: ${({ theme }) => transparentize(0.5, theme.color.white)};
`;
