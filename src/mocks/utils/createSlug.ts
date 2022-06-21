import faker from 'mocks/faker-client';

export default (str: string): string =>
  `${str
    .toLowerCase()
    .replace(/[^a-zA-Z ]/g, '')
    .replaceAll('  ', ' ')
    .replaceAll(' ', '-')}-${faker.datatype.uuid().slice(0, 5)}`;
