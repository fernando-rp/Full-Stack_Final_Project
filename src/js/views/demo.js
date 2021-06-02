import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/demo.scss";

export const Demo = () => {
	return (
		<div className="container">
			<Link to="">
				<h1 className="display-5">Ingresa como Colaborador</h1>
			</Link>
			<br />
			<Link to="">
				<h1 className="display-5">Ingresa como Invitado</h1>
			</Link>
			<br />
			<br />
			<br />
			<br />
			<Link to="/">
				<button className="btn btn-primary">Cerrar</button>
			</Link>
		</div>
	);
};
