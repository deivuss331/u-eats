import { useTranslation } from 'react-i18next';
import { appPaths } from 'routes';
import type { ApiRestaurantBriefDataResponse, ComponentCommonProps } from 'types';
import { IconAvgReview } from 'ui/icons';
import { RestaurantDeliveryInfo } from 'ui/layout';
import { StyledImage, StyledTextRow, StyledHeadline, StyledLink } from './RestaurantCard.styles';

interface RestaurantCardProps extends ComponentCommonProps {
  restaurant: ApiRestaurantBriefDataResponse;
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
        <IconAvgReview title={t('Average review')}>{reviews.avg}</IconAvgReview>
      </StyledTextRow>
      <StyledTextRow>
        <RestaurantDeliveryInfo {...delivery} />
      </StyledTextRow>
    </StyledLink>
  );
}

export default RestaurantCard;
