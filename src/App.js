import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <div>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      </Switch>
      </div>
  );
}

export default App;
