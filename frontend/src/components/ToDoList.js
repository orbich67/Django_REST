import React from 'react'


const ToDoItem = ({todo, delete_todo}) => {
    return (
    <tr>
        <td>{todo.project_name}</td>
        <td>{todo.text}</td>
        <td>{todo.created}</td>
        <td>{todo.updated}</td>
        <td>{todo.user}</td>
        <td>{todo.is_done}</td>
        <td><button onClick={()=>delete_todo(todo.id)} type='button'>Delete</button></td>
    </tr>
    )
}

const ToDoList = ({todos, delete_todo}) => {
    return (
        <table border="1" >
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
            {todos.map((todo) => <ToDoItem todo={todo} delete_todo={delete_todo}/>) }
        </table>
    )
}

export default ToDoList;
