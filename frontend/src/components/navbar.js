import React from 'react';
import { Link } from 'react-router-dom';

function navbar() {

    return (
        <div>
            <div className="bg-light p-4 text-primary h3">
                <ul class="nav justify-content-center navbar-expand-lg">
                    <li class="nav-item">
                        <Link class="nav-link" to={"/"}>Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to={"/profile"}>Profile</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to={"/register"}>Register</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to={"/login"}>Login</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default navbar;