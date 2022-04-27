import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ShippingAddressScreen } from './ShippingAddressScreen';

const ShippingScreen = (props) => {
  const userSignin = useSelector(state => state.userSignin)
  const { userInfo } = userSignin;
  if (!userInfo) {
    props.history.push('/signin')
  } else {
    return (
      <React.Fragment>
        <div className="shipping-main-box">
          <ShippingAddressScreen props />
        </div>
      </React.Fragment>
    )
  }
}

export default ShippingScreen
