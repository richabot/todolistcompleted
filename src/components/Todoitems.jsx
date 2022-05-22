import React from 'react'
import Todolist from './Todolist'

const Todoitems = (props) => {
    
    

  return (
    props.list.map((el,ind) => (
        <div className="todoitems" key={ind}>
            <Todolist item={el} delete={props.delete} done={props.done}/>
        </div>

        
    ))
    
  )
}

export default Todoitems