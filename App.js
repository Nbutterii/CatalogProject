import React from 'react';
import Router from './Router.js';
import { createStore } from 'redux';
import { Provider } from 'react-native';
// import reducers from './reducers';

//const store = createStore(reducers);
export default class App extends React.Component{
  render(){
    return(
        <Router />
    );
  }
}

