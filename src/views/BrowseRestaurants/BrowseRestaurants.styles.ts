import styled from 'styled-components';
import { Pagination } from 'ui/layout';
import { RestaurantsFilters } from 'modules';

export const StyledPagination = styled(Pagination)`
  margin-top: ${({ theme }) => theme.space[10]};
  display: grid;
  place-items: center;
`;

export const StyledContentGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space[4]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 4fr;
  }
`;

export const StyledRestaurantsFilters = styled(RestaurantsFilters)`
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    position: sticky;
    top: 100px;
  }
`;
