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
					Servify
				</a>
				<div className="dropdown-menu" aria-labelledby="navbarDropdown">
					<Link to="/">
						<button
							className="btn"
							onClick={() => {
								window.scrollTo(0, 700);
							}}>
							Quienes Somos.
						</button>
					</Link>
					<Link to="/">
						<button
							className="btn"
							onClick={() => {
								window.scrollTo(0, 900);
							}}>
							Como Funciona.
						</button>
					</Link>
					<Link to="/">
						<button
							className="btn"
							onClick={() => {
								window.scrollTo(0, 1500);
							}}>
							Contactanos.
						</button>
					</Link>

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
