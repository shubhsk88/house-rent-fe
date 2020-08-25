import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import SignUp from './pages/Signup';

function App() {
  return (
    <div className="max-w-lg mx-auto my-12">
      <Router>
        <Switch>
          <Route path="/">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
