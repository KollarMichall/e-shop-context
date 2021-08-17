import './App.css';
import Homepage from './pages/homepage/Homepage';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Shop from './pages/shop/Shop';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={Shop}/>
      </Switch>
    </Router>
  );
}

export default App;
