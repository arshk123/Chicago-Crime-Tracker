import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link, browserHistory, Switch} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';

// Include your new Components here
import PoliceHome from './components/PoliceHome/PoliceHome.jsx'
import Map from './components/Map/Map.jsx'

// Include any new stylesheets here
// Note that components' stylesheets should NOT be included here.
// They should be 'require'd in their component class file.
require('./styles/main.scss');
// <Route exact path="/policelogin" component={PoliceLogin}/>
render(

  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={PoliceHome}/>
      <Route exact path="/map" component={Map}/>
    </Switch>
  </Router>,
  document.getElementById('app')
);
