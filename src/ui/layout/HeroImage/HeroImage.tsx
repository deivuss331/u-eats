import type { ComponentCommonProps } from 'types';
import heroImage from 'assets/images/tasty-food.webp';
import { StyledImage, StyledWrapper } from './HeroImage.styles';

function HeroImage({ className }: ComponentCommonProps): JSX.Element {
  return (
    <StyledWrapper className={className}>
      <StyledImage src={heroImage} alt="Tasty sushi" loading="lazy" />
    </StyledWrapper>
  );
}

export default HeroImage;
