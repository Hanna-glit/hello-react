import React, { useEffect, useState } from "react";

function App() {

  const [taskList, setTaskList] =useState([
    { "id":"83453421", "taskContent":"asodf" },
    { "id":"97679876", "taskContent":"qwier" }, 
    { "id":"12349767", "taskContent":"cfurk" }
  ])
   const [newTaskItem, updateNewTaskItem] = useState("")

   let addNewTaskToList = function(taskItem) {
     let taskListCopy = [...taskList]
     let taskItemObj = {"id": Math.floor(Date.now() / 1000), "taskContent": taskItem }
     taskListCopy.push(taskItemObj)
     updateNewTaskItem("")
    setTaskList(taskListCopy)
    console.log(taskList)
   }

   let deleteTask = function(taskId) {
    let taskListCopy = [...taskList]
    let shortenedTaskList = taskListCopy.filter(taskListItem => taskListItem.id !==taskId)
    console.log(shortenedTaskList)
   }

   return ( 

    <div className="App">

      <input type="text" value={newTaskItem} onChange={ (e) => updateNewTaskItem(e.target.value) } />
      <input type="button" value="Lisää taski" onClick={() => addNewTaskToList(newTaskItem) } />      
      
    { taskList.map( (singleTask) => <p>{singleTask.taskContent} <button onClick={() => deleteTask(singleTask.id)}>x</button></p>) }

    {/* <input type="button" value="Lisää taski" onClick={() => addNewTaskToList(newTaskItem) }/> */}
 </div>
 );
}

export default App;