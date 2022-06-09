import type { IAppConfig } from 'types';
import { ENVIRONMENTS } from 'config/constants';

const { REACT_APP_CONFIG } = process.env;

if (!REACT_APP_CONFIG) {
  throw new Error('REACT_APP_CONFIG is not set!');
}

const env: string = ENVIRONMENTS[REACT_APP_CONFIG as keyof typeof ENVIRONMENTS];
const config: IAppConfig = require(`./${env}.config.ts`).default;

export default config;
