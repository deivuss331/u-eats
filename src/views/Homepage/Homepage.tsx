import { Container } from 'ui/layout';
import { StyledWrapper, StyledHeroImage } from './Homepage.styles';

function Homepage(): JSX.Element {
  return (
    <StyledWrapper>
      <StyledHeroImage />
      <Container>
        <p>eee</p>
      </Container>
    </StyledWrapper>
  );
}

export default Homepage;
