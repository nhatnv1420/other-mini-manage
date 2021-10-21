import React, { useState } from 'react'
import { toast } from 'react-toastify';

function TaskForm(props) {
    const [task, setTask] = useState({
        id: '',
        name: '',
        status: '',
    })

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        const id = Date.now()
        setTask(prevTask => {
            return { ...prevTask, [name]: value, id: id }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (task.status && task.name) {
            props.handleAddTask(task)
            props.toggleShow(false)
            toast.success('Thêm thành công', { autoClose: 1500 })
        }
    }

    const handleCancel = () => {
        setTask({
            id: '',
            name: '',
            status: '',
        })
    }

    return (
        <div className="form" onSubmit={handleSubmit}>
            <form className="form-input">
                <i
                    className="fas fa-times icon-close"
                    onClick={() => props.toggleShow(false)}
                />
                <h3 htmlFor="name" className="form-label">Task</h3>
                <input
                    type="text"
                    className="form-control mb-3"
                    name="name"
                    id="name"
                    value={task.name}
                    placeholder="Enter your task..."
                    onChange={handleChange}
                />
                <h3 htmlFor="status" className="form-label">Status</h3>
                <select
                    className="form-select mb-5"
                    name="status"
                    id="status"
                    value={task.status}
                    onChange={handleChange}
                >
                    <option value="">---Chose your status ---</option>
                    <option value="Active">Active</option>
                    <option value="Pause">Pause</option>
                </select>
                <button type="submit" className="mr-10">Add</button>
                <button className="" onClick={handleCancel}>Cancel</button>
            </form >
        </div>
    )
}

export default TaskForm
