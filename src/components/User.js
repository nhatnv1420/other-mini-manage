import React from 'react'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'

function User(props) {
    const { id, email, first_name, last_name } = props
    return (
        <div className="card mb-2" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{first_name + ' ' + last_name}</h5>
                <p className="card-text">{email}</p>
                <NavLink
                    to={`/users/${id}`}
                    className="btn btn-primary"
                >Learn more</NavLink>
            </div>
        </div>
    )
}

export default User