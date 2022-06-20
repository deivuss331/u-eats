import faker from 'mocks/faker-client';

const MIN_DELAY_MS: number = 250;
const MAX_DELAY_MS: number = 800;

const getResponseDelay = () => faker.datatype.number(MAX_DELAY_MS - MIN_DELAY_MS) + MIN_DELAY_MS;

export default getResponseDelay;
