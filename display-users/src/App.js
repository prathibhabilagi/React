import React, { Component} from 'react';
import axios from 'axios';
import Loading from './Loading';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      loading: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getUsers() {
    this.setState ({
      loading: true
    })
    axios('https://randomuser.me/api/?nat=US&results=5')
    .then(response => this.setState({
      users: response.data.results,
      loading: false
    })
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.getUsers();
    console.log('More users are loaded');
  }

  componentWillMount() {
    this.getUsers();
  }

  render() {
    return (
      <div className="App">
        {!this.state.loading ? this.state.users.map(user => (
          <div>
            <h3>{user.name.first}</h3>
            <p>{user.email}</p>
            <hr/>
            <form onSubmit={this.handleSubmit}>
              <input type="submit" value="load users" />
            </form>
          </div>
        ))
      : (
          <Loading message="BTS BTS BTS BTS"/>
        )}
      </div>
    );
  }
}

export default App;
