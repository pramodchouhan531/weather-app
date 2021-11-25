import { GET_WEATHER, GET_CITY } from "../actions/actiontype"
const initialstate = {
    weather:[],
    city:""
}

export const getweatherreducer =(state = initialstate,action)=>{
  switch(action.type){
    case GET_WEATHER: 
      return {
            ...state,
            weather: action.weather
          }
    case GET_CITY:
      return{
        ...state,
        city:action.city
      }  
    default: return state;  
  }  
}



