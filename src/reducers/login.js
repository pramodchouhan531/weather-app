import { USER_LOGIN } from "../actions/actiontype";
import { USER_USERNAME } from "../actions/actiontype";
import { USER_PASSWORD } from "../actions/actiontype";
import { VALID_LOGIN } from "../actions/actiontype";

const initialState = {
    show: false,
    username: "",
    password: "",
    users: []

}
export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN: 
      return {
            ...state,
            show: action.login
            }

    case USER_USERNAME: 
      return {
            ...state,
            username: action.username
      }

    case USER_PASSWORD: 
      return {
            ...state,
            password: action.password

      }
    case VALID_LOGIN: 
      return {
            ...state,
            users: action.users
      }
    default: return state;
    }

}