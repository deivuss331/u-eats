import { setupServer } from 'msw/node';
import handlers from 'mocks/handlers';

export default setupServer(...handlers);
