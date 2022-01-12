import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { routes } from './routes.js';


import './assets/css/style.css';

import Header from './components/global/Header';
import BgVideo from './components/global/BgVideo';
import Menu from './components/global/menu/Menu';

const App = () => {     


  return (
    <div className='app-wrapper'>
        <BgVideo />  

        <Header /> 
        <Menu />
        <Switch>
          {
          routes.map(item => <Route key={item.id} path={item.pathname} exact component={item.component} />)
          }
          <Redirect to='/not-found' />
        </Switch>
    </div>
  );
};

export default App;