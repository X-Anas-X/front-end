
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import authentication from '../reducers/authentication';
import user from '../reducers/user';

    const reducers = combineReducers({ authentication , user });

    const store = () => {
        return createStore(
           reducers, 
           composeWithDevTools(applyMiddleware(thunk))
        );
    };

export default store();