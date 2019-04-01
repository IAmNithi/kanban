import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        return (
            <div className="todo">
                <div className="board">
                    <div className="list">
                        <div className="list-header">
                            <div className="header-title">Todo</div>
                        </div>
                        <div className="list-cards">
                            <div className="list-card">
                                <div className="list-card-details">
                                Derek Sivers on spaced repitition http://sivers.org/srs.
                            </div>
                            </div>
                        </div>
                        <div className="list-cards">
                            <div className="list-card">
                                <div className="list-card-details">
                                ANKI Learning Method http://www.jackkinsella.ie/2011/12/05/janki-method.html.
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
