import React from 'react'
import Data from './Data'
import Todoitems from './Todoitems'

const Todo = () => {

    const [input, setInput] = React.useState("")

    const [todo, setTodo] = React.useState([])

    const handlechange = (el) => {
        setInput(el.target.value);
    }

    const deletefun = (value) => {
        setTodo(todo.filter((todo) => todo.value !== value))
    }

    const [data, setData] = React.useState([])

    const datatodo = (val) => {
        
        if(val.isCompleted === true){
            data.push(val)
            
        }
        
    }

    const deletedone = (vall) => {
        setData(data.filter((data) => data.value !== vall))
    } 

  return (
    <div >

        <div className='todocont'>
            <input className='intext' placeholder='Enter Todo...' value={input} onChange={handlechange}/>

            <button className='add' onClick={() => {
                todo.push({value:input, isCompleted:false});
                setTodo([...todo]);
                setInput("");
            }}>+</button>
        </div>

        <div className='sub'>

        <div className={data.length>0 ? "maindiv" : ""}>
            <Todoitems list={[...todo]} delete={deletefun} done={datatodo}/>
        </div>

        <button className='showbtn' onClick={() => (
            setData([...data])
        )}>Show Completed Todos</button>

        <Data data={data} delete={deletedone}/>

        </div>

    </div>
  )
}

export default Todo