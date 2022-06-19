import faker from 'mocks/faker-client';

const getResponseDelay = () => faker.datatype.number(500);

export default getResponseDelay;
