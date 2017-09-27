import React, { Component } from 'react';
import './App.css';
import login from './login'

class App extends Component {
  state = {users: []}

  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    alert('login password');
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render () {
    return (
      <div className="btn">
        <h1>Hello and welcome to Salaryo</h1>
        <button onClick={this.handleClick}>login</button>
      </div>
    );
  }


  render1() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
      </div>
    );
  }
}

export default App;