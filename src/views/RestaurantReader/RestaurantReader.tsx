import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useGetRestaurantData } from 'hooks/api';
import { RestaurantDishesTable } from 'modules';
import {
  MainContent,
  Container,
  RestaurantDeliveryInfo,
  RestaurantAddressInfo,
  RestaurantOpenStatus,
} from 'ui/layout';
import { IconAvgReview } from 'ui/icons';
import {
  StyledHeroImage,
  StyledHeroWrapper,
  StyledTopBar,
  StyledHeadline,
  StyledInlineAnnotationsList,
} from './RestaurantReader.styles';

function RestaurantReader(): JSX.Element {
  const { t } = useTranslation();
  const { id: restaurantId = '' } = useParams();
  const { data: restaurant } = useGetRestaurantData({ id: restaurantId });

  return (
    <MainContent>
      {restaurant ? (
        <>
          <StyledHeroWrapper>
            <StyledHeroImage src={restaurant.coverImg} alt={restaurant.name} loading="lazy" />
          </StyledHeroWrapper>
          <Container>
            <StyledTopBar>
              <StyledHeadline>{restaurant.name}</StyledHeadline>
              <IconAvgReview title={t('Average review')}>{restaurant.reviews.avg}</IconAvgReview>
            </StyledTopBar>
            <StyledInlineAnnotationsList>
              <li>
                <RestaurantOpenStatus {...restaurant.opens} />
              </li>
              <li>
                <RestaurantDeliveryInfo {...restaurant.delivery} />
              </li>
              <li>
                <RestaurantAddressInfo {...restaurant.address} />
              </li>
            </StyledInlineAnnotationsList>
            <RestaurantDishesTable dishes={restaurant.menu} />
          </Container>
        </>
      ) : null}
    </MainContent>
  );
}

export default RestaurantReader;
