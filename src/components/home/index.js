import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {connect} from "react-redux";
import {setUsers, setId} from '../../actions'
import UsersId from '../../components/usersId'
import Create from '../../components/create'
const mapStateToProps=(state)=>({
    users: state.users,
    id:state.id
})


const mapDispatchToProps = dispatch => {
  return {
    setUsers: users => dispatch(setUsers(users)),
    setId: id => dispatch(setId(id)),
  };
};

class Home extends Component {
    constructor(props) {
        super();
        this.setUsers = this.setUsers.bind(this);
  }

    setUsers(result) {
      const users=result;
      console.log(users);
      this.props.setUsers(users);

    }
    saveId(index){
    const id=index+1;
      console.log(id)
      this.props.setId(id);
    }


    componentDidMount() {
        const url = new URL('https://jsonplaceholder.typicode.com/users')
        const request = new Request(url, {
            method: 'GET',
            mode: 'cors'
        });

        fetch(request).then(result =>
                result.json()).then(result => this.setUsers(result))
            .catch(function(error) { console.log(error); })
    }

    render() {
     if (this.props.users.length === 0 ){
  return ""
}

        return(
<Router>
            <div>
   
        <table>
        <tbody>
  <tr>
    <th>Id</th>
    <th>Name</th> 
    <th>Email</th>
    <th>City</th>
  </tr>
  <tr>
    <td>{
          this.props.users.map(
            (user, index) => <p key={index}>{user.id}</p>
          )
        }</td>
    <td>{
          this.props.users.map(
            (user, index) => <p onClick = {this.saveId.bind(this, index)} key={index} index={user.id}><Link to={`/users/`+user.id}>{user.name}</Link></p>
          )
        }</td> 
    <td>{
          this.props.users.map(
            (user, index) => <p key={index}>{user.email}</p>
          )
        }</td>
<td>{
          this.props.users.map(
            (user, index) => <p key={index}>{user.address.city}</p>
          )
        }</td>
  </tr>
  </tbody>
</table>
<Route path={`/users/`+this.props.id} component={UsersId} />
<button><Link to={`/users/create`}>Create</Link></button>      </div>
<Route path={`/users/create`} component={Create} />
      </Router>
        );
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);