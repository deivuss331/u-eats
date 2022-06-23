import FastFoodIcon from '@mui/icons-material/Fastfood';
import { useTranslation } from 'react-i18next';
import { useBasketController, useBasketHelper } from 'hooks';
import { RenderIf } from 'ui/helpers';
import { Container } from 'ui/layout';
import { StyledMotionWrapper, StyledHeadline } from './BasketOverviewBottomBar.styles';

function BasketOverviewBottomBar(): JSX.Element {
  const { t } = useTranslation();
  const {
    state: { order },
  } = useBasketController();
  const { totalValue } = useBasketHelper();

  const isVisible: boolean = Boolean(order.length);

  // WCAG: Render text content only if isVisible - it will prevent bugs with screen readers
  return (
    <StyledMotionWrapper animate={{ translateY: isVisible ? '0%' : '100%' }}>
      <Container>
        <RenderIf isTrue={isVisible}>
          <StyledHeadline>
            <FastFoodIcon />
            <span>
              {t('Items: {{qty}}', { qty: order.length })}, {totalValue.humanFriendly}
            </span>
          </StyledHeadline>
        </RenderIf>
      </Container>
    </StyledMotionWrapper>
  );
}

export default BasketOverviewBottomBar;
