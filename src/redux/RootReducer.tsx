import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

export interface AppState {
    router: any;
}

// Used to combine all reducers for full functionality
export default (history: any) =>
    combineReducers({
        router: connectRouter(history)
    });
