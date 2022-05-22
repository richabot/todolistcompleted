import React from 'react'
import "./file.css";

const Todolist = (props) => {
    const [completed, setCompleted] = React.useState(props.item.isCompleted)
    
    
  return (
    
      
        <div className={!props.item.isCompleted ? "todolist" : "" } >
               
              <div className='input'> 
               <input className='checkbox' onChange={(e) => (
                   props.item.isCompleted = e.target.checked,
                   setCompleted(e.target.checked),
                   props.done(props.item)
                   
               )} type={!props.item.isCompleted ? "checkbox" : "hidden"}/> 
              </div>

              <div className='text'> 
                    <p className={completed ? "striked" : ""}>{!props.item.isCompleted ? props.item.value : ""} </p>
               </div>
               <div className='delete' > 
                    <p className='tr' onClick={() => props.delete(props.item.value)}>{!props.item.isCompleted ? "X" : "" }</p>
               </div>
        </div>
      
    
    
  )
}

export default Todolist