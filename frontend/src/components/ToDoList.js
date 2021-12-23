import React from 'react'


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

const ToDoList = ({todos}) => {
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
            {todos.map((todo) => <ToDoItem todo={todo} />) }
        </table>
    )
}

export default ToDoList;
