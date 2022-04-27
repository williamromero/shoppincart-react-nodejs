import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CheckoutSteps } from './CheckoutSteps';
import { savePaymentMethod } from '../../actions/cartActions';

const PaymentScreen = (props) => {
  const [paymentMethod, setPaymentMethod] = useState();
  const userSignin = useSelector(state => state.userSignin)
  const { userInfo } = userSignin;
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch( savePaymentMethod(paymentMethod) );
    // props.history.push('/placeorder');
  } 

  if (!userInfo) {
    props.history.push('/signin')
  } else {
    return (
      <React.Fragment>
        <div className="shipping-main-box">
          <CheckoutSteps step1 step2 step3></CheckoutSteps>
          <form className="form form-shipping" onSubmit={submitHandler}>
            <div>
              <h1>Payment Method</h1>
            </div>
            <div className="payment-options">
              <div className="payment-options-item">
                <input type="radio" id="paypal" value="paypal" name="paymentMethod" required checked onChange={(e) => setPaymentMethod(e.target.value)} />
                <label htmlFor="paypal">Paypal</label>
              </div>
              <div className="payment-options-item">
                <input type="radio" id="bi" value="bi" name="paymentMethod" required onChange={(e) => setPaymentMethod(e.target.value)} />
                <label htmlFor="bi">Tarjeta de Crédito</label>
              </div>
            </div>            
            <button type="submit" className="primary">
              Guardar
            </button> 
          </form>
        </div>
      </React.Fragment>
    )
  }
}

export default PaymentScreen
