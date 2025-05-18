import {useState} from 'react';
export default function TodoList(){

    const [newTodo,setNewTodo]=useState("");

    const [todo,setTodo]=useState([]);

    let taskadder = (event)=>{
        setNewTodo(event.target.value);
    };
    console.log(newTodo);

    function todoUpdater(){
         setTodo([...todo,newTodo]);
         setNewTodo("");//this make input field empty after adding tasks
    };
        

    return(
        <>
        <h4>To-do List</h4>
        <input value={newTodo} placeholder="Add Tasks" onChange={taskadder}></input>
        <button onClick={todoUpdater}>Add Task</button>
        <br/><br/><br/>
        <hr></hr>
        <h2 >Tasks</h2>
        <ul>
            {
            todo.map((todo)=>{
                return <li>{todo}</li>
                })
            }
        </ul>
        </>
    );
}