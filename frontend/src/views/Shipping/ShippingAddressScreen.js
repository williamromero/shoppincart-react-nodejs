import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CheckoutSteps } from './CheckoutSteps';
import { useForm } from '../../hooks/useForm';

import { saveUserInformation } from '../../actions/cartActions';
import { listAddresses } from '../../actions/addressActions';
import ShippingAddress from '../../components/shipping/ShippingAddress';


 export const ShippingAddressScreen = (props) => {

  const [ formValues, handleInputChange ] = useForm({ address: '', country: '', depto: '', town: '', other_description: '' })
  const { fullname, address, country, depto, town, other_description } = formValues;
  const dispatch = useDispatch();

  const userSignin = useSelector(state => state.userSignin)
  const { userInfo } = userSignin;
  const { id: user_id } = userInfo == null ? 1 : userInfo;

  const addressList = useSelector(state => state.addressList)
  const { loading, error, address: _address } = addressList
  console.log(_address)

  useEffect(() => {
    dispatch(listAddresses())
  }, [dispatch])

  useEffect(() => {
    console.log('formValues are being changed!')
  }, [formValues])

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveUserInformation({ fullname, address, country, depto, town, other_description, user_id })
    );
    props.history.push('shipping/payment');
  }

  if (userInfo === null) {
    props.history.push('/signin')
  } else {
    return (
      <React.Fragment>
        <div className="shipping-main-box">
          <CheckoutSteps step1 step2 ></CheckoutSteps>
          
          <div className="shipping-address__box">
            <div>
              <h3>Direcciones Guardadas</h3>
            </div>
            { _address.map((item, idx) => (
              <ShippingAddress addr={ item } key={ idx } />
            ))}
          </div>
          <form className="form form-shipping" onSubmit={submitHandler} >
            <div>
              <h3>Shipping Address</h3>
            </div>
            <div>
              <label htmlFor="address">Dirección</label>
              <input 
                type="text"
                id="address"
                name="address"
                placeholder="Enter address"
                value={address}
                onChange={ handleInputChange }
                required
              />
            </div>
            <div>
              <label htmlFor="country">País</label>
              <input 
                type="text"
                id="country"
                name="country"
                placeholder="Ingresar país"
                value={country}
                onChange={ handleInputChange }
                required
              />
            </div>
            <div>
              <label htmlFor="address">Dirección</label>
              <input 
                type="text"
                id="address"
                name="address"
                placeholder="Ingresar dirección"
                value={address}
                onChange={ handleInputChange }
                required
              />
            </div>
            <div>
              <label htmlFor="depto">Departamento</label>
              <input 
                type="text"
                id="depto"
                name="depto"
                placeholder="Ingresar departamento"
                value={depto}
                onChange={ handleInputChange }
                required
              />
            </div> 
            <div>
              <label htmlFor="town">Municipio</label>
              <input 
                type="text"
                id="town"
                name="town"
                placeholder="Ingresar municipio"
                value={town}
                onChange={ handleInputChange }
                required
              />
            </div>
            <div>
              <label htmlFor="other_description">Otra descripción</label>
              <textarea
                type="text"
                id="other_description"
                name="other_description"
                placeholder="Ingresa una referencia que nos ayude a ubicar el lugar en el que debemos de entregar el pedido"
                value={other_description}
                onChange={ handleInputChange }
                required
              />
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
