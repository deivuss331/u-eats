import { useParams } from 'react-router-dom';
import { useBasketController } from 'hooks';
import { useGetRestaurantData } from 'hooks/api';
import { MainContent, Container } from 'ui/layout';
import { IconAvgReview } from 'ui/icons';
import { StyledHeroImage, StyledHeroWrapper, StyledTopBar, StyledHeadline } from './RestaurantReader.styles';

function RestaurantReader(): JSX.Element {
  const { id: restaurantId = '' } = useParams();
  const { data } = useGetRestaurantData({ id: restaurantId });
  const { addOrderDish } = useBasketController();

  return (
    <MainContent>
      {data ? (
        <>
          <StyledHeroWrapper>
            <StyledHeroImage src={data.coverImg} alt={data.name} loading="lazy" />
          </StyledHeroWrapper>
          <Container>
            <StyledTopBar>
              <StyledHeadline>{data.name}</StyledHeadline>
              <IconAvgReview>{data.reviews.avg}</IconAvgReview>
            </StyledTopBar>
            {data.menu.map(({ id: dishId, ...dish }) => (
              <button
                type="button"
                onClick={() => addOrderDish({ dish: { quantity: 1, ...dish }, dishId, restaurantId })}
                key={dishId}
              >
                {dish.name}
              </button>
            ))}
          </Container>
        </>
      ) : null}
    </MainContent>
  );
}

export default RestaurantReader;
