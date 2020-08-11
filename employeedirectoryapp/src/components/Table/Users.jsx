import React, { Component } from "react";
import API from "../../utils/API";
import "./Table.css";
import Table from "./Table"
import SearchBar from "../SearchBar/SearchBar"

class Users extends Component {

    state = {
        users: [],
        search: ""
    };


    componentDidMount() {
        this.searchUsers()
    };

    searchUsers = () => {
        API.search()
            .then(res => this.setState({ users: res.data.results }))
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault()
        this.searchUsers(this.state.search)
    };

    render() {
        return (
            <div>
                <Table
                    users={this.state.users}
                />
                <SearchBar
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
            </div>
        )
    }
}

export default Users;
