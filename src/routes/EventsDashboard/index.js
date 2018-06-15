import { injectReducer } from '../../store/reducers';
import 'babel-polyfill';

export default (store) => (
  {
    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        const
          Container = require('./containers/EventsDashboardMarkupContainer').default,
          reducer = require('./modules/reducer').default;

        injectReducer(store, { key: 'dashboard', reducer });

        cb(null, Container);
      }, 'dashboard');
    },
  }
);
