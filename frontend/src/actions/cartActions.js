import axios from 'axios'
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_LENGTH_ITEMS, CART_SAVE_SHIPPING_INFORMATION, CART_SAVE_PAYMENT_METHOD } from '../constants/cartConstants'

export const addToCart = (slug, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${slug}`)
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data.id,
      name: data.name,
      image: data.image,
      price: data.price,
      slug: data.slug,
      countInStock: data.countInStock,
      qty
    }
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const countCartItems = () => (dispatch, getState) => {
  dispatch({
    type: CART_LENGTH_ITEMS,
    payload: getState().cart.cartItems
  })
}

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id
  })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const saveUserInformation = (address) => async (dispatch) => {
  console.log(address);
  const { data } = await axios.post(`/api/address`, { address })
  dispatch({ type: CART_SAVE_SHIPPING_INFORMATION, payload: data })
  localStorage.setItem('shippingAddress', JSON.stringify(data));
}

export const savePaymentMethod = (data) => async (dispatch) => {
  dispatch({type: CART_SAVE_PAYMENT_METHOD, payload: data});
}
