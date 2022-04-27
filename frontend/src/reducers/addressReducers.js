import { 
  ADDRESS_LIST_REQUEST, 
  ADDRESS_LIST_SUCCESS, 
  ADDRESS_LIST_FAIL,  
} from '../constants/adressConstants'

export const addressListReducer = ( state = { address: [], }, action) => {
  switch (action.type) {
    case ADDRESS_LIST_REQUEST:
      return { loading: true, address: [] }
    case ADDRESS_LIST_SUCCESS:
      return { loading: false, address: action.payload }
    case ADDRESS_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

// export const addressDetailsReducer = ( state = { address: [] }, action ) => {
//   switch (action.type) {
//     case ADDRESS_LIST_REQUEST:
//       return { loading: true, ...state }
//     case ADDRESS_LIST_SUCCESS:
//       return { loading: false, address: action.payload }
//     case ADDRESS_LIST_FAIL:
//       return { loading: false, error: action.payload }
//     default:
//       return state
//   }
// }
