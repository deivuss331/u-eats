import { useTranslation } from 'react-i18next';
import { useBasketController } from 'hooks';
import { Button } from 'ui/form';
import type { RestaurantDishInBasket } from 'types';

function DishBasketButton(dish: RestaurantDishInBasket): JSX.Element {
  const { t } = useTranslation();
  const { addOrderDish, removeOrderDish, isDishInBasket } = useBasketController();

  const { id } = dish;

  return isDishInBasket(id) ? (
    <Button onClick={() => removeOrderDish(dish)}>{t('Remove from basket')}</Button>
  ) : (
    <Button onClick={() => addOrderDish(dish)} variant="outlined">
      {t('Add to basket')}
    </Button>
  );
}

export default DishBasketButton;
