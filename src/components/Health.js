import React, {useContext} from 'react'
import TodosContext from '../context'

export default function Health() {
  const {state, dispatch} = useContext(TodosContext)

  const setCurrent = e => {
    e.preventDefault()
    dispatch({type: 'SET_CURRENT_CATEGORY', payload: 'Health'})
  }
  return (
    <div className='item health' onClick={setCurrent}>
      <ul>
        {state.todos.map(todo => {
          if (todo.category === 'Health') {
            return (
              <li key={todo.id}>
                <span
                  className={`${todo.complete && 'line-through'}`}
                  onDoubleClick={() =>
                    dispatch({type: 'TOGGLE_TODO', payload: todo})
                  }
                >
                  {todo.text}
                </span>
                <button
                  className='edit'
                  onClick={() =>
                    dispatch({type: 'SET_CURRENT_TODO', payload: todo})
                  }
                ></button>
                <button
                  className='delete'
                  onClick={() => dispatch({type: 'REMOVE_TODO', payload: todo})}
                ></button>
              </li>
            )
          }else{
retrun (<></>)
}
        })}
      </ul>
    </div>
  )
}
