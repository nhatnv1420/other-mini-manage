import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TaskManage from './TaskManage'
import Header from './Header'
import Users from './Users'
import Home from './Home'
import UserDetail from './UserDetail'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function TaskApp() {
    return (
        <React.Fragment>
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/task-manage">
                        <TaskManage />
                    </Route>
                    <Route path="/users" exact>
                        <Users />
                    </Route>
                    <Route path="/users/:id">
                        <UserDetail />
                    </Route>
                </Switch>
            </Router>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <ToastContainer />
        </React.Fragment>
    )
}

export default TaskApp
