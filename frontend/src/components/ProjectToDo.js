import {useParams} from 'react-router-dom'


const ToDoItem = ({todo}) => {
    return (
    <tr>
        <td>{todo.project_name}</td>
        <td>{todo.text}</td>
        <td>{todo.created}</td>
        <td>{todo.updated}</td>
        <td>{todo.user}</td>
        <td>{todo.is_done}</td>
    </tr>
    )
}

const ProjectToDo = ({todos}) => {
    let { id } = useParams();
    // перестал работать todo.project_name.includes(parseInt(id)))
    // let filteredTodos = todos.filter((todo) => todo.project_name.includes(parseInt(id)))
    let filteredTodos = todos.filter((todo) => todo.project_name == id)

    return (
        <table>
            <th>
                Project name
            </th>
            <th>
                Text
            </th>
            <th>
                Created
            </th>
            <th>
                Updated
            </th>
            <th>
                User
            </th>
            <th>
                Is done
            </th>
            {filteredTodos.map((todo) => <ToDoItem todo={todo} />)}
        </table>
    )
}

export default ProjectToDo;