import styled from 'styled-components';
import { ButtonIcon } from 'ui/form';
import { Container, UEatsLogo } from 'ui/layout';

export const StyledContainer = styled(Container)`
  position: fixed;
  top: 0;
  left: 50%;
  z-index: ${({ theme }) => theme.zIndex.header};
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space[4]};
  padding-top: ${({ theme }) => theme.space[4]};
  padding-bottom: ${({ theme }) => theme.space[4]};
`;

export const StyledButtonIcon = styled(ButtonIcon)`
  && {
    color: inherit;
  }
`;

export const StyledUEatsLogo = styled(UEatsLogo)`
  margin-right: auto;
`;
