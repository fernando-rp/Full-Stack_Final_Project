import React from "react";
import "../../styles/home.scss";

export const Faq = () => (
	<>
		<div className="container">
			<div className="row col-12">
				<h1 className="questions display-4">Preguntas Frecuentes.</h1>
			</div>
			<div className="row mt-4">
				<div className="col col-12">
					<h2 className="questions ">Preguntas Frecuentes1.</h2>
				</div>
				<div className="col col-12">
					<p className="answers"> 1</p>
				</div>
			</div>
			<div className="row">
				<div className="col col-12">
					<h2 className="questions ">Preguntas Frecuentes2.</h2>
				</div>
				<div className="col col-12">
					<p className="answers"> 2</p>
				</div>
			</div>
		</div>
	</>
);
