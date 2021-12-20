import React from 'react'
import FilterControl from './FilterControl'
import Task from './Task'
// #10
function TaskList({tasks,setTasks, filterStatus, setFilterStatus,filteredTasks}) {

    // Function that will clear completed Tasks
    const clearCompleted = () => {
        console.log("HI")
        setTasks(tasks.filter((task)=> !task.status))
        setFilterStatus("all")
    }
    
    return (
        <div className="todo-items-wrapper">
        <div className="todo-items">
            {/* #11 Map through the tasks array that get's passed down form app */}

         {/*Used to be tasks.map() but filteredTasks.map() is better  */}
         {filteredTasks.map((task)=>{
            //  #12
            return <Task
                task = {task}
                setTasks = {setTasks}
                tasks = {tasks}
             />
         })}
        </div>




        <div className="todo-items-info">
            <div className="items-left">
                5 items left
            </div>
            {/* SHOULD BE THE FILTER CONTROLLER COMPONENT */}

            <FilterControl 
                filterStatus = {filterStatus}
                setFilterStatus = {setFilterStatus}
            />

            <div className="items-clear">
                <span onClick={clearCompleted}>Clear Completed</span>
            </div>
        </div>
    </div>
    )
}

export default TaskList
