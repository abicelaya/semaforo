import React, { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
	const [rojo, setRojo] = useState("");
	const [amarillo, setAmarillo] = useState("");
	const [verde, setVerde] = useState("");

	return (
		<>
			<div className="palo"></div>
			<div className="semaforo">
				<button
					className={rojo == "brillo" ? "luzRoja brillo" : "luzRoja"}
					onClick={() => {
						setRojo("brillo");
						setAmarillo("");
						setVerde("");
					}}></button>
				<br />
				<button
					className={
						amarillo == "brillo"
							? "luzAmarilla brillo"
							: "luzAmarilla"
					}
					onClick={() => {
						setRojo("");
						setAmarillo("brillo");
						setVerde("");
					}}></button>
				<br />
				<button
					className={
						verde == "brillo" ? "luzVerde brillo" : "luzVerde"
					}
					onClick={() => {
						setRojo("");
						setAmarillo("");
						setVerde("brillo");
					}}></button>
			</div>
		</>
	);
};

export default Home;
