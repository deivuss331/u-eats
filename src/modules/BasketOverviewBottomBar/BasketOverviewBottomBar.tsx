import FastFoodIcon from '@mui/icons-material/Fastfood';
import { useTranslation } from 'react-i18next';
import { useBasketController, useBasketHelper } from 'hooks';
import { Button } from 'ui/form';
import { RenderIf } from 'ui/helpers';
import {
  StyledMotionWrapper,
  StyledHeadline,
  StyledHeadlineGridWrapper,
  StyledContainer,
} from './BasketOverviewBottomBar.styles';

function BasketOverviewBottomBar(): JSX.Element {
  const { t } = useTranslation();
  const {
    state: { order },
  } = useBasketController();
  const { totalValue } = useBasketHelper();

  const isVisible: boolean = Boolean(order.length);

  // WCAG: Render text content only if isVisible - it will prevent bugs with screen readers
  return (
    <StyledMotionWrapper animate={{ translateY: isVisible ? '0%' : '100%' }} initial={false}>
      <RenderIf isTrue={isVisible}>
        <StyledContainer>
          <StyledHeadline>
            <FastFoodIcon />
            <StyledHeadlineGridWrapper>
              <span>{t('To pay: {{amount}}', { amount: totalValue.humanFriendly })}</span>
              <span>{t('Items: {{qty}}', { qty: order.length })}</span>
            </StyledHeadlineGridWrapper>
          </StyledHeadline>
          <Button type="button">{t('Go to basket')}</Button>
        </StyledContainer>
      </RenderIf>
    </StyledMotionWrapper>
  );
}

export default BasketOverviewBottomBar;
