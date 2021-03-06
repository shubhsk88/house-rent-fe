import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignUp from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Description from './pages/Description';

function App() {
  return (
    <div className="max-w-lg mx-auto ">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/houses/:id">
            <Description />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
