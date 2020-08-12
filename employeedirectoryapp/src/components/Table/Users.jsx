import React, { Component } from "react";
import API from "../../utils/API";
import "./Table.css";
import Table from "./Table"
import SearchBar from "../SearchBar/SearchBar"

class Users extends Component {

    state = {
        search: "",
        original: [],
        filtered: [],
        filteredUsers: [],
        className: "fa fa-fw fa-sort up"
    };


    componentDidMount() {
        this.searchUsers();

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

    className = (className) => {
        if (className === "fa fa-fw fa-sort up") {
            this.setState({ className: "fa fa-fw fa-sort down" })
        } else if (className === "fa fa-fw fa-sort down") {
            this.setState({ className: "fa fa-fw fa-sort up" })
        }
    }


    sortedUsers = (e) => {
        const { className, id } = e.target;

        if (className === "fa fa-fw fa-sort up" && id === "name") {
            const sortUsersup = this.state.filtered.sort((a, b) => (a.name.first.toLowerCase() > b.name.first.toLowerCase()) ? 1 : -1)
            this.className(className)
            this.setState({ filteredUsers: sortUsersup });

        } else if (className === "fa fa-fw fa-sort down" && id === "name") {
            const sortUsersDwn = this.state.filtered.sort((a, b) => (a.name.first.toLowerCase() < b.name.first.toLowerCase()) ? 1 : -1)
            this.className(className)
            this.setState({ filteredUsers: sortUsersDwn });

        } else if (className === "fa fa-fw fa-sort up" && id === "phone") {
            const sortUsersDwn = this.state.filtered.sort((a, b) => (a.phone > b.phone) ? 1 : -1)
            this.className(className)
            this.setState({ filteredUsers: sortUsersDwn });

        } else if (className === "fa fa-fw fa-sort down" && id === "phone") {
            const sortUsersDwn = this.state.filtered.sort((a, b) => (a.phone < b.phone) ? 1 : -1)
            this.className(className)
            this.setState({ filteredUsers: sortUsersDwn });

        } else if (className === "fa fa-fw fa-sort up" && id === "email") {
            const sortUsersDwn = this.state.filtered.sort((a, b) => (a.email.toLowerCase() > b.email.toLowerCase()) ? 1 : -1)
            this.className(className)
            this.setState({ filteredUsers: sortUsersDwn });

        } else if (className === "fa fa-fw fa-sort down" && id === "email") {
            const sortUsersDwn = this.state.filtered.sort((a, b) => (a.email.toLowerCase() < b.email.toLowerCase()) ? 1 : -1)
            this.className(className)
            this.setState({ filteredUsers: sortUsersDwn });

        } else if (className === "fa fa-fw fa-sort up" && id === "country") {
            const sortUsersDwn = this.state.filtered.sort((a, b) => (a.location.country.toLowerCase() > b.location.country.toLowerCase()) ? 1 : -1)
            this.className(className)
            this.setState({ filteredUsers: sortUsersDwn });

        } else if (className === "fa fa-fw fa-sort down" && id === "country") {
            const sortUsersDwn = this.state.filtered.sort((a, b) => (a.location.country.toLowerCase() < b.location.country.toLowerCase()) ? 1 : -1)
            this.className(className)
            this.setState({ filteredUsers: sortUsersDwn });
        }

    };





    render() {
        return (
            <div>
                <SearchBar
                    search={this.state.search}
                    filteredUsers={this.filteredUsers}

                />
                <Table
                    users={this.state.filtered}
                    sortedUsers={this.sortedUsers}
                    className={this.state.className}
                />

            </div>
        )
    }
}

export default Users;
