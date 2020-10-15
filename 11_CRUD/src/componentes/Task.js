import { findAllByTitle } from '@testing-library/react'
import React from 'react'

const Task = (props) => {
    const {title, done, category, deleteTask, updateTask, id} = props;

    // const eliminar = () => {
    //     deleteTask(id)
    // }

    return (
        <div className="card mt-3">
            <h5 className="card-header">{title}</h5>
            <div className="card-body">
                <h5 className="card-title">{done}</h5>
                <p className="card-text">{category}</p>
                {
                    done 
                    ? <button className="btn btn-secondary" onClick={ () => {updateTask(category, title, false, id)}}>Deshacer</button>
                    : <button className="btn btn-primary" onClick={ () => {updateTask(category, title, true, id)} }>Completar</button>
                }

                <button onClick={() => {deleteTask(id)}} className="btn btn-danger">Eliminar</button>
            </div>
        </div>
    )
}

export default Task