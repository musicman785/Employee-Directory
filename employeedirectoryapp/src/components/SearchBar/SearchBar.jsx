import React from "react";
import "./SearchBar.css";

function SearchBar(props) {
    return (
        <nav className="navbar navbar-collapse">
            <form className="form-inline">
                <input
                    onChange={props.handleInputChange}
                    value={props.value}
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Search"
                    aria-label="Search">

                </input>
                <button onclick={props.handlFormSubmit} className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    )
}
export default SearchBar;