/* eslint-disable */
import React from "react";
import { isAuthenticated } from "../Auth/index";
import { Link } from "react-router-dom";

const index = () => {
    const {
        user: { _id, name, email, role }
    } = isAuthenticated();
    const token = isAuthenticated().token;
    const user = isAuthenticated().user;


    const userInfo = () => {
        return (
            <div className="card mb-5">
                <h3 className="card-header">User Information</h3>
                <ul className="list-group">
                    <li className="list-group-item">{name}</li>
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">
                        {role === 1 ? "Admin" : "Freemium User"}
                    </li>
                </ul>
            </div>
        );
    };

    const userLinks = () => {
        return (
            <div className="card">
                <h4 className="card-header">User Links</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to={`/profile/${_id}`}>
                            Update Profile
                        </Link>
                    </li>
                </ul>
            </div>
        );
    };
    return (
  
            <div className="row">
                <div className="col-3">{userLinks()}</div>
                <div className="col-9">
                    {userInfo()}
                </div>
            </div>
    );
};
export default index;
