import { sample } from 'lodash-es';

const allImages = [
  require('mocks/assets/images/food1.jpg'),
  require('mocks/assets/images/food2.jpg'),
  require('mocks/assets/images/food3.jpg'),
  require('mocks/assets/images/food4.jpg'),
  require('mocks/assets/images/food5.jpg'),
  require('mocks/assets/images/food6.jpg'),
  require('mocks/assets/images/food7.jpg'),
  require('mocks/assets/images/food8.jpg'),
  require('mocks/assets/images/food9.jpg'),
  require('mocks/assets/images/food10.jpg'),
  require('mocks/assets/images/food11.jpg'),
  require('mocks/assets/images/food12.jpg'),
  require('mocks/assets/images/food13.jpg'),
  require('mocks/assets/images/food14.jpg'),
] as const;

export default (): string => sample(allImages);
