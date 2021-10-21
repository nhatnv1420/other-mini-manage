import React from 'react'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import './header.css'

function Header() {
    return (
        <div>
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <span className="fs-4">Simple header</span>
                </div>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <NavLink
                            to="/"
                            className="nav-link"
                            activeClassName="active"
                            exact={true}
                        >Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/task-manage"
                            className="nav-link"
                            activeClassName="active"
                        >Task Manager</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/users"
                            className="nav-link"
                            activeClassName="active"
                        >Users</NavLink>
                    </li>
                </ul>
            </header>
        </div >
    )
}

export default Header
