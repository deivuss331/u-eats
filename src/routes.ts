import { lazy } from 'react';
import type { AppRoute, AppPaths } from 'types';

export const appPaths: AppPaths = {
  root: () => '/',
  browseRestaurants: () => '/browse-restaurants',
};

const routes: AppRoute[] = [
  {
    path: appPaths.root(),
    component: lazy(() => import(/* webpackChunkName: 'Homepage' */ 'views/Homepage')),
  },
  {
    path: appPaths.browseRestaurants(),
    component: lazy(() => import(/* webpackChunkName: 'BrowseRestaurants' */ 'views/BrowseRestaurants')),
  },
];

export default routes;
