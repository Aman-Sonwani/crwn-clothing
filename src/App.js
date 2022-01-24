import React, { useEffect } from 'react';
import './App.css';

import { selectCurrentUser } from './redux/user/user.selectors';
import { useSelector, useDispatch } from 'react-redux';

import {Route, Switch, Redirect} from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { checkUserSession } from './redux/user/user.actions';


const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route  path='/shop' component={ShopPage} />
      <Route exact path='/checkout' component={CheckoutPage} />
      <Route 
          exact 
          path='/signin' 
          render={() =>
              currentUser? (
                <Redirect to='/'/>
              ): (
                <SignInSignUpPage/>
              )
            } 
        />
      </Switch>
    </div>
  );
}


export default App;
