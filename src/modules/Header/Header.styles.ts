import styled from 'styled-components';
import { ButtonIcon } from 'ui/form';
import { Container, UEatsLogo } from 'ui/layout';

interface StyledHeaderProps {
  $hasVisibleBackground: boolean;
}

export const StyledHeader = styled.header<StyledHeaderProps>`
  position: fixed;
  top: 0;
  left: 50%;
  z-index: ${({ theme }) => theme.zIndex.header};
  transform: translateX(-50%);
  width: 100%;

  &:before {
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    inset: 0;
    background: ${({ theme }) => theme.color.background};
    box-shadow: ${({ theme }) => theme.boxShadow.popup};
    opacity: ${({ $hasVisibleBackground }) => ($hasVisibleBackground ? 1 : 0)};
    transform: ${({ $hasVisibleBackground }) => ($hasVisibleBackground ? null : `translateY(-100%)`)};
    transition: transform 0.24s ease-in-out, opacity 0.28s ease-in-out;
  }
`;

export const StyledContainer = styled(Container)`
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
