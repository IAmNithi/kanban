import React, { Component } from 'react';

export default class Done extends Component {
	render() {
		return (
			<div className="done">
				<div className="board">
					<div className="list">
						<div className="list-header">
							<div className="header-title">Done</div>
						</div>
						<div className="list-cards">
							<div className="list-card">
								<div className="list-card-details">Keto treatment. Charlie Foundation.</div>
							</div>
						</div>
						<div className="list-cards">
							<div className="list-card">
								<div className="list-card-details">
									Create one job description and we'll post it everywhere it belongs.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
