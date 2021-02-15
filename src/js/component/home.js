import React from "react";

//Creando el Traffic Light desde Home
export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			//Aqui se va a indicar el estado inicial
			clicked: "red"
		};
	}

	render() {
		let newRedLightClass = "";
		let newYellowLightClass = "";
		let newGreenLightClass = "";

		if (this.state.clicked == "red") {
			newRedLightClass = "light-glow-red";
		} else if (this.state.clicked == "yellow") {
			newYellowLightClass = "light-glow-yellow";
		} else if (this.state.clicked == "green") {
			newGreenLightClass = "light-glow-green";
		}

		return (
			//return siempre recordar que todo va dentro del parentesis, no dentro de "corchetas"
			<div className="container">
				<div className="row justify-content-center align-items-center">
					<div className="traffic-light-container p-3 mt-5 justify-content-center">
						<div
							className={
								"mb-1 traffic-light-red rounded-circle" +
								" " +
								newRedLightClass
							}
							onClick={() =>
								this.setState({
									clicked: "red"
								})
							}></div>
						<div
							className={
								"mb-1 traffic-light-yellow rounded-circle" +
								" " +
								newYellowLightClass
							}
							onClick={() =>
								this.setState({
									clicked: "yellow"
								})
							}></div>
						<div
							className={
								"traffic-light-green rounded-circle" +
								" " +
								newGreenLightClass
							}
							onClick={() =>
								this.setState({
									clicked: "green"
								})
							}></div>
					</div>
				</div>
			</div>
		);
	}
}
