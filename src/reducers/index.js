import { combineReducers } from 'redux';
import pizzaReducers from './pizzaReducers';

const rootReducer = combineReducers({ pizzaReducers });

export default rootReducer;
