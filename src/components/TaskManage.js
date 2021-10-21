import React, { useState, useEffect } from 'react'
import TaskForm from './TaskForm'
import TaskShow from './TaskShow'
import '../app.css'
import { toast } from 'react-toastify';

function TaskManage() {
    const [tasks, setTasks] = useState([])
    const [isShowForm, setIsShowForm] = useState(false)
    const [idEdit, setIdEdit] = useState('')
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('tasks')) || []
        setTasks(data)
    }, [])

    const toggleShow = (value) => {
        setIsShowForm(value)
    }

    const handleAddTask = (task) => {
        const newTasks = [...tasks, task]
        setTasks(newTasks)
        localStorage.setItem('tasks', JSON.stringify(newTasks))
    }

    const handleRemove = (id) => {
        const newTasks = tasks.filter(task => task.id !== parseInt(id))
        setTasks(newTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks))
        toast.error('Đã xóa', { autoClose: 1500 })
    }

    const handleEdit = (id) => {
        setIdEdit(id)
    }

    const handleSave = (taskEdit) => {
        const index = tasks.findIndex(task => task.id === taskEdit.id)
        tasks[index] = taskEdit
        setTasks(tasks)
        localStorage.setItem('tasks', JSON.stringify(tasks))
        toast.success('Edit Thành công', { autoClose: 1500 })
    }

    return (
        <div className="app">
            {isShowForm ?
                <TaskForm
                    toggleShow={toggleShow}
                    handleAddTask={handleAddTask}
                /> :
                null}
            <div className="container">
                <TaskShow
                    tasks={tasks}
                    toggleShow={toggleShow}
                    handleEdit={handleEdit}
                    handleRemove={handleRemove}
                    idEdit={idEdit}
                    handleSave={handleSave}
                />
            </div>
        </div>
    )
}

export default TaskManage
