import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';
import reducers from './reducers';
import { loadState, saveState } from './localStorage';

const configureStore = () => {
  const persistedState = loadState();

  const middlewares = [];
  middlewares.push( thunk );

  if ( process.env.NODE_ENV === 'development' ) {
    // eslint-disable-next-line global-require
    const { logger } = require( 'redux-logger' );

    middlewares.push( logger );
  }

  const store = createStore(
    reducers,
    persistedState,
    applyMiddleware( ...middlewares ),
  );

  store.subscribe( throttle( () => {
    saveState( store.getState() );
  }, 1000 ) );

  return store;
};

export default configureStore;
