import { DeliveryCityForm } from 'modules';
import { Container } from 'ui/layout';
import { StyledWrapper, StyledHeroImage } from './Homepage.styles';

function Homepage(): JSX.Element {
  return (
    <StyledWrapper>
      <StyledHeroImage />
      <Container>
        <DeliveryCityForm />
      </Container>
    </StyledWrapper>
  );
}

export default Homepage;
