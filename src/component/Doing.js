import React, { Component } from 'react'

export default class Doing extends Component {
    render() {
        return (
            <div className="doing">
                <div className="board">
                    <div className="list">
                        <div className="list-header">
                            <div className="header-title">Doing</div>
                        </div>
                        <div className="list-cards">
                            <div className="list-card">
                                <div className="list-card-details">
                                - requests a positive review first and then feeds that into social media.
                            </div>
                            </div>
                        </div>
                        <div className="list-cards">
                            <div className="list-card">
                                <div className="list-card-details">
                                - uses the words unlock or level up to the bonus to some prize that is scarce (highest rated jerky of all time, secret flavor, secret style).
                            </div>
                            </div>
                        </div>
                        <div className="list-cards">
                            <div className="list-card">
                                <div className="list-card-details">
                                - gives you some free bonus points and then you ad to it (reciprocity - I give you something, you give me something)
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
