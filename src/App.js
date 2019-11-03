import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { directive } from '@babel/types';

// Pages 
import SignUp from '../src/pages/SignUp';
import SignIn from '../src/pages/SignIn';

import './css/App.css'

class App extends React.Component {
  render() {
    return(
      <div className="page">
        <SignUp/>
      </div>
    )
  }
}

export default App;
