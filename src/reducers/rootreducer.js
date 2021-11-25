import { combineReducers } from 'redux'
import { loginReducer } from './login';
import { getweatherreducer } from './dashboardreducer';

export const reducer = combineReducers({
  loginReducer,
  getweatherreducer
})
export default reducer;