import React from 'react';
import {connect} from "react-redux";

const mapStateToProps=(state)=>({
    id:state.id,
})
class Delete extends React.Component {

	constructor(){
  	super()
  	this.delete=this.delete.bind(this);
  }
delete(){
const url='https://jsonplaceholder.typicode.com/users/'+this.props.id;
return fetch(url, {
    method: 'DELETE',
  }).then(response =>
    response.json().then(json => {
    	console.log(response);
    	window.location.replace('/');
    })
  );
	
}
  render() {
    return <button onClick={this.delete}>Delete</button>;
  }
}

export default connect(mapStateToProps)(Delete);
