import React from "react";
import "./Table.css";

function Table() {
    return (
        <table class="table table-dark">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First<span id="clickable"><i className="fa fa-fw fa-sort"></i></span></th>
                    <th scope="col">Last<span id="clickable"><i className="fa fa-fw fa-sort"></i></span></th>
                    <th scope="col">Handle<span id="clickable"><i className="fa fa-fw fa-sort"></i></span></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td scope="row">2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td scope="row">3</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </table >
    )
};

export default Table;