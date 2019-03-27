const initialState={
  users:[],
  id:'',
  user:'',
  userUpdate:''
  
}

const reducer= (state= initialState, action) => {
  switch(action.type){
    case "SET_USERS":
      return Object.assign({},state, {users:action.users});
    
  case "SET_ID":
      return Object.assign({},state, {id:action.id});

case "SET_USER":
      return Object.assign({},state, {user:action.user});

case "SET_UPDATED_USER":
      return Object.assign({},state, {userUpdate:action.userUpdate});



  default:
  return state;
}
}

export default reducer;