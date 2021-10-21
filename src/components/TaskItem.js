import React, { useState, useEffect } from 'react'

function TaskItem(props) {
    const { id, name, status, index, idEdit } = props
    const [task, setTask] = useState({
        id: '',
        name: '',
        status: '',
    })

    useEffect(() => {
        setTask({
            id: id,
            name: name,
            status: status,
        })
    }, [id, name, status])

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setTask(task => ({ ...task, [name]: value }))
    }

    const handleEdit = (idEdit) => {
        props.handleEdit(idEdit)
    }

    const handleSave = (taskEdit) => {
        props.handleSave(taskEdit)
        props.handleEdit('')
    }

    const handleRemove = (id) => {
        if (window.confirm('Are you sure you want to remove')) {
            props.handleRemove(id)
        }
    }

    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{idEdit === id ?
                <input
                    type="text"
                    name="name"
                    value={task.name}
                    onChange={handleChange}
                /> :
                name}
            </td>
            <td className={task.status === 'Active' ? 'active' : null}>
                {idEdit === id ?
                    <select
                        name="status"
                        id="status"
                        value={task.status}
                        onChange={handleChange}
                    >
                        <option value="Active">Active</option>
                        <option value="Pause">Pause</option>
                    </select> :
                    status}
            </td>
            <td>
                {idEdit === id ?
                    <button className="btn btn-primary mr-10" onClick={() => handleSave(task)}>Save</button>
                    :
                    <button className="btn btn-success mr-10" onClick={() => handleEdit(id)}>Edit</button>
                }

                <button className="btn btn-danger" onClick={() => handleRemove(id)}>Remove</button>
            </td>
        </tr>
    )
}

export default TaskItem
