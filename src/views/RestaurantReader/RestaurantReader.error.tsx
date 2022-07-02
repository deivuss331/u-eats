import { Alert, Container, MainContent } from 'ui/layout';

interface RestaurantReaderErrorProps {
  msg: string;
}

function RestaurantReaderError({ msg }: RestaurantReaderErrorProps): JSX.Element {
  return (
    <MainContent>
      <Container>
        <Alert severity="error">{msg}</Alert>
      </Container>
    </MainContent>
  );
}

export default RestaurantReaderError;
