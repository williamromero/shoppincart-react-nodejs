import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Message from '../components/Message'
import Modal from '../components/Modal'
import { signup } from '../actions/userActions'

export default function RegisterScreen(props) {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const [modal, setModal] = useState(false)

  const redirect = props.location.search
    ? props.location.search.split("=")[1] 
    : '/' 

  const { userInfo, error } = useSelector( state => state.userSignup );

  const dispatch = useDispatch()
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setModal(true)
    } else {
      dispatch(signup(name, email, password))
    }
  } 

  useEffect(() => {
    console.log('CAMBIO EL userSignup')
    if (userInfo) {
      console.log('LLEGANDO AQUÍ')
      props.history.push(redirect)
    }
  }, [props.history, redirect, userInfo, modal]);

  return (
    <div className="mc-auth">
      <form className="form" onSubmit={submitHandler}>
        { error && <Message variant="danger">{error}</Message>  }

        <div>
          <label htmlFor="email">Nombre</label>
          <input type="text" id="name" placeholder="Ingresar correo" required onChange={(e)=> setName(e.target.value)}></input>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Ingresar correo" required onChange={(e)=> setEmail(e.target.value)}></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Ingresar contraseña" required onChange={(e)=> setPassword(e.target.value)}></input>
        </div> 
        <div>
          <label htmlFor="confirmPassword">Password</label>
          <input type="password" id="confirmPassword" placeholder="Ingresar contraseña" required onChange={(e)=> setconfirmPassword(e.target.value)}></input>
        </div>           
        <div>
          <button className="primary" type="submit">
            SignIn
          </button>
        </div>
        <div className="register-link">
          ¿Ya tienes una cuenta? <Link to={`/signin?redirect=${redirect}`}>Ingresa</Link>
        </div> 
      </form>
        <Modal title="Alerta"
               content="Password y confirmar password no coinciden."
               modal={modal}
               setModal={setModal} />
    </div>
    
  )
}
