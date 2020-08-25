import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import Page from './pages/Page';
function App() {
  return (
    <div className="max-w-lg mx-auto my-12">
      <Router>
        <Switch>
          <Route exact path="/">
            <Page />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
