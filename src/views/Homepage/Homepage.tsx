import { useTranslation } from 'react-i18next';
import { DeliveryCityForm } from 'modules';
import { StyledWrapper, StyledHeroImage, StyledHeroContainer, StyledMain, StyledH1 } from './Homepage.styles';

function Homepage(): JSX.Element {
  const { t } = useTranslation();

  return (
    <StyledWrapper>
      <StyledHeroImage />
      <StyledHeroContainer>
        <StyledMain>
          <StyledH1>{t('Find your favorite restaurants nearby!')}</StyledH1>
          <DeliveryCityForm />
        </StyledMain>
      </StyledHeroContainer>
    </StyledWrapper>
  );
}

export default Homepage;
