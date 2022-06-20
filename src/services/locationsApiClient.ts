import axios from 'axios';

const locationsApiClient = axios.create({
  headers: {
    'Content-type': 'application/json',
  },
});

/* eslint-disable */
locationsApiClient.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params.key = process.env.REACT_APP_BING_MAPS_API_KEY;

  return config;
});

export default locationsApiClient;
