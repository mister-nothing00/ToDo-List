import React, {useSate} from 'react'

export const TodoForm = ({addTodo}) => {

  const [value, setValue] = React.useState("")

  

   function handleChange(event){

    setValue(event.target.value)

   }

   const handleSubmit= e => {

    e.preventDefault()

    addTodo(value)

    setValue("")

  }

  return (
    <form 
      className='TodoForm' onSubmit={handleSubmit}>
      

      <input 

        type='text' 
        className='todo-input'
        value={value}
        placeholder="What is the task today ?"
        onChange={handleChange}
      
      />

      <button type='submit' className='todo-btn'>
        Add Task
      </button>

    </form>
  )
}
