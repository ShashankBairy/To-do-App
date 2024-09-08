import TodoItem from "./ToDoItem"
function ToDoList({todos, handledelete, handleedit}){
    return(
        <>
        { todos.map((item,index) => ( <TodoItem key={index} item={item}
          handledelete ={handledelete}
          handleedit ={handleedit}
        />)) }
         </>
    )
}

export default ToDoList