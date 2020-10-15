import React, { useState, useEffect } from 'react';
import './Main.css';
import axios from 'axios';
import { TaskClass } from '../utils/TaskClass';

import Task from '../componentes/Task';

const Main = () => {

    //Declarar variables
    const [tasks, setTasks] = useState([]);
    const URL = 'https://crud-b45.firebaseio.com/task.json';

    //leer tareas de la base de datos
    const getTasks = () => {
        axios.get(URL)
            .then(respuesta => {
                console.log(respuesta.data);
                setTasks(respuesta.data)
            })
            .catch(error => alert(error));
    }

    const deleteTask = (id) => {
        const URL = `https://crud-b45.firebaseio.com/task/${id}.json`;

        axios.delete(URL)
            .then(() => getTasks())
            .catch(error => alert(error))
    }

    const updateTask = (category, title, done, id) => {
        const tareaActual = new TaskClass(category, title, done, id);

        axios.patch(URL, tareaActual)
            .then(() => getTasks())
            .catch(error => alert(error))
    }

    useEffect( () => {
        //llamada a firebase
        getTasks()
    } , [])



    return (
        <div>
            <main className="background">
                <div className="container">
                    <h1 className="text-light">Tareas</h1>
                    {
                        Object.keys(tasks).map(identificador => {
                            return (
                                <Task 
                                    title ={ tasks[identificador].title }
                                    done ={ tasks[identificador].done }
                                    category ={ tasks[identificador].category }
                                    id = {identificador}
                                    deleteTask = { deleteTask }
                                    updateTask = { updateTask }
                                    key = {identificador}
                                />
                            )
                        })
                    }
                    
                </div>
            </main>
        </div>
    )
}

export default Main
