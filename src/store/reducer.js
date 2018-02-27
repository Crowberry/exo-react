import { combineReducers } from 'redux';
import dataReducer from './data/reducer';
import urlApiReducer from './urlApi/reducer';

const rootReducer = combineReducers({
  data: dataReducer,
  urlApi: urlApiReducer,
});


export default rootReducer;
