import { Component } from 'react';
import './App.css';
import AddUser from './components/AddUser';
import Users from './components/Users';

class App extends Component {
  
  
  constructor(props) {
    super();

    this.state={
      users:[
        {
          id:1,
          name:"Ali",
          email:"ali@mail.com"
        },
        {
          id:2,
          name:"Veli",
          email:"veli@mail.com"
        },
        {
          id:3,
          name:"Ahmet",
          email:"ahmet@mail.com"
        },
      ]
    }
    this.deleteUser=this.deleteUser.bind(this);
    this.addUser=this.addUser.bind(this);
  };
  
  deleteUser(id){
    let updatedUsers=this.state.users;

    updatedUsers=updatedUsers.filter(user=>user.id!==id);
    this.setState({users:updatedUsers});
  }

  addUser(newUser){
    let updatedUsers=this.state.users;
    
    updatedUsers.push(newUser);
    
    this.setState({users:updatedUsers})
  }
  
  render(){
    const title="User App"
    return (
      <div className="container">
        <h4>{title}</h4>
      <hr />

      <AddUser addUser={this.addUser}/>
      <hr />

      <Users deleteUser={this.deleteUser} users={this.state.users} />
      </div>
    );
  }
}

export default App;
