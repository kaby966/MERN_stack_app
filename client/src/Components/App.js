import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Common/Header';
import Home from '../Components/Pages/HomePage/Home';
import Login from '../Components/Auth/Login';
import Signup from '../Components/Auth/Signup';
import NotFound from '../Components/Pages/NotFound';
const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </main>
    </Router>
  )

}

export default App;
