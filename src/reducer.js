import {v4 as uuidv4} from 'uuid'
export default function todosReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_TODO':
      const toggledTodos = state.todos.map(t =>
        t.id === action.payload.id
          ? {...action.payload, complete: !action.payload.complete}
          : t
      )
      return {
        ...state,
        todos: toggledTodos
      }
    case 'UPDATE_TODO':
      const updatedtodo = {...state.currenttodo, text: action.payload}
      const ind = state.todos.findIndex(t => t.id === state.currenttodo.id)

      const updatedtodos = [
        ...state.todos.slice(0, ind),
        updatedtodo,
        ...state.todos.slice(ind + 1)
      ]
      return {
        ...state,
        currenttodo: {},
        todos: updatedtodos
      }
    case 'REMOVE_TODO':
      const filteredTodos = state.todos.filter(t => t.id !== action.payload.id)
      return {
        ...state,
        todos: filteredTodos
      }
    case 'SET_CURRENT_TODO':
      return {
        ...state,
        currenttodo: action.payload
      }
    case 'SET_CURRENT_CATEGORY':
      return {
        ...state,
        currentcategory: action.payload
      }
    case 'ADD_TODO':
      const new_todo = {
        id: uuidv4(),
        category: state.currentcategory,
        text: action.payload,
        complete: false
      }
      console.log('new_todo', new_todo)
      const addedTodos = [...state.todos, new_todo]
      return {
        ...state,
        todos: addedTodos,
        currentcategory: new_todo.category
      }
    default:
      return state
  }
}
