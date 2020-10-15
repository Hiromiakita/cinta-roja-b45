import React from 'react'
import CreateTask from '../componentes/CreateTask'
import { TaskClass } from '../utils/TaskClass';
import axios from 'axios'
import { useHistory } from 'react-router-dom';


const Create = () => {

    const history = useHistory();

    const createTask = (title, category) => {
        const URL = 'https://crud-b45.firebaseio.com/task.json';
        const newTask = new TaskClass(category, title, false, 'a');

        axios.post(URL, newTask.a)
            .then(history.push('/'))
            .catch(error => alert(error))
    }

    return (
        <main className="background">
            <div className="container">
                <h1>Crear tarea</h1>
                <CreateTask createTask={createTask}/>
            </div>
        </main>
    )
}

export default Create
