// import { 
//   ADDRESS_LIST_REQUEST, 
//   ADDRESS_LIST_SUCCESS, 
//   ADDRESS_LIST_FAIL,  
// } from '../constants/addressActions';
import axios from 'axios'
import { ADDRESS_LIST_REQUEST } from '../constants/adressConstants';

export const listAddresses = () => async (dispatch) => {
  try {
    dispatch({ type: ADDRESS_LIST_REQUEST })
    const { data } = await axios.post('/api/address/show')
    console.log(data);
    dispatch({ 
      type: 'ADDRESS_LIST_SUCCESS',
      payload: data
    }) 
  } catch (error) {
    dispatch({ 
      type: 'ADDRESS_LIST_FAIL',
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}
