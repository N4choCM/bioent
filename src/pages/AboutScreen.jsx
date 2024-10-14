/* eslint-disable react/prop-types */
import ap1 from "../assets/img/about4.jpg";
import ap2 from "../assets/img/about3.jpg";
import json from "../assets/text/about.json";
import { AppStateContext } from "../state/AppProvider";
import { useContext, useEffect } from "react";

const About = () => {
	const appStateContext = useContext(AppStateContext);

	useEffect(() => {
		// Set isNavbarScrolled to true when the About component is mounted
		appStateContext?.dispatch({
			type: "TOGGLE_NAVBAR_SCROLLED",
			payload: true,
		});

		// Cleanup function to reset isNavbarScrolled to false when the component is unmounted
		return () => {
			appStateContext?.dispatch({
				type: "TOGGLE_NAVBAR_SCROLLED",
				payload: false,
			});
		};
	}, [appStateContext]);

	return (
		<div className="container mt-5">
			<div className="row my-4 mt-5">
				<div className="col text-center text-uppercase mt-5">
          <br />
					<h3>{json.paragraphs[0]}</h3>
				</div>
			</div>
			<div className="row row-cols-1 row-cols-md-2 g-4">
				<div className="col col-md-6 col-lg-4 d-none d-md-block g-4">
					<div className="card h-100">
						<img
							src={ap2}
							className={`card-img-top rounded h-100 img-cover
                  custom-shadow-${
										appStateContext?.state.isDarkMode ? "dark" : "light"
									}`}
							alt="Ruzafa swimming in an XTERRA."
						/>
					</div>
				</div>
				<div className="col col-md-6 col-lg-8">
        <div
						className={`card h-100 custom-shadow-${
							appStateContext?.state.isDarkMode ? "dark bg-dark" : "light"
						}`}
					>
						<div className="card-body p-5">
							<br className="d-none d-lg-block" />
							<ul className="card-text text-justify">
                <br />
								{json.paragraphs.slice(4, 10).map((paragraph, index) => (
									<li key={index} className="my-3 fs-5">
										{paragraph}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				<div className="col col-md-4 d-md-none">
					<div className="card h-100">
						<img
							src={ap2}
							className={`card-img-top rounded h-100 img-cover
                  custom-shadow-${
										appStateContext?.state.isDarkMode ? "dark" : "light"
									}`}
							alt="Ruzafa swimming in an XTERRA."
						/>
					</div>
				</div>
				<div className="col col-md-6 col-lg-8 g-4">
					<div
						className={`card h-100 custom-shadow-${
							appStateContext?.state.isDarkMode ? "dark bg-dark" : "light"
						}`}
					>
						<div className="card-body p-5">
							<br className="d-none d-lg-block" />
							<p className="fs-5">{json.paragraphs[10]}</p>
						</div>
					</div>
				</div>

				<div className="col col-md-6 col-lg-4 d-none d-md-block">
					<div className="card h-100">
						<img
							src={ap1}
							className={`card-img-top rounded h-100 img-cover
                  custom-shadow-${
										appStateContext?.state.isDarkMode ? "dark" : "light"
									}`}
							alt="Ruzafa running in an XTERRA."
						/>
					</div>
				</div>
			</div>
			<br />
		</div>
	);
};

export default About;
