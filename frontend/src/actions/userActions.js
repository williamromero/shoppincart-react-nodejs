import { 
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,   
  USER_SIGNIN_SUCCESS,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_SIGNOUT
} from '../constants/userConstants'
import axios from 'axios'

export const signin = (email, password) => async(dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } })
  try {
    const { data } = await axios.post('/api/signin', {email, password});
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data.user });
    localStorage.setItem("userInfo", JSON.stringify(data.user))
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}

export const signup = (name, email, password) => async(dispatch) => {
  dispatch({ type: USER_SIGNUP_REQUEST, payload: { name, email, password } })
  try {
    const { data } = await axios.post('/api/signup', { name, email, password });
    dispatch({ type: USER_SIGNUP_SUCCESS, payload: data.user });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data.user });
    localStorage.setItem("userInfo", JSON.stringify(data.user))
  } catch (error) {
    dispatch({
      type: USER_SIGNUP_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}


export const signout = () => (dispatch) => {
  localStorage.removeItem('userInfo')
  localStorage.removeItem('cartItems')
  localStorage.removeItem('shippingAddress')
  dispatch({ type: USER_SIGNOUT })
}
