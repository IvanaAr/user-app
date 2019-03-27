import React, { Component } from 'react';
import {connect} from "react-redux";
import {setUser} from '../../actions'
import Edit from '../../components/edit'
import Delete from '../../components/delete'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';

const mapDispatchToProps = dispatch => {
  return {
    setUser: user => dispatch(setUser(user)),
  };
};

const mapStateToProps=(state)=>({
    id:state.id,
    user:state.user
})

class UsersId extends Component {

	constructor(props) {
        super();
        this.setUser = this.setUser.bind(this);
       
    }

    
  setUser(result){

  	this.props.setUser(result)
  }

componentWillReceiveProps() {
  

        const url = new URL('https://jsonplaceholder.typicode.com/users/'+this.props.id)
        const request = new Request(url, {
            method: 'GET',
            mode: 'cors'
        });

        fetch(request).then(result =>
                result.json()).then(result => this.setUser(result))
            .catch(function(error) { console.log(error); })

}

    render() {
        return(
          <Router>
            <div>
            <section>
            <h1>USER</h1>
              <div className="tbl-header">
    <table cellPadding="0" cellsSacing="0" border="0">
     <thead>
    <tr>
    <th>Id</th>
    <th>Name</th> 
    <th>Email</th>
    <th>UserName</th>
    <th>Phone</th>
    <th>Website</th>
  </tr>
  </thead>
    </table>
    </div>
    <div className="tbl-content">
    <table cellPadding="0" cellsSacing="0" border="0">
      <tbody>
  <tr>
    <td>{this.props.user.id}</td>
    <td>{this.props.user.name}</td> 
    <td>{this.props.user.email}</td>
    <td>{this.props.user.username}</td>
    <td>{this.props.user.phone}</td>
    <td>{this.props.user.website}</td>
  </tr>
  </tbody>
    </table>
  </div>
</section>
    <Route path={`/users/`+this.props.id+`/edit`} component={Edit} />
<button className="button"><Link to={`/users/`+this.props.id+`/edit`}>Edit</Link></button>
<Delete />

      </div>
      </Router>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UsersId);
