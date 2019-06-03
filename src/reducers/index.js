import { combineReducers } from 'redux';
import * as reducers from './allReducers';

const rootReducer = combineReducers({
  isLoading: reducers.loadingReducer,
  error: reducers.errorReducer,
  presidents: reducers.setPresidentsReducer
})

export default rootReducer;