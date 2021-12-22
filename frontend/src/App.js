import React from 'react';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import UserList from './components/UserList.js'
import ProjectList from './components/ProjectList.js'
import ToDoList from './components/ToDoList.js'
import ProjectToDo from './components/ProjectToDo.js'
import Menu from './components/Menu.js'
import Footer from './components/Footer.js'
import axios from 'axios'


const NotFound = () => {
    return (
        <div ><b>404 Page not found</b></div>
    )
}

class App extends React.Component {
    constructor(prop) {
        super(prop)
        this.state = {
            'users': [],
            'projects': [],
            'todos': [],
        }
    }

    componentDidMount() {
        axios
        .get('http://127.0.0.1:8000/api/users/')
        .then(response => {
            const users = response.data
            this.setState({
                'users': users
            })
        })
        .catch(error => console.log(error))

        axios
        .get('http://127.0.0.1:8000/api/projects/')
        .then(response => {
            const projects = response.data
            this.setState({
                'projects': projects
            })
        })
        .catch(error => console.log(error))

        axios
        .get('http://127.0.0.1:8000/api/todos/')
        .then(response => {
            const todos = response.data
            this.setState({
                'todos': todos
            })
        })
        .catch(error => console.log(error))
    }

    render () {
        return (
            <div>
                <BrowserRouter>
                    <div><Menu /></div>
                    <Routes>
                        <Route exact path='/' element={<UserList users={this.state.users} /> } />
                        <Route exact path='/projects' element={<ProjectList projects={this.state.projects} /> } />
                        <Route exact path='/todos' element={<ToDoList todos={this.state.todos} /> } />
                        <Route path="/users" element={<Navigate to="/"/>} />
                        <Route path='/projects/:id' element={<ProjectToDo todos={this.state.todos} /> } />
                        <Route path="*" element={<NotFound /> } />
                    </Routes>
                    <div><Footer /></div>
                </BrowserRouter>
            </div>
        )
    }
}
export default App;
