import React from 'react'
import TaskItem from './TaskItem'

function TaskShow(props) {
    return (
        <div>
            <h1 className="mb-5">Task Manage</h1>
            <button
                className="btn btn-primary f-left mt-3"
                onClick={() => props.toggleShow(true)}
            >
                Click to add task
            </button>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Task</th>
                            <th scope="col">Status</th>
                            <th scope="col">Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.tasks.map((task, index) =>
                            <TaskItem
                                key={task.id}
                                {...task}
                                index={index}
                                handleEdit={props.handleEdit}
                                handleRemove={props.handleRemove}
                                idEdit={props.idEdit}
                                handleSave={props.handleSave}
                            />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TaskShow
