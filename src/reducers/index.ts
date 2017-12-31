import { combineReducers } from 'redux';
import user from './user';
import sidebar from './sidebar';

const rootReducer = combineReducers({
  user,
  sidebar
});

export default rootReducer;
