import React, { Component } from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from './store';
import Header from './components/header';

class App extends Component {

    render() {
        return (
      <div>
      <Provider store={store}>
      <Header/>
     </Provider>
      </div>
        );

    }
}



export default App;