import { combineReducers } from 'redux';

import ResultReducer from './result';

const rootReducer = combineReducers({
  result: ResultReducer,
});

export default rootReducer;
