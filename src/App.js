import React, { useEffect, useState } from "react";

function App() {

  const [taskList, setTasklist] =useState([
    { "id":"83453421", "taskContent":"asdf" },
    { "id":"97679876", "taskContent":"qwer" }, 
    { "id":"12349767", "taskContent":"cfrk" }
  ])
   const [newTaskItem, updateNewTaskItem] = useState("")

   let addNewTaskToList = function (taskItem) {
     let taskListCopy = [...taskList]
     taskListCopy.push(taskItem)
    setTaskList(taskListCopy)
    console.log(taskList)
   }

   let deleteTaskFormList = function(TaskItemId)

//   super(props)
  //  this.state = {
   //    taskList: [
   //   "Tehtävä 1",
   //   "Tehtävä 2",
   //    "Tehtävä 3"
   // ]
   // }

return ( 

    <div className="App">

      <input type="text" value={newTaskItem} onChange={ (e) => updateNewTaskItem(e.target.value) } />
      <input type="button" value="Lisää taski" onClick={() => addNewTaskToList(newTaskItem) } />      
      
    { taskList.map( (singleTask) => <p>{singleTask.taskContent}</p>) }

    //  <button type="button" onClick="{() =>increaseCounter(counter + 1)}">Laskurin arvo {counter}</button> 
    </div>
 );

 

export default App;
