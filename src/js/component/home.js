import React, { Component } from "react";
//include images into your bundle

//create your first component
export class Home extends Component {
	constructor() {
		super();
		this.state = {
			color: ""
		};
	}

	render() {
		return (
			<div>
				<div className="chain" />
				<div className="lights">
					<div
						onClick={() => this.setState({ color: "red" })}
						className={
							this.state.color == "red"
								? "light1 active"
								: "light1"
						}
					/>
					<div
						onClick={() => this.setState({ color: "goldenrod" })}
						className={
							this.state.color == "goldenrod"
								? "light2 active"
								: "light2"
						}
					/>
					<div
						onClick={() => this.setState({ color: "green" })}
						className={
							this.state.color == "green"
								? "light3 active"
								: "light3"
						}
					/>
				</div>
			</div>
		);
	}
}
