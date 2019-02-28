import React, { Component } from 'react'
import { connect } from 'react-redux'

class TodoApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }
  updateInput(event) {
    this.setState({
      input: event.target.value
    })
  }
  render() {
    console.log('props', this.props)
    return (
      <div className="box m-auto">
        <h4 className="title is-4">
          My ToDo List
        </h4>
        <form onSubmit={(event) => this.addTodoItem}>
          <div className="field has-addons">
            <div className="control">
              <input className="input"
                      type="text"
                      placeholder="Add a todo item..."
                      onChange={(event) => this.updateInput(event)}
                      value={this.state.input} />
            </div>
            <div className="control">
              <button className="button is-primary"
                      type="submit">
                Add
              </button>
            </div>
          </div>
        </form>
        <div className="content">
          <ul>

          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todoItem) => dispatch({type: 'ADD_TODO', task: todoItem})
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
