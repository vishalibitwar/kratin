import React from "react"; 
import { Router, Switch , Route , Link}  from 'react-router-dom';
import Safequiz from './components/Safequiz';
import history from './components/History';
import Home from './components/Home';
import Measures from './components/Measures';
import './css/style.css';
function App() {
  return (

    <Router history={history} >
      <Link to="/" className="logo">Home</Link>
      <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/Safequiz' component={Safequiz} />
      <Route exact path='/Measures' component={Measures} />
      </Switch>   
    </Router>
  );
}

export default App;
