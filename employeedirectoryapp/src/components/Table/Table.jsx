import React from "react";


function Table(props) {
    return (
        <table className="table table-dark">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name<span id="clickable"><i className="fa fa-fw fa-sort"></i></span></th>
                    <th scope="col">Phone<span id="clickable"><i className="fa fa-fw fa-sort"></i></span></th>
                    <th scope="col">Email<span id="clickable"><i className="fa fa-fw fa-sort"></i></span></th>
                    <th scope="col">Country<span id="clickable"><i className="fa fa-fw fa-sort"></i></span></th>
                </tr>
            </thead>
            <tbody>
                {props.users.map(user => (
                    <tr>
                        <td><img src={user.picture.medium} alt="user profile" /></td>
                        <td>{user.name.first} {user.name.last}</td>
                        <td>{user.phone}</td>
                        <td>{user.email}</td>
                        <td>{user.location.country}</td>
                    </tr>
                ))}
            </tbody>
        </table >
    )
};

export default Table;