import React from 'react';
import {BrowserRouter, Link, Navigate, Route, Routes, useLocation} from 'react-router-dom'
import UserList from './components/UserList.js'
import ProjectList from './components/ProjectList.js'
import ToDoList from './components/ToDoList.js'
import ProjectToDo from './components/ProjectToDo.js'
import LoginForm from './components/LoginForm.js'
import ProjectForm from './components/ProjectForm.js'
import TodoForm from './components/ToDoForm.js'
import Menu from './components/Menu.js'
import Footer from './components/Footer.js'
import axios from 'axios'


const NotFound = () => {
    let location = useLocation()
    return (
        <div>Page <b>{location.pathname}</b> not found</div>
    )
}

class App extends React.Component {
    constructor(prop) {
        super(prop)
        this.state = {
            'users': [],
            'projects': [],
            'todos': [],
            // 'token': '',
            // 'user': ''
        }
    }

    get_token(login, password) {
        axios
        .post('http://127.0.0.1:8080/api-token-auth/', {"username": login, "password": password})
        .then(response => {
            const token = response.data.token

            // console.log(token)
            localStorage.setItem('token', token)
            localStorage.setItem('user', login)
            this.setState({
                'token': token, 'user': login
            }, this.get_data)
        })
        .catch(error => console.log(error))
    }

    logout() {
        localStorage.setItem('token', '')
        localStorage.setItem('user', '')
        this.setState({
            'token': '',
            'user': ''
        }, this.get_data)
    }

    componentDidMount() {
        let token = localStorage.getItem('token')
        this.setState({
            'token': token
        }, this.get_data)
    }

    is_auth(){
        return !!this.state.token
    }

    get_headers() {
        if (this.is_auth()) {
            return {
                'Authorization': 'Token ' + this.state.token
            }
        }
        return {}
    }

    get_data(){
        let headers = this.get_headers()
        axios
        .get('http://127.0.0.1:8080/api/users/', {headers})
        .then(response => {
            const users = response.data
            this.setState({
                'users': users
            })
        })
        .catch(error => {
            this.setState({
                'users': []
            })
            console.log(error)
        })

        axios
        .get('http://127.0.0.1:8080/api/projects/', {headers})
        .then(response => {
            const projects = response.data
            this.setState({
                'projects': projects
            })
        })
        .catch(error => {
            this.setState({
                'projects': []
            })
            console.log(error)
        })

        axios
        .get('http://127.0.0.1:8080/api/todos/', {headers})
        .then(response => {
            const todos = response.data
            this.setState({
                'todos': todos
            })
        })
        .catch(error => {
            this.setState({
                'todos': []
            })
            console.log(error)
        })
    }
        create_project(name, repository_link, users) {
            // console.log(name, repository_link, users)
            let headers = this.get_headers()
            axios
            .post("http://127.0.0.1:8080/api/projects/", {'name': name, 'repository_link': repository_link, 'users': users}, {headers})
            .then(response => {
                this.get_data();
            })
            .catch(error => {
                console.log(error)
            })
        }

        delete_project(id) {
            let headers = this.get_headers()
            axios
            .delete(`http://127.0.0.1:8080/api/projects/${id}`, {headers})
            .then(response => {
                this.setState({
                    'projects': this.state.projects.filter((project) => project.id !== id)
                })
            })
            .catch(error => {
                console.log(error)
        })
        }

        delete_todo(id) {
            let headers = this.get_headers()
            axios
            .delete(`http://127.0.0.1:8080/api/todos/${id}`, {headers})
            .then(response => {
                // const users = response.data
                this.setState({
                    'todos': this.state.todos.filter((todo) => todo.id !== id)
                })
            })
            .then(response => {
                this.get_data();
            })
            .catch(error => {
                console.log(error)
        })
        }

        create_todo(project, text, user) {
            let headers = this.get_headers()
            axios
            .post("http://127.0.0.1:8080/api/todos/", {'project_name': project, 'text': text, 'user': user}, {headers})
            .then(response => {
                this.get_data();
            })
            .catch(error => {
                console.log(error)
            })
        }

        render () {
        return (
            <div>
                <BrowserRouter>
                    <div><Menu />
                        <ul>
                            {this.is_auth() && <li><Link to="/projects/create">Projects (new)</Link></li>}
                            {this.is_auth() && <li><Link to="/todos/create">ToDo (new)</Link> </li>}
                            {this.is_auth() && <p>Пользователь: <b>{localStorage.getItem('user')}</b></p>}
                            <li>
                                {this.is_auth() ? <button onClick={() => this.logout()}> Logout
                                </button> : <Link to="/login">Login</Link>}
                            </li>
                        </ul>
                    </div>
                    <div>
                    <Routes>
                        <Route exact path='/' element={<UserList users={this.state.users} /> } />
                        <Route exact path='/projects' element={
                            <ProjectList projects={this.state.projects} delete_project={(id) => this.delete_project(id)}/> } />
                        <Route exact path='/projects/create'
                               element={<ProjectForm users={this.state.users} create_project={(name, repository_link, users) => this.create_project(name, repository_link, users)} /> } />
                        <Route exact path='/todos' element={
                            <ToDoList todos={this.state.todos} delete_todo={(id) => this.delete_todo(id)}/> } />
                        <Route exact path='/todos/create'
                               element={<TodoForm user={this.state.users} project={this.state.projects}
                                                  create_todo={(project, text, user) => this.create_todo(project, text, user)} /> } />
                        <Route exact path='/login' element=
                            {<LoginForm get_token={(login, password) => this.get_token(login, password)}/> } />
                        <Route path="/users" element={<Navigate to="/"/>} />
                        <Route path='/projects/:id' element={<ProjectToDo todos={this.state.todos} /> } />
                        <Route path="*" element={<NotFound /> } />
                    </Routes>
                    </div>
                    <div><Footer /></div>
                </BrowserRouter>
            </div>
        )
    }
}
export default App;
