import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddUserForm from './AddUserForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };

    this.handleAddUser = this.handleAddUser.bind(this);
  }

  handleAddUser(newUser) {
    this.setState({
      users: [...this.state.users, newUser]
    });
  }

  render() {
    return (
      <div className="App">
        <div className="jumbotron text-center">
          <h1>Manage User</h1>
          <p>Ngoc Hung</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <h2>Add User</h2>
              <hr />
              <AddUserForm onAddUser={this.handleAddUser} />
            </div>
            <div className="col-sm-8">
              <h2>List of user</h2>
              <hr />
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.users.map(user => (
                      <tr>
                        <td></td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td><button type="button" class="btn btn-danger">Delete</button>&nbsp;<button type="button" class="btn btn-warning">Update</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
