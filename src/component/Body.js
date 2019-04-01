import React, { Component } from 'react'
import Backlog from './Backlog';
import Todo from './Todo';
import Doing from './Doing';
import Done from './Done';
export default class Body extends Component {
  render() {
    return (
      <div className="body">
        <Backlog />
        <Todo />
        <Doing />
        <Done />
      </div>
    )
  }
}
