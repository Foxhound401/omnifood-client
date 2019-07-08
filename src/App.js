import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {users: []};

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({users}));
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(user => (
          <div key={user.id}>{user.username}</div>
        ))}
        <h2>Trying to put the context to see if the submodule work</h2>
      </div>
    );
  }
}
export default App;
