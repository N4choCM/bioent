import pic from "../../assets/img/about.jpg";
import json from "../../assets/text/about.json";
import "./About.css";
import { AppStateContext } from "../../../src/state/AppProvider";
import { useContext } from "react";

const About = () => {
	const appStateContext = useContext(AppStateContext);

	return (
		<div
			id="about"
			className="carousel slide carousel-fade anchor"
			data-bs-ride="carousel"
		>
			<div className="container">
				<div className="row my-4">
					<div className="col text-center text-uppercase">
						<h3>{json.paragraphs[0]}</h3>
					</div>
				</div>
				<div className="row row-cols-1 row-cols-md-2 g-4">
					<div className="col col-md-6 col-lg-4 g-4">
						<div className="card h-100">
							<img
								src={pic}
								className={
                  `card-img-top rounded h-100 img-cover
                  custom-shadow-${appStateContext?.state.isDarkMode ? "dark" : "light"}`}
								alt="Ruzafa swimming in an XTERRA."
							/>
						</div>
					</div>
					<div className="col col-md-6 col-lg-8">
						<div
							className={
                `card h-100 custom-shadow-${appStateContext?.state.isDarkMode ? "dark bg-dark" : "light"}`
              }
						>
							<div className="card-body p-4">
								<p className="card-text text-justify">{json.paragraphs[1]}</p>
                  <button className="text-center btn btn-bioent">{json.paragraphs[2]}</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<br />
		</div>
	);
};

export default About;