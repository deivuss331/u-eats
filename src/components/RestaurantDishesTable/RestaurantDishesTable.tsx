import { useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';
import type { ApiRestaurantDishResponse } from 'types';
import { useDishesTableColumns } from './hooks';
import { SORTABLE_COLUMNS } from './constants';
import { StyledTableWrapper, StyledTable } from './RestaurantDishesTable.styles';

interface RestaurantDishesTableProps {
  dishes: ApiRestaurantDishResponse[];
}

function RestaurantDishesTable({ dishes }: RestaurantDishesTableProps): JSX.Element {
  const data = useMemo(() => dishes, [dishes]);
  const columns = useDishesTableColumns();
  const { getTableProps, rows, getTableBodyProps, headerGroups, prepareRow } =
    useTable<ApiRestaurantDishResponse>(
      {
        columns,
        data,
      },
      useSortBy,
    );

  // TODO
  const isSortableColumn = (id: keyof ApiRestaurantDishResponse): boolean => SORTABLE_COLUMNS[id];

  return (
    <StyledTableWrapper>
      <StyledTable {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr key={headerGroup.headers[index].id}>
              {headerGroup.headers.map((column) => {
                const isSortable = isSortableColumn(column.id as keyof ApiRestaurantDishResponse);

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
