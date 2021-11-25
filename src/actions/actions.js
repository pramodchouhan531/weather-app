import { USER_LOGIN,USER_USERNAME,USER_PASSWORD,VALID_LOGIN,GET_WEATHER,GET_CITY} from "./actiontype"
import user from '../api/user'

const getweather = (weather)=>{
  return { 
    type:GET_WEATHER,
    weather,

  }
};
export default getweather;

export const getcity =(city)=>{
  return{
    type:GET_CITY,
    city
  }
}

export const  loginAction =(login)=>{
  return{
    type:USER_LOGIN,
    login
  }
  
  }
  
const validAction=(users)=>{
    return{
      type:VALID_LOGIN,
      users
    }
}
  
export const logData=()=>{
    return dispatch=>{
      user.loggedIn(users=>{
      dispatch(validAction(users))
      })
    }
  }
  
  
export const getUsername=(username)=>{
  return{
        type:USER_USERNAME,
        username
      }
}
  
export const getPassword=(password)=>{
  return{
        type:USER_PASSWORD,
        password
      }
  
  }