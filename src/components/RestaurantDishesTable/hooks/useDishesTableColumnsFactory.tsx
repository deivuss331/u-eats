import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import type { CellValue, Column, Row } from 'react-table';
import type { ApiRestaurantDishResponse } from 'types';
import { RestaurantDishTypes } from 'config/constants';
import { getDishTypesTranslated } from 'i18n/misc';
import { FormattedPrice, H6 } from 'ui/typography';
import { DishBasketButton } from 'components/RestaurantDishesTable/components';

const useDishesTableColumnsFactory = () => {
  const { t } = useTranslation();
  const dishTypesTranslated = getDishTypesTranslated(t);

  return useMemo<Column<ApiRestaurantDishResponse>[]>(
    () => [
      {
        Header: t('Name'),
        accessor: 'name',
        Cell: ({ value }: { value: CellValue<string> }) => <H6 as="h2">{value}</H6>,
      },
      {
        Header: t('Type'),
        accessor: 'type',
        Cell: ({ value }: { value: CellValue<RestaurantDishTypes> }) => (
          <span>{dishTypesTranslated[value]}</span>
        ),
      },
      {
        Header: t('Price'),
        accessor: 'pricePerItem',
        Cell: ({ value }: { value: CellValue<number> }) => <FormattedPrice value={value} />,
      },
      {
        Header: '',
        accessor: 'id',
        Cell: ({ row: { original: dishData } }: { row: Row<ApiRestaurantDishResponse> }) => (
          <DishBasketButton quantity={1} {...dishData} />
        ),
        disableSortBy: true,
      },
    ],
    [],
  );
};

export default useDishesTableColumnsFactory;
