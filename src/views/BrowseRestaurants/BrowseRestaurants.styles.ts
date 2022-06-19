import styled from 'styled-components';
import { Pagination } from 'ui/layout';

export const StyledPagination = styled(Pagination)`
  margin-top: ${({ theme }) => theme.space[10]};
  display: grid;
  place-items: center;
`;
