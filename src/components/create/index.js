import React, { Component } from 'react';


class Create extends Component {
    constuctor() {
   this.submit=this.submit.bind(this);
  
  }

  submit(){
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

var url = 'https://jsonplaceholder.typicode.com/users';
var data = {name: name,
            email: email};
console.log(data)
fetch(url, {
  method: 'POST', 
  body: JSON.stringify(data),
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.then(response => console.log(response) )
.catch(error => console.error('Error:', error));
  }

    render() {
      return(
  
<div>
<div>Email:<input id="emailInput"/></div>
<p id="notValidMail"></p>
<div>Name:<input id="nameInput"/></div>
<div><button onClick={this.submit}>Submit</button></div>
</div>
        )
    }
    }
export default Create;