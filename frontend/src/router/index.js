import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Main from '../layouts/Main'
import Shipping from '../layouts/Shipping'

// Admin Layouts
import Admin from '../layouts/Admin'
import ClientAdmin from '../layouts/ClientAdmin'

// Views
import HomeScreen from '../views/HomeScreen'
import ProductScreen from '../views/ProductScreen'
import CartScreen from '../views/CartScreen'
import SigninScreen from '../views/SigninScreen'
import RegisterScreen from '../views/RegisterScreen'

// Client Views
import ShippingScreen from '../views/Shipping/ShippingScreen'
import PaymentScreen from '../views/Shipping/PaymentScreen'
import { ShippingAddressScreen } from '../views/Shipping/ShippingAddressScreen'

// admin Views
import IndexScreen from '../views/Admin/IndexScreen'
import SettingsScreen from '../views/Admin/SettingsScreen'
import ProfilesScreen from '../views/Admin/ProfilesScreen'

// clientAdmin Views
import IndexCAScreen from '../views/ClientAdmin/IndexScreen'
import SettingsCAScreen from '../views/ClientAdmin/SettingsScreen'
import ProfilesCAScreen from '../views/ClientAdmin/ProfilesScreen'
import PlaceOrderScreen from '../views/Shipping/PlaceOrderScreen'


const Routes = () => {

  return (
    <Router>
      <Switch>
        <Route path='/admin/:path?' exact>
          <Admin>
            <Switch>
              <Route path='/admin' exact component={ IndexScreen } />
              <Route path='/admin/settings' component={ SettingsScreen } />
              <Route path='/admin/profiles' component={ ProfilesScreen } />              
            </Switch>
          </Admin>
        </Route>
        <Route path='/buyer/:path?' exact>
          <ClientAdmin>
            <Switch>
              <Route path='/buyer' exact component={ IndexCAScreen } />
              <Route path='/buyer/settings' component={ SettingsCAScreen } />
              <Route path='/buyer/profiles' component={ ProfilesCAScreen } />              
            </Switch>
          </ClientAdmin>
        </Route>        

        {/* <Route path='/shipping/:path?' exact> */}
        <Route path='/shipping/:path?' exact>       
          <Main>
            <Switch>
              <Route path="/shipping" exact component={ ShippingAddressScreen } />
              <Route path="/shipping/payment" component={ PaymentScreen } />
              <Route path="/shipping/placeorder" component={ PlaceOrderScreen } />
            </Switch>
          </Main>          
        </Route>
        <Route>          
          <Main>
            <Switch>
              <Route path='/' exact component={ HomeScreen } />
              <Route path='/signin' component={ SigninScreen } />
              <Route path='/signup' component={ RegisterScreen } />
              <Route path='/productos/:slug' component={ ProductScreen } />
              <Route path='/carrito/:id?' component={ CartScreen } />              
            </Switch>
          </Main>
        </Route>

      </Switch>
    </Router>
  )

}

export default Routes
