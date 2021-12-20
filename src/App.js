import './App.css';
import { useEffect , useState} from 'react';
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList';

const data = [
  { id: 1, text: "Finish contacts hw", status: false },
  { id: 2, text: "Study react hooks", status: false },
  { id: 3, text: "Finish Clever programmer challenge", status: false },
  { id: 4, text: "Run 1 mile", status: false },
  { id: 5, text: "Finish errands", status: false },
  { id: 6, text: "Complete Todo App", status: false },
];




function App() {
  //#1 Create a state that holds the data arr
  const [tasks, setTasks] = useState(data)
  
  // *Create a state that has the status of the of the filter
  const [filterStatus, setFilterStatus] = useState("all")

  // **Create a state that holds the filtered Tasks and use that to map through Tasks list instead
  const [filteredTasks, setFilteredTasks] = useState(tasks)
  
  // *Create a side effect that runs a function that switches the todos by filter when the todos OR filter changes
  useEffect(()=> {
    console.log("RUNNINF")
    // *Function that handles the filter
    const handleFilter = () => {
      
      if(filterStatus === "active") {
        console.log("THE FILTER IS ACTIVE")
        return setFilteredTasks(tasks.filter((task)=> !task.status))
      }
      else if (filterStatus === "completed") {
        console.log("The filter status is COMPLETED")
        return setFilteredTasks(tasks.filter((task)=> task.status))
      } else {
        console.log("showing filter of ALL")
        return setFilteredTasks(tasks)
      }
    }

    handleFilter()
  }, [tasks,filterStatus])

  

;

  return (

    <div className="App">
      <div className="container">
        {/* Can turn this to a header component */}
          <div className="header">
              <div className="title">
                  TODO
              </div>
              <div className="theme">
                  <img src="assets/icon-sun.svg" alt=''/>
              </div>
          </div>

          {/* #2 Pass down todos state and setTodos function as props */}
          <TaskInput tasks = {tasks} setTasks = {setTasks} />

          {/* SHOULD BE THE TODOLIST COMPONENT */}
          {/* Pass down tasks state, setTasks function, filteredTasks, filterTasks, setFilterStatus function */}
          {/* #9 */}
          <TaskList
            tasks = {tasks}
            setTasks = {setTasks}
            filterStatus = {filterStatus}
            setFilterStatus = {setFilterStatus}
            filteredTasks = {filteredTasks}
          />
      </div>
    </div>
  );
}

export default App;
