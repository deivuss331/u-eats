import { sample } from 'lodash-es';

const coverImages = [
  require('mocks/assets/images/food1.webp'),
  require('mocks/assets/images/food2.webp'),
  require('mocks/assets/images/food3.webp'),
  require('mocks/assets/images/food4.webp'),
  require('mocks/assets/images/food5.webp'),
  require('mocks/assets/images/food6.webp'),
  require('mocks/assets/images/food7.webp'),
  require('mocks/assets/images/food8.webp'),
  require('mocks/assets/images/food9.webp'),
  require('mocks/assets/images/food10.webp'),
  require('mocks/assets/images/food11.webp'),
  require('mocks/assets/images/food12.webp'),
  require('mocks/assets/images/food13.webp'),
  require('mocks/assets/images/food14.webp'),
] as const;

export default (): string => sample(coverImages);
