import { 
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_LENGTH_ITEMS,
  CART_SAVE_SHIPPING_INFORMATION,
  CART_SAVE_PAYMENT_METHOD,
} from '../constants/cartConstants'

export const cartReducer = ( state = { cartItems: [], cartLength: 0 }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload
      const existItem = state.cartItems.find((x) => x.product === item.product)
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(x => x.product === existItem.product ? item : x),
          cartLength: state.cartLength,          
        }
      } else {
        return {
          ...state,
          cartItems: [ ...state.cartItems, item],
          cartLength: state.cartItems.length + 1,
        }
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(x => x.product !== action.payload),
        cartLength: state.cartItems.length - 1,
      }
    case CART_LENGTH_ITEMS:
      return {
        ...state,
        cartItems: state.cartItems,
        cartLength: state.cartItems.length,
      }
    case CART_SAVE_SHIPPING_INFORMATION:
      return { ...state, shippingAddress: action.payload }
    case CART_SAVE_PAYMENT_METHOD:
      return { ...state, paymentMethod: action.payload }      
    default:
      return state
  }
}

