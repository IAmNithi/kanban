import React, { Component } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class AddListModal extends Component {
    constructor(props) {
        super(props);
        this.state = { modal: props.modalStatus, name: '' };

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
        console.log(event.target.value)
        this.setState({ name: event.target.value });
    }

    handleSubmit() {
        console.log('printing name', this.state.name);
        this.props.createList(this.state.name);
        this.toggle();
    }
    render() {
        return (
            <div className="add-listmodal">
                <Modal isOpen={this.state.modal}>
                        <ModalHeader>Add List</ModalHeader>
                        <ModalBody>
                            <div className="row">
                                <div className="form-group col-12">
                                    <input type="text" value={this.state.name} placeholder="Enter List Name" onChange={(e) => this.handleChangeName(e)} className="form-control" />
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
