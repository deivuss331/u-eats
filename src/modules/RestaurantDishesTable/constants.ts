import type { RestaurantDish } from 'types';

export const SORTABLE_COLUMNS: Record<keyof RestaurantDish, boolean> = {
  id: false,
  name: true,
  type: true,
  pricePerItem: true,
};
