import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { directive } from '@babel/types';

// Pages 
import SignUp from '../src/pages/SignUp';
import SignIn from '../src/pages/SignIn';
import MessageChat from '../src/pages/MessageChat';

import './css/App.css'

class App extends React.Component {
  render() {
    return(
      <div className="page">
        <Router>
          <Switch>
            <Route exact path="/" component={SignIn}></Route>
            <Route path="/sign-in" component={SignIn}></Route>
            <Route path="/sign-up" component={SignUp}></Route>
            <Route path="/message-chat" component={MessageChat}></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
