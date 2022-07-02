import { RestaurantDishTypes } from 'config/constants';
import i18n from 'i18n';

const translated: Record<RestaurantDishTypes, string> = {
  [RestaurantDishTypes.BURGER]: i18n.t('Burger'),
  [RestaurantDishTypes.SOUP]: i18n.t('Soup'),
  [RestaurantDishTypes.THAI]: i18n.t('Thai'),
  [RestaurantDishTypes.PIZZA]: i18n.t('Pizza'),
  [RestaurantDishTypes.VEGETARIAN]: i18n.t('Vegetarian'),
};

export default translated;
