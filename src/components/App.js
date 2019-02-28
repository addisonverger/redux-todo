import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/todo.css';
import TodoApp from '../containers/TodoAppContainer.js'

class App extends Component {
  render() {
    return (
      <div>
        <div className="todo-app">
          <div className="nav">
            <div className="nav-inner">
              <h2 className="title"
                  style={{marginBottom: "0px"}}>
                React Redux Todo
              </h2>
            </div>
          </div>
          <div className="page-wrapper">
            <div className="columns is-centered">
              <div className="column is-half">
              <TodoApp />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
