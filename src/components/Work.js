import React, {useContext} from 'react'
import TodosContext from '../context'

export default function Work() {
  const {state, dispatch} = useContext(TodosContext)
  return (
    <div
      className='item work'
      onClick={() => dispatch({type: 'SET_CURRENT_CATEGORY', payload: 'Work'})}
    >
      <ul>
        {state.todos.map(todo => {
          if (todo.category === 'Work') {
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
return (<></>)
}
        })}
      </ul>
    </div>
  )
}
