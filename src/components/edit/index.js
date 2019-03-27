import React from 'react';
import {connect} from "react-redux";
import {setUpdatedUser} from '../../actions'


const mapDispatchToProps = dispatch => {
  return {
    setUpdatedUser: userUpdate => dispatch(setUpdatedUser(userUpdate)),

  };
};
const mapStateToProps=(state)=>({
    id:state.id,
    userUpdate:state.userUpdate,
    
})

class Edit extends React.Component {
  constructor(){
  	super()
  	this.edit=this.edit.bind(this);   
  }
edit(){
  const email=document.getElementById("emailInput").value;
   const name=document.getElementById("nameInput").value;
   if (email.length === 0 || name.length===0 ){
document.getElementById("notValidMail").innerHTML = 'Please fill both fields!';
return;
}

else if (email.length > 0){
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 
if(email.match(mailformat))
{
  

}
else
{
document.getElementById("notValidMail").innerHTML = 'Please enter  a valid email!';
return;} 

 }

  fetch('https://jsonplaceholder.typicode.com/posts/'+this.props.id, {
      method: 'PUT',
      body: JSON.stringify({
        email: email,
      name: name
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => {
            return response.json()
    }).then(json => {
      console.log(json)
      this.props.setUpdatedUser(json)
    })
  }


componentDidMount(){
 
        const url = new URL('https://jsonplaceholder.typicode.com/users/'+this.props.id)
        const request = new Request(url, {
            method: 'GET',
            mode: 'cors'
        });

        fetch(request).then(result =>
                result.json()).then(result => this.setUpdatedUser(result))
            .catch(function(error) { console.log(error); })

    
}

  render() {
  	 return (
  	   	<div>

    <table>
    <tbody>
    <tr>
    <th>Id</th>
    <th>Name</th> 
    <th>Email</th>
    <th>UserName</th>
    <th>Phone</th>
    <th>Website</th>
  </tr>
  <tr>
    <td>{this.props.userUpdate.id}</td>
    <td>{this.props.userUpdate.name}</td> 
    <td>{this.props.userUpdate.email}</td>
    <td>{this.props.userUpdate.username}</td>
    <td>{this.props.userUpdate.phone}</td>
    <td>{this.props.userUpdate.website}</td>
  </tr>
    </tbody>
    </table>
  	 <div>Email:<input id="emailInput"/></div>
     <p id="notValidMail"></p>
  	 <div>Name:<input id="nameInput"/></div>
  	    <button onClick={this.edit}>Edit</button>
  	     </div>)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Edit);