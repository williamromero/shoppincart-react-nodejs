import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { addressListReducer } from './reducers/addressReducers'
import { productListReducer, productDetailsReducer } from './reducers/productReducers'
import { cartReducer} from './reducers/cartReducers'
import { userSigninReducer, userSignupReducer } from './reducers/userReducers';

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  addressList: addressListReducer,
  userSignin: userSigninReducer,
  userSignup: userSignupReducer
})

const cartItemsFromStorage = JSON.parse(localStorage.getItem('cartItems')) === null ? [] : JSON.parse(localStorage.getItem('cartItems'))
const userInfoFromStorage = JSON.parse(localStorage.getItem('userInfo')) ? JSON.parse(localStorage.getItem('userInfo')) : null
const shippingAddress = JSON.parse(localStorage.getItem('shippingAddress')) === null ? [] : JSON.parse(localStorage.getItem('shippingAddress'))
// const cartItemsFromStorage = []
const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    cartLength: cartItemsFromStorage ? cartItemsFromStorage.length : 0,
    shippingAddress: shippingAddress,
    paymentMethod: 'paypal'
  },
  userSignin: { userInfo: userInfoFromStorage },
  userSignup: { userInfo: userInfoFromStorage }
};
const middleware = [thunk]

const store = createStore(
  reducer, 
  initialState, 
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
