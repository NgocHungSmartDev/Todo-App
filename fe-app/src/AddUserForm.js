import React, { Component } from 'react';

class AddUserForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            phone: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone
        };
        this.props.onAddUser(newUser);
        this.setState({
            name: '',
            email: '',
            phone: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" name="name" class="form-control" placeholder="Enter name" value={this.state.name} onChange={this.handleInputChange} />
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" name="email" class="form-control" placeholder="Enter email" value={this.state.email} onChange={this.handleInputChange} />
                </div>
                <div class="form-group">
                    <label for="phone">Phone:</label>
                    <input type="number" name="phone" class="form-control" placeholder="Enter phone" value={this.state.phone} onChange={this.handleInputChange} />
                </div>
                <button type="submit" class="btn btn-primary">Save</button>
            </form>
        );
    }
}

export default AddUserForm;
