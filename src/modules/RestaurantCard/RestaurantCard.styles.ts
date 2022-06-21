import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { H5 } from 'ui/typography';

export const StyledLink = styled(Link)`
  display: block;

  &,
  &:hover,
  &:focus {
    color: inherit;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  object-position: center;
  margin-bottom: ${({ theme }) => theme.space[2]};
`;

export const StyledTextRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space[4]};
  margin-top: ${({ theme }) => theme.space[1]};
`;

export const StyledHeadline = styled(H5)`
  margin-bottom: 0;
`;
