import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { H4 } from 'ui/typography';

export const StyledLink = styled(Link)`
  &,
  &:hover,
  &:focus {
    color: inherit;
  }
`;

export const StyledHeadline = styled(H4)`
  margin-bottom: 0;
`;

export const ColorAccent = styled.span`
  color: ${({ theme }) => theme.color.accent};
`;
