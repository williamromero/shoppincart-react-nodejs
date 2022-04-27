import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { countCartItems } from '../../actions/cartActions'
import { signout } from '../../actions/userActions'

const Header = () => {
  const cartLength = useSelector( state => state.cart.cartLength )
  const { userInfo } = useSelector( state => state.userSignin );
  // console.log(userSignin)
  // const userInfo = userSignin;
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(countCartItems())
  }, [dispatch])

  const signoutHandler = () => {
    dispatch(signout())
  }

  return (
    <header>
      <nav className="navbar navbar-light">
        <Link className="navbar-brand" to="/">
          <img src="/honey.svg" alt="" width="30" height="24" className="d-inline-block align-top" />
        </Link>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Nosotros
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/productos">Productos
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/carrito">
              <i className="fas fa-shopping-basket"></i>
              <span className="products-count">{ cartLength }</span>
            </Link>
          </li>
          <li className="nav-item nav-item-last">
            {
              userInfo ? (
                <div className="dropdown">
                  <Link className="nav-link" to="/signin">
                    { userInfo.name }
                    <i className="fa fa-caret-down"></i>
                  </Link>
                  <ul className="dropdown-content">
                    <Link to="#signout" onClick={signoutHandler}>
                      SignOut
                    </Link>
                  </ul>
                </div>
              ) : (
                <Link className="nav-link" to="/signin">
                  Ingresar
                </Link>
              )
            }
          </li>          
        </ul>
      </nav>
    </header>
  )
}

export default Header
