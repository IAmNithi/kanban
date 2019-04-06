import React, { Component } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class CreateEditCard extends Component {
    constructor(props) {
        super(props);
        this.state = { modal: props.modalStatus, isEditable: false, modalStatus: props.modalType, Description: '', createdBy: '', listName: props.listName, comments: [], id: 0, addComment: false, comment: '' };
        this.toggle = this.toggle.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.cardData.Description !== undefined) {
            this.setState({
                modal: nextProps.modalStatus,
                modalStatus: nextProps.modalType,
                Description: nextProps.cardData.Description, 
                createdBy: nextProps.cardData.createdBy,
                comments: nextProps.cardData.comments,
                id: nextProps.cardData.id,
                isEditable: false,
                addComment: false
            });
        } else {
            this.setState({
                modal: nextProps.modalStatus,
                modalStatus: nextProps.modalType,
                Description: '', 
                createdBy: ''
            });
        }
    }
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
        this.props.closeModal();
    }
    handleChangeName(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit(e, type) {
        if(type === 'new') {
            const maximum = 10000;
            const minimum = 45;
            const randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
            const newCard = {
                Description: this.state.Description,
                createdBy: this.state.createdBy,
                id: randomnumber,
                comments: this.state.comments,
                isEditable: false,
                addComment: false
            }
            this.props.createCard(newCard, this.state.listName);
        } else {
            const newCard = {
                Description: this.state.Description,
                createdBy: this.state.createdBy,
                id: this.state.id,
                comments: this.state.comments,
                isEditable: false,
                addComment: false
            }
            this.props.updateCard(newCard, this.state.listName);
        }
        this.toggle();
    }
    handleDelete(){
        this.props.deleteCard(this.state.id, this.state.listName);
        this.toggle();
    }
    enableEdit(){
        this.setState({
            isEditable: true
        })
    }
    addComments(){
        this.setState({
            addComment: true
        })
    }
    handleCommentChange(e){
        this.setState({
            comment: e.target.value
        });
    }
    pushComment(){
        let comment = this.state.comments;
        comment.push(this.state.comment);
        this.setState({
            comments: comment
        }, function(){
            this.setState({
                comment: '',
                addComment: false
            });
        })
    }
    render() {
        return (
            <div className="add-cardModal">

<Modal isOpen={this.state.modal}>
                {this.state.modalStatus === 'edit' ? 
                <div>
                <ModalHeader>Card Description</ModalHeader>
                <ModalBody>
                    <div className="description-modal">
                    <div className="pr-2 edit-name" onClick={(e) => this.enableEdit(e)}>
                    Edit Card
                    </div>
                    {this.state.isEditable ? 
                    <div className="row">
                        <div className="form-group col-12">
                            <textarea value={this.state.Description} name="Description" placeholder="Description" onChange={(e) => this.handleChangeName(e)} className="form-control" />
                        </div>
                        <div className="form-group col-12">
                            <input type="text" value={this.state.createdBy} name="createdBy" placeholder="createdBy" onChange={(e) => this.handleChangeName(e)} className="form-control" />
                        </div>
                    </div> : 
                    <div className="row">
                        <div className="col-12 p-2">Description: {this.state.Description}</div>
                        <div className="col-12 p-2">Created By: {this.state.createdBy}</div>
                    {this.state.comments.length !==0 ? <div className="col-12 p-2">comments: <br />{this.state.comments.map((data, idx) => <p className="text-muted" key={idx}>{data}</p>)}</div> : <div className="col-12 p-2">No Comments</div> }
                    <div className="pr-2 edit-name" onClick={(e) => this.addComments(e)}>
                    Add Comments
                    </div>
                    {this.state.addComment ? 
                    <div className="form-group col-12">
                                    <textarea value={this.state.comment} name="Comment" placeholder="comment" onChange={(e) => this.handleCommentChange(e)} className="form-control" />
                                    {/* eslint-disable-next-line */}
                                    <a href="#" onClick={(e) => this.pushComment(e)}>save</a>
                    </div> : ''}
                    </div> 
                    }
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button type="button" className="btn btn-success" onClick={(e) => this.handleSubmit(e, 'edit')}>Ok</button>
                    <button type="button" className="btn btn-danger" onClick={(e) => this.handleDelete(e)}>Delete Card</button>
                </ModalFooter>
        </div>
                :
                <div>
                        <ModalHeader>Add List</ModalHeader>
                        <ModalBody>
                            <div className="row">
                                <div className="form-group col-12">
                                    <textarea value={this.state.Description} name="Description" placeholder="Description" onChange={(e) => this.handleChangeName(e)} className="form-control" />
                                </div>
                                <div className="form-group col-12">
                                    <input type="text" value={this.state.createdBy} name="createdBy" placeholder="createdBy" onChange={(e) => this.handleChangeName(e)} className="form-control" />
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <button type="button" className="btn btn-success" onClick={(e) => this.handleSubmit(e, 'new')}>Submit</button>
                            <button className="btn btn-primary" onClick={this.toggle}>Cancel</button>
                        </ModalFooter>
                </div>
                }
                </Modal>
            </div>
        )
    }
}
