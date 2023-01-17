import React from "react";

const NavBar = ({ totalCounters }) => {
	return (
		<nav className="navbar fixed-top bg-dark" data-bs-theme="dark">
			<div className="container-fluid">
				<p className="navbar-brand text-light">
					NavBar -{" "}
					<span className="badge bg-secondary">{totalCounters}</span>
				</p>
			</div>
		</nav>
	);
};

export default NavBar;
