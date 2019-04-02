import React, { Component } from 'react'
import Activityboard from './Activityboard';
const kanbanData = require('../kanban.json');
export default class Body extends Component {
  constructor(props){
    super(props);
    this.state = {
      kanban: kanbanData 
    }
    this.parserFunction();
  }
  parserFunction(){
    for(let i  =0; i< this.state.kanban.length; i++){
      console.log(this.state.kanban[i]);
    }
  }
  renderList(){
    const activityList = [];
    for (let key in this.state.kanban) {
    activityList.push(<Activityboard backlogData={this.state.kanban[key]} listName={key} key={key}/>)
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
