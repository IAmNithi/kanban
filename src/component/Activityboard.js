import React, { Component } from 'react'

export default class Activityboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: props.backlogData,
            listName: props.listName

        }
    }
    renderList(data, idx) {
        return <div className="list-cards" draggable key={idx}>
            <div className="list-card">
                <div className="list-card-details">
                    {data.Description}
                </div>
            </div>
        </div>
    }
    render() {
        return (
            <div className="activityboard">
                <div className="board">
                    <div className="list">
                        <div className="list-header">
                            <div className="header-title">{this.state.listName}</div>
                        </div>
                        <div className="list-cards-scroller">
                        {this.state.listData.map((data, index) => {
                            return this.renderList(data, index);
                        })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
