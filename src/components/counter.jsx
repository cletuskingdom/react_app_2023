import React, { Component } from "react";
class Counter extends Component {
	state = {
		count: 0,
		imageUrl:
			"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.goodworklabs.com%2Fwp-content%2Fuploads%2F2016%2F10%2Freactjs.png&f=1&nofb=1&ipt=0745b77b9ba310edf78577bfc110207ae1588bba420b60bafac7d704df3bc2c2&ipo=images",
		tags: ["tag1", "tag2", "tag3"],
	};

	handleIncrement() {
		console.log("increment Clicked");
	}

	render() {
		return (
			<div>
				<img src={this.state.imageUrl} alt="" className="img-fluid" />

				<div className="py-5 container">
					<div className={this.getClasses()}>
						<span>{this.formatCount()}</span>
					</div>

					<button
						onClick={this.handleIncrement}
						className="btn btn-sm mt-3 px-4 btn-secondary"
					>
						Increment
					</button>

					<hr />

					<ul>
						{this.state.tags.map((tag) => (
							<li>{tag}</li>
						))}
					</ul>
				</div>
			</div>
		);
	}

	getClasses() {
		let classes = "mt-5 text-center p-2 alert ";
		classes += this.state.count === 0 ? "alert-danger" : "alert-info";
		return classes;
	}

	formatCount() {
		const { count } = this.state;
		return count === 0 ? "Zero" : count;
	}
}

export default Counter;
