import React, { Component } from "react";

const NavBar = (props) => {
	return (
		<nav class="navbar fixed-top bg-dark" data-bs-theme="dark">
			<div className="container-fluid">
				<a className="navbar-brand text-light" href="#">
					NavBar -{" "}
					<span className="badge bg-secondary">
						{props.totalCounters}
					</span>
				</a>
			</div>
		</nav>
	);
};

export default NavBar;
