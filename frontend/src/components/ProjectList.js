import React from 'react'
import {Link} from 'react-router-dom'


const ProjectItem = ({project, delete_project}) => {
    return (
    <tr>
        <td><Link to={`/projects/${project.id}`}>{project.name}</Link> </td>
        <td>{project.repository_link}</td>
        <td>{project.users + ''}</td>
        <td><button onClick={()=>delete_project(project.id)} type='button'>Delete</button></td>
    </tr>
    )
}

const ProjectList = ({projects, delete_project}) => {
    return (
        <table border="1" >
            <th>
                Name
            </th>
            <th>
                Repository link
            </th>
            <th>
                Users
            </th>
            <th>
                Delete
            </th>
            {projects.map((project) => <ProjectItem project={project} delete_project={delete_project}/>) }
        </table>
    )
}

export default ProjectList;
