import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TextSm } from 'ui/typography';

export const StyledLink = styled(Link)`
  display: grid;
  padding: ${({ theme }) => theme.space[2]} ${({ theme }) => theme.space[4]};
  color: inherit;

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.color.greyLight};
  }
`;

export const StyledTextSm = styled(TextSm)`
  opacity: 0.5;
  padding-top: 3px;
`;
