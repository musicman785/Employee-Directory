import React, { Component } from "react";
import API from "../../utils/API";
import "./Table.css";
import Table from "./Table"
import SearchBar from "../SearchBar/SearchBar"

class Users extends Component {

    state = {
        search: "",
        original: [],
        filtered: []
    };


    componentDidMount() {
        this.searchUsers();
        // this.filtered();
    };

    searchUsers = () => {
        API.search()
            .then(res => this.setState({ original: res.data.results, filtered: res.data.results }))
            .catch(err => console.log(err));
    }

    filteredUsers = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
        if (value === "") {
            this.setState({ filtered: this.state.original })
        } else if (value !== "") {
            const filtered = this.state.original.filter(data =>
                data.name.first.toLowerCase().startsWith(value.toLowerCase()) || data.name.last.toLowerCase().startsWith(value.toLowerCase()) || (`${data.name.first} ${data.name.last}`).toLowerCase().startsWith(value.toLowerCase())
            )
            this.setState({ filtered })
        }
    }





    render() {
        return (
            <div>
                <SearchBar
                    search={this.state.search}
                    filteredUsers={this.filteredUsers}
                />
                <Table
                    users={this.state.filtered}
                />

            </div>
        )
    }
}

export default Users;
