import React, { Component } from 'react'

export default class Banner extends Component {
    openModal(){
        this.props.openModal();
    }
    render() {
        return (
            <div className="banner">
                <div className="col-12">
                    <button className="btn btn-addlist" data-toggle="modal" data-target="#myModal" onClick={(e) => this.openModal(e)}>Add List</button>
                </div>
            </div>
        )
    }
}
