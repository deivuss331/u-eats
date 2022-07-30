import { useTranslation } from 'react-i18next';
import type { ApiRestaurantDataResponse } from 'types';
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

type RestaurantReaderProps = ApiRestaurantDataResponse;

function RestaurantReader({
  coverImg,
  name,
  reviews,
  opens,
  delivery,
  address,
  menu,
}: RestaurantReaderProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <MainContent>
      <StyledHeroWrapper>
        <StyledHeroImage src={coverImg} alt={name} loading="lazy" />
      </StyledHeroWrapper>

      <Container>
        <StyledTopBar>
          <StyledHeadline>{name}</StyledHeadline>
          <IconAvgReview title={t('Average review')}>{reviews.avg}</IconAvgReview>
        </StyledTopBar>

        <StyledInlineAnnotationsList>
          <li>
            <RestaurantOpenStatus {...opens} />
          </li>
          <li>
            <RestaurantDeliveryInfo {...delivery} />
          </li>
          <li>
            <RestaurantAddressInfo {...address} />
          </li>
        </StyledInlineAnnotationsList>

        <RestaurantDishesTable dishes={menu} />
      </Container>
    </MainContent>
  );
}

export default RestaurantReader;
