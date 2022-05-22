import React from 'react'

const Data = (props) => {
  return (
      props.data.map((el, id) => (
    <div className='disdiv' key={id}>
       <s className='stext'>{el.value}</s>
       <button className='dbtn' onClick={() => props.delete(el.value)}>Delete</button>
    </div>
    ))
  )
}

export default Data