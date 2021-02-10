import React, {useContext, useReducer, useEffect} from 'react'
import './app.css'
import bgimg from './images/room3.jpg'
import TodosContext from './context'
import todosReducer from './reducer'
import Work from './components/Work'
import Food from './components/Food'
import TodoForm from './components/TodoForm'
import Family from './components/Family'
import Pet from './components/Pet'
import Fun from './components/Fun'
import Health from './components/Health'
import MyClock from './components/Clock'

const localState = JSON.parse(localStorage.getItem('info'))

const App = () => {
  const initialState = useContext(TodosContext)
  const [state, dispatch] = useReducer(todosReducer, localState || initialState)

  useEffect(() => {
    localStorage.setItem('info', JSON.stringify(state))
  }, [state])

  return (
    <TodosContext.Provider value={{state, dispatch}}>
      <header>
        My Daily todolist<p>DblClick to mark complete</p>
      </header>
      <div className='item-list'>
        <img alt="" className='bgimg' src={bgimg} width='1500' height='700' />
        <MyClock />
        <TodoForm />
        <Food />
        <Pet />
        <Fun />
        <Work />
        <Family />
        <Health />
      </div>
      <footer>Created by Nirav</footer>
    </TodosContext.Provider>
  )
}

export default App
