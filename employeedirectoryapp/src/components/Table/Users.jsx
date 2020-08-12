import React, { Component } from "react";
import API from "../../utils/API";
import "./Table.css";
import Table from "./Table"
import SearchBar from "../SearchBar/SearchBar"

class Users extends Component {

    state = {
        users: []
    };


    componentDidMount() {
        this.searchUsers();
    };

    searchUsers = () => {
        API.search()
            .then(res => this.setState({ users: res.data.results }))
            .catch(err => console.log(err));
    }

    // create a method to filter out users and campare to search string





    render() {
        return (
            <div>
                <Table
                    users={this.state.users}
                />
                <SearchBar

                />
            </div>
        )
    }
}

export default Users;
