import './App.css';
import Homepage from './pages/homepage/Homepage';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Shop from './pages/shop/Shop';
import Header from './components/Header';
import Login from './pages/login/Login';
import { useEffect, useState } from 'react';
import { auth, createUseProfileDocument } from './firebase/firebase.utils';
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
        console.log(currentUser);
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
      <Header currentUser={currentUser}/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={Shop}/>
        <Route path='/signin' component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;
