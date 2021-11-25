import axios from 'axios';
import getweather from '../actions/actions'



export const weatherthunk = (city) => async (dispatch) => {
  try {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6bb677792192838514f95cc5953ffa4c`)        
    dispatch(getweather([res.data])) 

}  
  
  catch (err) {
    console.log("request error",err);
  }
}