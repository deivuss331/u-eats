import { useParams } from 'react-router-dom';
import { useGetRestaurantData } from 'hooks/api';
import { MainContent, Container } from 'ui/layout';
import { IconAvgReview } from 'ui/icons';
import { StyledHeroImage, StyledHeroWrapper, StyledTopBar, StyledHeadline } from './RestaurantReader.styles';

function RestaurantReader(): JSX.Element {
  const { id = '' } = useParams();
  const { data } = useGetRestaurantData({ id });

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
            {data.menu.map(({ id: dishId, name }) => (
              <p key={dishId}>{name}</p>
            ))}
          </Container>
        </>
      ) : null}
    </MainContent>
  );
}

export default RestaurantReader;
