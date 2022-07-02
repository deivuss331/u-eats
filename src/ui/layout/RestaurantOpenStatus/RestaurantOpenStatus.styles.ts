import styled from 'styled-components';
import { TextBase } from 'ui/typography';

interface StatusProps {
  $isOpen: boolean;
}

export const StyledWrapper = styled(TextBase)<StatusProps>`
  display: flex;
  align-items: center;
  color: ${({ theme, $isOpen }) => ($isOpen ? theme.color.success : theme.color.danger)};
`;

export const StyledStatusIcon = styled.span<StatusProps>`
  padding: 8px 8px 0 0;
  border-radius: 100px;
  background: ${({ theme, $isOpen }) => ($isOpen ? theme.color.success : theme.color.danger)};
  margin-right: ${({ theme }) => theme.space[1]};
`;
