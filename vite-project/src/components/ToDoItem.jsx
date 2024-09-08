import "./style.css"
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
function TodoItem({item, handledelete, handleedit}){

    return(
        <div className="content">
         <div>
          <p>{item.task}</p>
         </div>
          <div>
          <CiEdit className="icon" onClick={() => handleedit(item.id)}/>
          <MdDeleteOutline className="check-icon" title="Delete" onClick={()=>  handledelete(item.id)}/>
          </div>
        </div>
    )
}

export default TodoItem