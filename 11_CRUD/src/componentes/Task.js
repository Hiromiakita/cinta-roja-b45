import React from 'react'

const Task = () => {
    return (
        <div className="card">
            <h5 className="card-header">titulo</h5>
            <div className="card-body">
                <h5 className="card-title">false</h5>
                <p className="card-text">categoría</p>
                <button className="btn btn-primary">Completar</button>
                <button className="btn btn-danger">Eliminar</button>
            </div>
        </div>
    )
}

export default Task