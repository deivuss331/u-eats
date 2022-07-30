import { useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';
import type { ApiRestaurantDishResponse } from 'types';
import { useDishesTableColumnsFactory } from './hooks';
import { StyledTableWrapper, StyledTable } from './RestaurantDishesTable.styles';

interface RestaurantDishesTableProps {
  dishes: ApiRestaurantDishResponse[];
}

function RestaurantDishesTable({ dishes }: RestaurantDishesTableProps): JSX.Element {
  const data = useMemo(() => dishes, [dishes]);
  const columns = useDishesTableColumnsFactory();
  const { getTableProps, rows, getTableBodyProps, headerGroups, prepareRow } =
    useTable<ApiRestaurantDishResponse>(
      {
        columns,
        data,
      },
      useSortBy,
    );

  return (
    <StyledTableWrapper>
      <StyledTable {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr key={headerGroup.headers[index].id}>
              {headerGroup.headers.map((column) => {
                const isSortable = column.canSort;

                return (
                  <th {...column.getHeaderProps(isSortable ? column.getSortByToggleProps() : undefined)}>
                    {column.render('Header')}
                    {isSortable ? (
                      <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ' ↕️'}</span>
                    ) : null}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);

            return (
              <tr key={row.id}>
                {row.cells.map((cell) => (
                  <td key={cell.column.id + cell.row.id}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
    </StyledTableWrapper>
  );
}

export default RestaurantDishesTable;
