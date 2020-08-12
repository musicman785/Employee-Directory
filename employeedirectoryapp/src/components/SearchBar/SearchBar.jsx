import React from "react";
import "./SearchBar.css";





function SearchBar(props) {

    return (
        <nav className="navbar navbar-collapse">
            <form className="form-inline">
                <input
                    onChange={props.filteredUsers}
                    value={props.search}
                    className="form-control mr-sm-2"
                    type="text"
                    name="search"
                    placeholder="Search Users"
                    aria-label="Search">

                </input>
            </form>
        </nav>
    )

}
export default SearchBar;