import { Alert, Container, MainContent } from 'ui/layout';

interface BrowseRestaurantsErrorProps {
  msg: string;
}

function BrowseRestaurantsError({ msg }: BrowseRestaurantsErrorProps): JSX.Element {
  return (
    <Container>
      <MainContent>
        <Alert severity="error">{msg}</Alert>
      </MainContent>
    </Container>
  );
}

export default BrowseRestaurantsError;
