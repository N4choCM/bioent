import { useContext, useEffect } from "react";
import { AppStateContext } from "../../../state/AppProvider";
import gp from "../../../assets/img/GroupTraining.jpg";
import gp2 from "../../../assets/img/GroupTraining2.jpg";
import pp from "../../../assets/img/IndividualTraining.jpg";
import pp2 from "../../../assets/img/IndividualTraining3.jpg";
import "./FitnessScreen.css";
import { NavLink } from "react-router-dom";

const FitnessScreen = () => {
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
    <>
    <br /><br /> <br className="d-none d-md-block" /> <br className="d-none d-md-block" />
      {/* MARK: -- HEADER */}
      <div className="container mt-5 header">
        <div className="row row-cols-1 d-flex justify-content-center text-center">
          <div className="col">
            <h1>Entrenamientos para Ponerte en Forma</h1>
            <p className="text-center text-white">Sesiones individuales y en grupo, adaptadas para ti</p>
          </div>
        </div>
      </div>
      {/* MARK: -- DESCRIPTION */}
      <div className="container mt-md-5 description">
        <div className="row row-cols-1 d-flex justify-content-center text-center">
          <div className="col">
            <h2 className="text-dark">Transforma tu cuerpo con nuestros entrenamientos</h2>
            <p className="text-center">Nuestros entrenamientos están diseñados para ponerte en forma de manera eficiente. 
              Ofrecemos sesiones de entrenamiento tanto individuales como en grupo, adaptadas a todos los niveles. 
              Con 2 sesiones semanales de una hora, te ayudamos a mejorar tu fuerza y condición física, 
              incluyendo entrenamientos al aire libre en determinadas épocas del año.
            </p>
          </div>
        </div>
      </div>
      {/* MARK: -- GALLERY */}
      <div className="container mt-5 gallery">
  <div className="row text-center justify-content-center">
    <div className="col-12">
      <h3>Momentos de nuestros entrenamientos</h3>
      <div className="row justify-content-center mt-4">
        <div className="col-12 col-md-6 col-lg-4 col-xxl-3 mb-4">
          <img className="img-fluid" src={pp} alt="Entrenamiento personal" />
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xxl-3 mb-4">
          <img className="img-fluid" src={gp2} alt="Entrenamiento en grupo" />
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xxl-3 mb-4">
          <img className="img-fluid" src={gp} alt="Entrenamiento en grupo" />
        </div>
        {/* Cuarta imagen que solo se mostrará en pantallas XXL */}
        <div className="col-0 col-md-6 col-xxl-3 mb-4 d-none d-md-block d-lg-none d-xxl-block">
          <img className="img-fluid" src={pp2} alt="Entrenamiento adicional" />
        </div>
      </div>
    </div>
  </div>
</div>
      {/* MARK: -- CONTACT */}
      <div className="container mt-5">
        <div className="row row-cols-1 d-flex justify-content-center text-center">
          <div className="col">
            <h3>¡Pregunta por nuestros precios sin compromiso!</h3>
            <br />
            <NavLink to="/contact">
              <button className={`btn btn-bioent text-white px-3 py-2`}>
                Contacto
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <br /><br />
    </>
  );
};

export default FitnessScreen;