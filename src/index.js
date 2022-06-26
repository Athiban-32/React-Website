import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from 'react-router-dom';

import Home from "./Home";
import Youtube from './Youtube';
import Contact from './Contact';

const routing=(
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/youtube" component={Youtube} />
        <Route exact path="/contact" component={Contact} />

      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing,document.getElementById("root"));
