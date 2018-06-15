// We only need to import the modules necessary for initial render

import eventsDashboard from './EventsDashboard';

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ([{
  path: '/',
  indexRoute: eventsDashboard(store),
}]);

export default createRoutes;
