import React, { Component } from "react";

class NavBar extends Component {
	render() {
		return (
			<nav class="navbar fixed-top bg-dark" data-bs-theme="dark">
				<div className="container-fluid">
					<a className="navbar-brand text-light" href="#">
						NavBar -{" "}
						<span className="badge bg-secondary">
							{this.props.totalCounters}
						</span>
					</a>
				</div>
			</nav>
		);
	}
}

export default NavBar;
