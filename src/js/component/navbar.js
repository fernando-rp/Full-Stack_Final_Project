import { bottom } from "@popperjs/core";
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="nav-item dropdown">
				<a
					className="nav-link dropdown-toggle"
					href="#/"
					id="navbarDropdown"
					role="button"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Compañia
				</a>
				<div className="dropdown-menu" aria-labelledby="navbarDropdown">
					<Link to="/">
						<button
							className="btn"
							onClick={() => {
								window.scrollTo(0, 700);
							}}>
							Quienes somos1
						</button>
					</Link>
					<a className="dropdown-item" href="#/">
						Quienes somos
					</a>
					<a className="dropdown-item" href="#/">
						Como funciona
					</a>
					<a className="dropdown-item" href="#/">
						Contactanos
					</a>
					<div className="dropdown-divider" />
					<Link className="dropdown-item" to="/faq">
						FAQ / Ayuda
					</Link>
				</div>
			</div>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Login</button>
				</Link>
			</div>
		</nav>
	);
};
