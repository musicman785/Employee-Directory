import React from "react";
import "./SearchBar.css";
import { Component } from "react";




class SearchBar extends Component {
    state = {
        search: ""
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value.substr(0, 20) })
        //call parent method for filtering and pass in current state of search

    };



    render() {
        return (
            <nav className="navbar navbar-collapse">
                <form className="form-inline">
                    <input
                        onChange={this.handleInputChange.bind(this)}
                        value={this.state.search}
                        className="form-control mr-sm-2"
                        type="text"
                        placeholder="Search Users"
                        aria-label="Search">

                    </input>
                    {/* <button onclick={props.handlFormSubmit} className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button> */}
                </form>
            </nav>
        )
    }
}
export default SearchBar;