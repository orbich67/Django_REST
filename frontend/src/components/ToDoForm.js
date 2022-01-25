import React from 'react'

class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            project: '',
            text: '',
            user: '',
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        this.props.create_todo(this.state.project, this.state.text, this.state.user)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)} >

                <select name="project" onChange={(event) => this.handleChange(event)}>
                    {this.props.project.map((project) => <option value={project.id}>{project.name}</option>)}
                </select>
                <input type="text" name="text" placeholder="text" value={this.state.text}
                    onChange={(event) => this.handleChange(event)}/>
                <select name="user" onChange={(event) => this.handleChange(event)}>
                    {this.props.user.map((user) => <option value={user.id}>{user.first_name} {user.last_name}</option>)}
                </select>
                <input type="submit" value="Create" />
            </form>
        )
    }
}

export default TodoForm;
