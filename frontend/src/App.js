import React from 'react';
import {BrowserRouter, Link, Navigate, Route, Routes, useLocation} from 'react-router-dom'
import UserList from './components/UserList.js'
import ProjectList from './components/ProjectList.js'
import ToDoList from './components/ToDoList.js'
import ProjectToDo from './components/ProjectToDo.js'
import LoginForm from './components/LoginForm.js'
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

        render () {
        return (
            <div>
                <BrowserRouter>
                    <div><Menu />
                        <ul>
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
                        <Route exact path='/projects' element={<ProjectList projects={this.state.projects} /> } />
                        <Route exact path='/todos' element={<ToDoList todos={this.state.todos} /> } />
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
