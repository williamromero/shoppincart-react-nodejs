import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'

const CartScreen = ({ match, location, history }) => {

  const productId = match.params.id
  console.log(match.params.id === undefined && 'ES IGUAL A NULL')
  const params = new URLSearchParams(location.search)
  const qty = parseInt(params.get("qty"))
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const { cartItems } = cart
  const userSignin = useSelector(state => state.userSignin)

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    history.push('/signin?redirect=/shipping')
  }

  return (
    <div className="mc-cart">
      <div className="mcc__banner">&nbsp;</div>
      <div className="mcc__box">
        <div className="mcc_cartlist">
          <h1>TU CESTA</h1>
          <div className="mcc_cartlist_box">
            { cartItems.map((item, key) => (
              <div className="mcc__cartlist_items">
                <img src={item.image} alt={item.name} />
                <Link to={ `/productos/${item.slug}` }>
                  { item.name }
                </Link>
                <span>Q. { item.price }</span>
                <select value={item.qty} onChange={(e) => dispatch(addToCart(match.params.slug === undefined ? item.slug : productId, Number(e.target.value)))} >
                  {[...Array(item.countInStock).keys()].map(
                    (x) => (
                      <option key={x} value={x}>
                        {x}
                      </option>
                    )
                  )}
                </select>
                <button type="button" onClick={ () => removeFromCartHandler(item.product) }>
                  <i className="fas fa-trash"></i>
                </button>                
              </div>
            ))}
          </div>
        </div>
        <div className="mcc_checkout_box">
          <h1>SUBTOTAL ({ cartItems.reduce((acc, item) => parseInt(acc) + parseInt(item.qty), 0)}) ITEMS </h1>
          <span>Q. { parseFloat(cartItems.reduce((acc, item) => acc + item.qty * item.price, 0)).toFixed(2) }</span>
          <button type="button" className="btn-block" disabled={ cartItems.length === 0 } onClick={ checkoutHandler } >
            Ir al Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartScreen
