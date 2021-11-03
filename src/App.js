import { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import {  auth, createUseProfileDocument } from './firebase/firebase.utils';
import Header from './components/header/Header';
import { GlobalStyles } from './global.styles';
import Spinner from './components/spinner/Spinner';

const Homepage = lazy(() => import('./pages/homepage/Homepage'))
const Shop = lazy(() => import('./pages/shop/Shop'))
const Checkout = lazy(() => import('./pages/checkout/Checkout'))
const Login = lazy(() => import('./pages/login/Login'))

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  
  useEffect(() => {
    
    auth.onAuthStateChanged(async userAuth => {
      
      if (userAuth) {
        const userRef = await createUseProfileDocument(userAuth)

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      }
      setCurrentUser(userAuth)
    })
    return () => {
      auth.onAuthStateChanged(() => {
        setCurrentUser(null)
      })
  }
  }, [])
  return (
    <Router>
      <GlobalStyles/>
      <Header currentUser={currentUser}/>
      <Switch>
        <Suspense fallback={<Spinner/>}>
          <Route exact path='/' component={Homepage}/>
          <Route path='/shop' component={Shop}/>
          <Route path='/checkout' component={Checkout}/>
          <Route path='/signin' render={() => currentUser ?
          <Redirect to='/'/> :
          <Login/>}/>
        </Suspense>
      </Switch>
    </Router>
  );
}


export default (App);
