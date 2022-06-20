import { setupWorker } from 'msw';
import handlers from 'mocks/handlers';

export default setupWorker(...handlers);
