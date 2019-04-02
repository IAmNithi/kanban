import React, { Component } from 'react'

export default class Activityboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: props.backlogData,
            listName: props.listName
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            listData: nextProps.backlogData
        })
    }
    onDragOver(e){
        e.preventDefault();
    }
    onDragStart(ev, id){
        ev.dataTransfer.setData('id', id);
    }
    onDrop = (ev, cat) => {     
        this.props.onDropEvent(ev, cat);
      }
    renderList(data, idx) {
        return <div className="list-cards" draggable key={idx} onDragStart={(e)=>this.onDragStart(e, data.id)}>
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
                <div className="board" onDragOver={(e)=>this.onDragOver(e)} onDrop={(e)=>{this.onDrop(e, this.state.listName)}}>
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
