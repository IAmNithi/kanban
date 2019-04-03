import React, { Component } from 'react'
import Activityboard from './Activityboard';
import Banner from './Banner';
import AddListModal from './AddListModal';
const kanbanData = require('../kanban.json');
let data = kanbanData;
export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kanban: kanbanData,
      openModal: false
    }
    this.onDropEvent = this.onDropEvent.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.createNewList = this.createNewList.bind(this);
    this.createNewCard = this.createNewCard.bind(this);
  }
  onDropEvent(e, id) {
    let targetId = e.dataTransfer.getData("id");
    let task = {};
    let testPass = false;
    for (let key in data) {
      if (testPass) {
        break;
      } else {
        for (let i = 0; i < data[key].length; i++) {
          if (data[key][i].id === parseInt(targetId)) {
            task = data[key][i];
            data[key].splice([i], 1);
            testPass = true;
            break;
          }
        }
      }
    }
    this.updateBoard(task, id);
  }
  updateBoard(task, id){
    for(let key in data) {
      if (key === id) {
        data[key].push(task);
        break;
      }
    }
    this.setState({
      kanban: data
    })
  }
  createNewCard(desc, list){
    for(let key in data) {
      if (key === list) {
        data[key].push(desc);
        break;
      }
    }
    this.setState({
      kanban: data
    })
  }
  renderList() {
    const activityList = [];
    for (let key in this.state.kanban) {
      activityList.push(<Activityboard backlogData={this.state.kanban[key]} listName={key} key={key} onDropEvent={this.onDropEvent} createCardBody={this.createNewCard}/>)
    }
    return <div className="body-scroller">
      {activityList}
    </div>
  }
  toggleModal(){
    this.setState({
      openModal: true
    })
  }
  closeModal(){
    this.setState({
      openModal: false
    })
  }
  createNewList(e){
    // const object2 = Object.assign(data, e = {});
    // data.push(e);
    console.log(data);
    //  this.setState({
    //   kanban: data
    //  }, function(){
    //    console.log(this.state.kanban);
    //  });
  }
  render() {
    // this.renderList();
    return (
      <div className="body">
      <Banner openModal={this.toggleModal}/>
      <AddListModal modalStatus={this.state.openModal} closeModal={this.closeModal} createList={this.createNewList}/>
        {
          this.renderList()
        }
      </div>
    )
  }
}
