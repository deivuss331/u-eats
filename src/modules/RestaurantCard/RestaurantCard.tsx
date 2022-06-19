import type { RestaurantBriefData, ComponentCommonProps } from 'types';
import { IconAvgReview } from 'ui/icons';
import { RestaurantCardDeliveryInfo } from './components';
import { StyledImage, StyledTextRow, StyledHeadline } from './RestaurantCard.styles';

interface RestaurantCardProps extends ComponentCommonProps {
  restaurant: RestaurantBriefData;
}

function RestaurantCard({
  restaurant: { name, coverImg, reviews, delivery },
  className,
}: RestaurantCardProps): JSX.Element {
  return (
    <article className={className}>
      <StyledImage src={coverImg} alt={name} loading="lazy" />
      <StyledTextRow>
        <StyledHeadline as="h2">{name}</StyledHeadline>
        <IconAvgReview>{reviews.avg}</IconAvgReview>
      </StyledTextRow>
      <StyledTextRow>
        <RestaurantCardDeliveryInfo {...delivery} />
      </StyledTextRow>
    </article>
  );
}

export default RestaurantCard;
