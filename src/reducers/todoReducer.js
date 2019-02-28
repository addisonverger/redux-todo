const initialState = {
  todos: [
    {
      task: 'homework',
      done: false
    }
  ]
}

const todoReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_TODO':
      const newTodos = state.todos.slice()
      newTodos.push({task: action.task, done: false})
      return {
        todos: newTodos
      }

    default:
      return state
  }
}

export default todoReducer
