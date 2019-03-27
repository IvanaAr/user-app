import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../home'
import {connect} from "react-redux";
import './index.css';

const mapStateToProps=(state)=>({
    id:state.id,
})

class Header extends Component {
  render(){

  return (
    
    <Router>
      <div>
<header>
<div className="type">
  <span>User</span>
  <span>APP</span>
</div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>


        <Route exact path="/" component={Home} />
      </header>  
      
      </div>
    </Router>
      

  );
}
}

export default connect(mapStateToProps)(Header);