import React, { Component } from 'react'
import CreateEditCard from './CreateEditCard';
export default class Activityboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: props.backlogData,
            listName: props.listName,
            openModal: false,
            modalType: '',
            cardPassData: {}
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.createNewCard = this.createNewCard.bind(this);
        this.deleteCard = this.deleteCard.bind(this);
        this.editCard = this.editCard.bind(this);
        this.updateCard = this.updateCard.bind(this);
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
    deleteCard(id, listName) {
        this.props.deleteCardData(id, listName);
    }
    editCard(e, data) {
        e.preventDefault();
        this.setState({
            openModal: true,
            modalType: 'edit',
            cardPassData: data
        })
    }
    renderList(data, idx) {
        return <div className="list-cards" key={idx}>
            <div className="list-card" draggable onDragStart={(e) => this.onDragStart(e, data.id)} onClick={(e) => this.editCard(e, data)}>
                <div className="list-card-details">
                    {data.Description}
                </div>
                {data.comments.length !== 0 ?
                    <div className="list-card-comment text-left">
                        <div className="comment-tag">
                            Comments
                        </div>
                        {data.comments.map((da, ind) => 
                        <div className="comments-body text-muted" key={ind}>
                            {da}
                        </div>)}
                    </div>
                : ''}
            </div>
        </div>
    }
    toggleModal() {
        this.setState({
            openModal: true,
            modalType: 'add',
            cardPassData: {}
        })
    }
    closeModal() {
        this.setState({
            openModal: false
        })
    }
    createNewCard(e, list) {
        this.props.createCardBody(e, list);
    }
    updateCard(e, list) {
        this.props.updateCard(e, list);
    }
    deleteList(){
        this.props.deleteList(this.state.listName);
    }
    render() {
        return (
            <div className="activityboard">
                <CreateEditCard modalStatus={this.state.openModal} listName={this.state.listName} closeModal={this.closeModal} modalType={this.state.modalType} createCard={this.createNewCard} updateCard={this.updateCard} cardData={this.state.cardPassData} deleteCard={this.deleteCard} />
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
                        <p draggable={false}>
                        <span onClick={(e) => this.toggleModal(e)} href="#" draggable={false} className="create-new-link text-muted text-left">
                            Add a Card...
                        </span>
                        <span onClick={(e) => this.deleteList(e)} href="#" draggable={false} className="create-new-link text-muted text-right">
                            Delete List...
                        </span>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
