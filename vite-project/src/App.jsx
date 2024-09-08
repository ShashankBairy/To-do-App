import ToDoList from "./components/ToDoList"
import Header from "./components/Header"
import "./components/style.css"
import { useState } from "react"
function App() {

  const [todoitems, settodoitems] = useState(''); // to capture the input 
  const [todos,settodos] = useState([]); // to store todo items
  const [isedit, setisedit] = useState(null) 
  // console.log(todoitems) 
  function handleadd() {
    // console.log(todoitems);
    if(todoitems.trim() !== ""){
      if(isedit !== null){
        settodos(
          todos.map((todo) => todo.id === isedit ? {...todo, task: todoitems, isEditing:false}:todo)
        )
      }
      else{
        settodos([
          ...todos,{id:Date.now(), task:todoitems, isEditing: false},
        ])
      }
      settodoitems("");
    } 
  }

  const handledelete = (id) => {
    let reducedtodo = todos.filter(todo => todo.id !== id);
    settodos(reducedtodo);
  } 
  
  const handleedit = (id) => {
   const todotoedit = todos.find((todo) =>todo.id === id);
   settodoitems(todotoedit.task);
   setisedit(id); 
  }
  
  

  return (
    <div className="container">
    <div className='topbox'>
    <Header /> 
    <div className="textarea">
        <input type="text" className="inputtext"  
        value={todoitems}
        onChange={(e) => settodoitems(e.target.value)}/>
        <button className="addbutton" onClick={handleadd}>
          {isedit ? "Save" : "Add"}
        </button>
    </div>
    <ToDoList todos={todos}
       handledelete={handledelete}
       handleedit = {handleedit}
    />
    </div>
    
    
    </div>
  )
}

export default App
