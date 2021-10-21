import React, { useState, useEffect } from 'react'
// import { withRouter } from "react-router-dom";
import User from './User'

function Users(props) {
    const [data, setData] = useState({})
    const url = 'https://reqres.in/api/users?page=1'
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url)
            const data = await response.json()
            setData(data)
        }

        fetchData()
    }, [url])

    return (
        <React.Fragment>
            <div className="row">
                {data.data ? data.data.map(user => <User key={user.id} {...user} />) : null}
            </div>
        </React.Fragment>
    )
}

export default Users