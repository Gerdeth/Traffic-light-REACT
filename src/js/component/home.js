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
		let light1on = "";
		let light2on = "";
		let light3on = "";
		if (this.state.color === "red") light1on = "active";
		if (this.state.color === "goldenrod") light2on = "active";
		if (this.state.color === "green") light3on = "active";

		return (
			<div>
				<div className="chain" />
				<div className="lights">
					<div
						onClick={() => this.setState({ color: "red" })}
						className={"light1 " + light1on}
					/>
					<div
						onClick={() => this.setState({ color: "goldenrod" })}
						className={"light2 " + light2on}
					/>
					<div
						onClick={() => this.setState({ color: "green" })}
						className={"light3 " + light3on}
					/>
				</div>
			</div>
		);
	}
}
