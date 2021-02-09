import React from 'react'

const TodosContext = React.createContext({
  todos: [
    {id: 1, text: 'Drink bananashake @11', category: 'Food', complete: false},
    {
      id: 2,
      text: 'Watch friends with wife @10',
      category: 'Fun',
      complete: false
    },
    {id: 3, text: 'Finish Project', category: 'Work', complete: false},
    {id: 8, text: 'UX approvals', category: 'Work', complete: true},
    {id: 4, text: 'Feed pet @10', category: 'Pet', complete: true},
    {id: 5, text: 'Medicines', category: 'Family', complete: false},
    {id: 6, text: 'Excersize @6', category: 'Health', complete: false},
    {id: 7, text: 'Walk @8', category: 'Health', complete: false}
  ],
  currenttodo: {},
  currentcategory: 'Work'
})

export default TodosContext
