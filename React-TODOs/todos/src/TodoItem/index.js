import './TodoItem.css'
import { IoClose,IoCheckmarkDoneSharp } from "react-icons/io5";

function TodoItem({completed, text, onComplete, onDelete}) {
    return(
      <li className='TodoItem'>
        <span 
        className={`Icon Icon-check ${completed && "Icon-check--activate"}`}
        onClick={onComplete}
        ><IoCheckmarkDoneSharp /></span>
        <p className={`TodoItem-p && ${completed && "TodoItem-p--complete"}`}>{text}</p>
        <span 
          className={`Icon Icon-delete`}
          onClick={onDelete}
          ><IoClose />
        </span>
      </li>
    )
  }

export {TodoItem};