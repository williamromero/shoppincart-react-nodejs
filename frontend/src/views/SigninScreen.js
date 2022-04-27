import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Message from '../components/Message'
import { signin } from '../actions/userActions'

export default function SigninScreen(props) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')  
  const redirect = props.location.search
    ? props.location.search.split("=")[1] 
    : '/' 

  const { userInfo, error } = useSelector( state => state.userSignin );

  const dispatch = useDispatch()
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password))
  }

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect)
    }
  }, [props.history, redirect, userInfo]);

  return (
    <div className="mc-auth">
      <form className="form" onSubmit={submitHandler}>
        { error && <Message variant="danger">{error}</Message>  }
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Ingresar correo" required onChange={(e)=> setEmail(e.target.value)}></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Ingresar contraseña" required onChange={(e)=> setPassword(e.target.value)}></input>
        </div>   
        <div>
          <button className="primary" type="submit">
            SignIn
          </button>
        </div>
        <div className="register-link">
          ¿Nuevo Usuario? <Link to={`/signup?redirect=${redirect}`}>Crear nueva cuenta</Link>
        </div> 
      </form>
    </div>
  )
}
