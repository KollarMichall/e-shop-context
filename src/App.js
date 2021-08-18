import './App.css';
import Homepage from './pages/homepage/Homepage';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Shop from './pages/shop/Shop';
import Header from './components/Header';
import Login from './pages/login/Login';
function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={Shop}/>
        <Route path='/signin' component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;
