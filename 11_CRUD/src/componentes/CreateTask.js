import React from 'react'

const CreateTask = () => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="form-group">
                    <label htmlFor="title">Tarea</label>
                    <input type="text" className="form-control" id="title" />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Categoría</label>
                    <input type="text"className="form-control" id="category" />
                </div>
                <button className="btn btn-primary">Agregar</button>
            </div>
        </div>
    )
}

export default CreateTask
