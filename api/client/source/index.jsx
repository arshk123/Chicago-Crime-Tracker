import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link, browserHistory, Switch} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';

// Include your new Components here
import Home from './components/Home/Home.jsx';
import PoliceLogin from './components/PoliceLogin/PoliceLogin.jsx'
import PoliceHome from './components/PoliceHome/PoliceHome.jsx'

// Include any new stylesheets here
// Note that components' stylesheets should NOT be included here.
// They should be 'require'd in their component class file.
require('./styles/main.scss');

render(
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/policelogin" component={PoliceLogin}/>
      <Route exact path="/policehome" component={PoliceHome}/>
    </Switch>
  </Router>,
  document.getElementById('app')
);
