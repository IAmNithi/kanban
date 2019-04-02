import React, { Component } from 'react'
import Activityboard from './Activityboard';
const kanbanData = require('../kanban.json');
let data = kanbanData;
export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kanban: kanbanData
    }
    this.onDropEvent
      = this.onDropEvent.bind(this)
  }
  onDropEvent(e, id) {
    let targetId = e.dataTransfer.getData("id");
    console.log('printing data', data);
    let task = {};
    let testPass = false;
    for (let key in data) {
      if (testPass) {
        if (key == id) {
          data[key].push(task);
          break;
        }
      } else {
        for (let i = 0; i < data[key].length; i++) {
          console.log('inside loop', data[key][i]);
          if (data[key][i].id == targetId) {
            task = data[key][i];
            delete data[key][i];
            testPass = true;
            break;
          }
        }
      }
    }
    this.setState({
      kanban: data
    }, function () {
      console.log('printing async  func', this.state.kanban);
    })
    console.log(task);
  }
  renderList() {
    const activityList = [];
    for (let key in this.state.kanban) {
      activityList.push(<Activityboard backlogData={this.state.kanban[key]} listName={key} key={key} onDropEvent={this.onDropEvent} />)
    }
    return <div className="body-scroller">
      {activityList}
    </div>
  }
  render() {
    // this.renderList();
    return (
      <div className="body">
        {
          this.renderList()
        }
      </div>
    )
  }
}
