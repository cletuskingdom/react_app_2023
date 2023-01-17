import React, { Component } from "react";
class Counter extends Component {
	render() {
		return (
			<div>
				{this.props.children}
				<div className="py-1 container">
					<span className={this.getClasses()}>
						{this.formatCount()}
					</span>

					<button
						onClick={() =>
							this.props.onIncrement(this.props.counter)
						}
						className="btn btn-sm ms-2 px-4 btn-secondary"
					>
						Increment
					</button>

					<button
						onClick={() =>
							this.props.onDelete(this.props.counter.id)
						}
						className="ms-2 btn btn-sm px-4 btn-danger"
					>
						Delete
					</button>
				</div>
			</div>
		);
	}

	getClasses() {
		let classes = "mt-5 text-center p-2 alert ";
		classes +=
			this.props.counter.value === 0 ? "alert-danger" : "alert-info";
		return classes;
	}

	formatCount() {
		const { value } = this.props.counter;
		return value === 0 ? "Zero" : value;
	}
}

export default Counter;
