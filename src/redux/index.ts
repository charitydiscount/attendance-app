import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Store,
} from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

export const publicUrl = process.env.PUBLIC_URL || '';
export const history = createBrowserHistory({ basename: publicUrl });

export interface AppState {
  router: any;
}

const createRootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
  });

const configureStore = (initialState?: AppState): Store<AppState, any> => {
  const composeEnhancer: typeof compose =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    createRootReducer(history),
    initialState,
    composeEnhancer(applyMiddleware(thunk, routerMiddleware(history)))
  );
  return store;
};

export const store = configureStore();
