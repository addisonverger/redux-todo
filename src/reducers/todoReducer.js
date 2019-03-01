const initialState = {
  todos: []
}

const todoReducer = (state = initialState, action) => {
  const newTodos = state.todos.slice()

  switch (action.type) {
    case 'ADD_TODO':
      newTodos.push({task: action.task, done: false})
      return {
        todos: newTodos
      }

    case 'TOGGLE_DONE':
      newTodos[action.index].done = !state.todos[action.index].done
      return {
        todos: newTodos
      }

    default:
      return state
  }
}

export default todoReducer
