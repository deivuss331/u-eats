import Skeleton from 'react-loading-skeleton';
import { Container, MainContent } from 'ui/layout';
import { RestaurantDishesTableSkeleton } from 'modules/RestaurantDishesTable';
import {
  StyledHeroImage,
  StyledHeroWrapper,
  StyledInlineAnnotationsList,
  StyledTopBar,
} from './RestaurantReader.styles';

function RestaurantReaderSkeleton(): JSX.Element {
  return (
    <MainContent>
      <StyledHeroWrapper>
        <StyledHeroImage as={Skeleton} />
      </StyledHeroWrapper>

      <Container>
        <StyledTopBar>
          <Skeleton width={280} />
        </StyledTopBar>

        <StyledInlineAnnotationsList>
          <li>
            <Skeleton width={200} />
          </li>
        </StyledInlineAnnotationsList>

        <RestaurantDishesTableSkeleton />
      </Container>
    </MainContent>
  );
}

export default RestaurantReaderSkeleton;
