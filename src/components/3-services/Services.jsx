import ftp from "../../assets/img/fitness.jpg";
import ptp from "../../assets/img/performance.jpg";
import bp from "../../assets/img/biomechanics.jpg";
import { Zoom } from 'react-reveal';

import json from "../../assets/text/services.json";
import "./Services.css";
import { AppStateContext } from "../../../src/state/AppProvider";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

const Services = () => {
	const appStateContext = useContext(AppStateContext);

	return (
		<div
			id="services"
			className="carousel slide carousel-fade anchor"
			data-bs-ride="carousel"
		>
			<div className="container">
				<Zoom>
					<div className="row my-4">
						<div className="col text-center text-uppercase">
							<h3>{json.title[0]}</h3>
						</div>
					</div>
				</Zoom>
				<div className="row row-cols-1 row-cols-md-3 g-4">
					<Zoom>
						<div className="col col-md-4 g-4">
							<div
								className={`card h-100 custom-shadow-${
									appStateContext?.state.isDarkMode ? "dark bg-dark" : "light"
								}`}
							>
								<img
									src={ftp}
									className={`card-img-top img-cover h-100`}
									alt="Ruzafa swimming in an XTERRA."
								/>
								<div className="card-body">
									<h5 className="card-title">{json.title[1]}</h5>
									<p className="card-text">{json.description[0]}</p>
									<NavLink to="/services/fitness">
										<button className={`btn btn-bioent text-white px-3 py-2`}>{json.btn[0]}</button>
									</NavLink>
								</div>
							</div>
						</div>
					</Zoom>
					<Zoom>
						<div className="col col-md-4 g-4">
							<div
								className={`card h-100 custom-shadow-${
									appStateContext?.state.isDarkMode ? "dark bg-dark" : "light"
								}`}
							>
								<img
									src={ptp}
									className={`card-img-top img-cover h-100`}
									alt="Ruzafa swimming in an XTERRA."
								/>
								<div className="card-body">
									<h5 className="card-title">{json.title[2]}</h5>
									<p className="card-text">{json.description[1]}</p>
									<NavLink to="/services/personal-training">
										<button className={`btn btn-bioent text-white px-3 py-2`}>{json.btn[0]}</button>
									</NavLink>
								</div>
							</div>
						</div>
					</Zoom>
					<Zoom>
						<div className="col col-md-4 g-4">
							<div
								className={`card h-100 custom-shadow-${
									appStateContext?.state.isDarkMode ? "dark bg-dark" : "light"
								}`}
							>
								<img
									src={bp}
									className={`card-img-top img-cover h-100`}
									alt="Ruzafa swimming in an XTERRA."
								/>
								<div className="card-body">
									<h5 className="card-title">{json.title[3]}</h5>
									<p className="card-text">{json.description[2]}</p>
									<NavLink to="/services/biomechanics">
										<button className={`btn btn-bioent text-white px-3 py-2`}>{json.btn[0]}</button>
									</NavLink>
								</div>
							</div>
						</div>
					</Zoom>
				</div>
			</div>
			<br />
		</div>
	);
};

export default Services;
