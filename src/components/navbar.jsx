import React from "react";

const NavBar = ({ totalCounters }) => {
	return (
		<nav className="navbar fixed-top bg-dark" data-bs-theme="dark">
			<div className="container-fluid">
				<a className="navbar-brand text-light" href="#">
					NavBar -{" "}
					<span className="badge bg-secondary">{totalCounters}</span>
				</a>
			</div>
		</nav>
	);
};

export default NavBar;
