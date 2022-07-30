import styled from 'styled-components';
import { transparentize } from 'polished';

export const StyledTableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const StyledTable = styled.table`
  width: 100%;
  text-align: left;
  border-spacing: 0;

  thead th,
  tbody td {
    padding: ${({ theme }) => theme.space[2]} 0;
  }

  thead {
    th {
      background: ${({ theme }) => transparentize(0.25, theme.color.grey)};
    }
  }

  thead,
  tbody {
    tr {
      @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        display: grid;
        grid-template-columns: 50% 15% 10% 25%;
      }
    }
  }

  thead tr th,
  tbody tr td {
    padding-right: ${({ theme }) => theme.space[2]};

    @media screen and (max-width: calc(${({ theme }) => theme.breakpoints.lg} - 1px)) {
      min-width: 180px;
    }

    &:first-child {
      padding-left: ${({ theme }) => theme.space[2]};
    }

    &:last-child {
      text-align: right;
    }
  }

  tbody {
    td {
      border-bottom: 1px solid ${({ theme }) => transparentize(0.75, theme.color.black)};
    }

    tr:nth-child(even) td {
      background: ${({ theme }) => transparentize(0.75, theme.color.grey)};
    }
  }
`;
