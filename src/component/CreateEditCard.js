import React, { Component } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class CreateEditCard extends Component {
    constructor(props) {
        super(props);
        this.state = { modal: props.modalStatus, Description: '', createdBy: '', listName: props.listName };
        this.toggle = this.toggle.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            modal: nextProps.modalStatus
        });
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
    handleSubmit() {
        const maximum = 10000;
const minimum = 45;
const randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        const newCard = {
            Description: this.state.Description,
            createdBy: this.state.createdBy,
            id: randomnumber
        }
        this.props.createCard(newCard, this.state.listName);
        this.toggle();
    }
    render() {
        return (
            <div className="add-cardModal">
                <Modal isOpen={this.state.modal}>
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
                        <button type="button" className="btn btn-success" onClick={(e) => this.handleSubmit(e)}>Submit</button>
                        <button className="btn btn-primary" onClick={this.toggle}>Cancel</button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}
