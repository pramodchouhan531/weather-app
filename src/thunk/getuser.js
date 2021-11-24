import axios from 'axios';
export const requestadduser = () => async () => {
  try {
    await axios.get('')
           
  }  
  
  catch (err) {
    console.log("request error",err);
  }
}