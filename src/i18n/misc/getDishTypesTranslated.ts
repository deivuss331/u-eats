import type { TFunction } from 'react-i18next';
import { RestaurantDishTypes } from 'config/constants';

export default (t: TFunction): Record<RestaurantDishTypes, string> => ({
  [RestaurantDishTypes.BURGER]: t('Burger'),
  [RestaurantDishTypes.SOUP]: t('Soup'),
  [RestaurantDishTypes.THAI]: t('Thai'),
  [RestaurantDishTypes.PIZZA]: t('Pizza'),
  [RestaurantDishTypes.VEGETARIAN]: t('Vegetarian'),
});
