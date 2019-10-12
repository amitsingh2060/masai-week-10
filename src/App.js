import React, { Component } from 'react';
import Menu from './Menu';
import Show from './Show';
import Create from './Create';
import Home from './Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Menu/>

        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/Create" component={Create}/>
        <Route path="/Show" component={Show}/>
        
        </Switch>

      </div>
      </BrowserRouter>
    );
  }
}


export default App;