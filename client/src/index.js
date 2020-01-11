import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'gestalt/dist/gestalt.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import Signin from './components/Signin';
import Checkout from './components/Checkout';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Shoes from './components/Shoes';

const Root = () => (
  <Router>
    <React.Fragment>
      <Navbar />

      <Switch>
        <Route component={App} exact path='/' />
        <Route component={Signin} path='/signin' />
        <Route component={Signup} path='/signup' />
        <Route component={Checkout} path='/checkout' />
        <Route component={Shoes} path='/:brandId' />
      </Switch>
    </React.Fragment>
  </Router>
);
ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
