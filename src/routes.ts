import { lazy } from 'react';
import type { AppRoute, AppPaths } from 'types';

export const appPaths: AppPaths = {
  root: () => '/',
  browseRestaurants: () => '/browse-restaurants',
  restaurantReader: (slug) => `/restaurant/${slug}`,
  basket: () => `/basket`,
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
  {
    path: appPaths.restaurantReader(':id'),
    component: lazy(() => import(/* webpackChunkName: 'RestaurantReader' */ 'views/RestaurantReader')),
  },
  {
    path: appPaths.basket(),
    component: lazy(() => import(/* webpackChunkName: 'Basket' */ 'views/Basket')),
  },
];

export default routes;
