import React, { useState } from 'react'
import Check from '../images/icon-check.svg'

// #13
function Task({task,tasks,setTasks}) {

    const [mutableTodo, setMutableTodo] = useState(task)

    const checked = mutableTodo.status ? "checked" : "";
    const checkIcon = mutableTodo.status ? (
        <img src ={Check} alt ="Completed"/>
    ) : ""
    const markCompleted = () => {
        // Set the status to the opposite onClick (frontend)
        setMutableTodo({...mutableTodo, status: !mutableTodo.status})

        // Don't forget to update Tasks state otherwise it won't show up when you click other Statuses like Completed
        const updatedTodos = tasks.map((item)=> 
            task.id === item.id ? {...item, status: !item.status} : item)
        setTasks(updatedTodos)
        
    }

    return (

        <div className="todo-item">
        <div className="check" onClick={markCompleted}>
            {/* mutableTodo.status ? 'check-mark checked' : 'check-mark' */}
            <div className={`check-mark ${checked}`}>
                {checkIcon}
            </div>
        </div>
        <div className={`todo-text ${checked}`}>
            {/* #14 */}
           {task.text}
        </div>
    </div>
    )
}

export default Task
