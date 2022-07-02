import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import type { CellValue, Column, Row } from 'react-table';
import type { RestaurantDish, RestaurantDishInBasket } from 'types';
import { RestaurantDishTypes } from 'config/constants';
import { useBasketController } from 'hooks';
import { dishTypesTranslated } from 'i18n/misc';
import { Button } from 'ui/form';
import { FormattedPrice, H6 } from 'ui/typography';

const useDishesTableColumns = () => {
  const { t } = useTranslation();
  const { state, addOrderDish, removeOrderDish, isDishInBasket } = useBasketController();
  const columns = useMemo<Column<RestaurantDish>[]>(
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
        Cell: ({
          value: id,
          row: { original: dishData },
        }: {
          value: CellValue<string>;
          row: Row<RestaurantDish>;
        }) => {
          const dishInBasketData: RestaurantDishInBasket = { quantity: 1, ...dishData };

          return isDishInBasket(id) ? (
            <Button onClick={() => removeOrderDish(dishInBasketData)}>{t('Remove from basket')}</Button>
          ) : (
            <Button onClick={() => addOrderDish(dishInBasketData)} variant="outlined">
              {t('Add to basket')}
            </Button>
          );
        },
      },
    ],
    [state.order],
  );

  return columns;
};

export default useDishesTableColumns;
