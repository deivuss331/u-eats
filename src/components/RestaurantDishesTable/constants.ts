import type { ApiRestaurantDishResponse } from 'types';

export const SORTABLE_COLUMNS: Record<keyof ApiRestaurantDishResponse, boolean> = {
  id: false,
  name: true,
  type: true,
  pricePerItem: true,
};
