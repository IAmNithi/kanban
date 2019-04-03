import React, { Component } from 'react'
import CreateEditCard from './CreateEditCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default class Activityboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: props.backlogData,
            listName: props.listName,
            openModal: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.createNewCard = this.createNewCard.bind(this);
        this.deleteCard = this.deleteCard.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            listData: nextProps.backlogData
        })
    }
    onDragOver(e) {
        e.preventDefault();
    }
    onDragStart(ev, id) {
        ev.dataTransfer.setData('id', id);
    }
    onDrop = (ev, cat) => {
        this.props.onDropEvent(ev, cat);
    }
    deleteCard(e, id) {
        e.preventDefault();
        this.props.deleteCardData(id, this.state.listName);
    }
    renderList(data, idx) {
        return <div className="list-cards" key={idx}>
            <div className="list-card" draggable onDragStart={(e) => this.onDragStart(e, data.id)}>
                <div className="list-card-header">
                    <FontAwesomeIcon
                    onClick={(e) => this.deleteCard(e, data.id)}
                        icon="trash"
                    />
                </div>
                <div className="list-card-details">
                    {data.Description}
                </div>
            </div>
        </div>
    }
    toggleModal() {
        this.setState({
            openModal: true
        })
    }
    closeModal() {
        this.setState({
            openModal: false
        })
    }
    createNewCard(e, list) {
        console.log('printing  in activity dashboard', e, list);
        this.props.createCardBody(e, list);
    }
    render() {
        return (
            <div className="activityboard">
                <CreateEditCard modalStatus={this.state.openModal} listName={this.state.listName} closeModal={this.closeModal} createCard={this.createNewCard} />
                <div className="board" onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => { this.onDrop(e, this.state.listName) }}>
                    <div className="list">
                        <div className="list-header">
                            <div className="header-title">{this.state.listName}</div>
                        </div>
                        <div className="list-cards-scroller">
                            {this.state.listData.map((data, index) => {
                                return this.renderList(data, index);
                            })}
                        </div>
                        <span onClick={(e) => this.toggleModal(e)} href="#" draggable={false} className="create-new-link">
                            Create Task
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
