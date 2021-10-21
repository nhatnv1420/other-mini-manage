import React, { useState, useEffect } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import axios from 'axios'
function UserDetail(props) {
    const id = props.match.params.id
    const [data, setData] = useState(null)
    useEffect(() => {
        const url = `https://reqres.in/api/users/${id}`
        const fetchData = async () => {
            // fetch(url)
            //     .then(response => response.json())
            //     .then(data => setData(data))
            //     .catch(() => {
            //         throw new Error(`No has id: ${id}`)
            //     })
            try {
                const response = await fetch(url)
                const data = await response.json()
                setData(data)
            } catch (error) {
                throw new Error(`No has id: ${id}`)
            }
        }

        fetchData()
    }, [id])

    if (data) {
        const { email, first_name, last_name, avatar } = data.data
        return (
            <div className="card" style={{ width: '18rem', margin: '0 auto' }}>
                <img src={avatar} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{last_name + ' ' + first_name}</h5>
                    <p className="card-text">{email}</p>
                    <NavLink
                        to="/users"
                        className="btn btn-primary"
                    >Back</NavLink>
                </div>
            </div>
        )
    }

    return null
}

export default withRouter(UserDetail)
