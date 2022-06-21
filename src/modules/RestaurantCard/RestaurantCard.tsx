import { useTranslation } from 'react-i18next';
import { appPaths } from 'routes';
import type { RestaurantBriefData, ComponentCommonProps } from 'types';
import { IconAvgReview } from 'ui/icons';
import { RestaurantCardDeliveryInfo } from './components';
import { StyledImage, StyledTextRow, StyledHeadline, StyledLink } from './RestaurantCard.styles';

interface RestaurantCardProps extends ComponentCommonProps {
  restaurant: RestaurantBriefData;
}

function RestaurantCard({
  restaurant: { name, coverImg, reviews, delivery, slug },
  className,
}: RestaurantCardProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <StyledLink
      to={appPaths.restaurantReader(slug)}
      title={t("See {{restaurant}}'s menu", { restaurant: name })}
      className={className}
    >
      <StyledImage src={coverImg} alt={name} loading="lazy" />
      <StyledTextRow>
        <StyledHeadline as="h2">{name}</StyledHeadline>
        <IconAvgReview>{reviews.avg}</IconAvgReview>
      </StyledTextRow>
      <StyledTextRow>
        <RestaurantCardDeliveryInfo {...delivery} />
      </StyledTextRow>
    </StyledLink>
  );
}

export default RestaurantCard;
