import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CheckoutSteps } from './CheckoutSteps';

function PlaceOrderScreen(props) {
  const userSignin = useSelector(state => state.userSignin)
  const { userInfo } = userSignin;
  const dispatch = useDispatch();


  if (!userInfo) {
    props.history.push('/signin')
  } else {
    return (
      <React.Fragment>
        <div className="shipping-main-box">
          <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
        </div>
      </React.Fragment>
    );
  }
}

export default PlaceOrderScreen
