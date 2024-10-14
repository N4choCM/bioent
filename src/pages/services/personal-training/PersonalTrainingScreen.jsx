import { useContext, useEffect } from "react";
import { AppStateContext } from "../../../state/AppProvider";
import mp from "../../../assets/img/monthly.jpg";
import sp from "../../../assets/img/gravel.jpg";
import "./PersonalTrainingScreen.css";
import { NavLink } from "react-router-dom";

const PersonalTrainingScreen = () => {
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
      <div className="container mt-5 personal-banner">
        <div className="row row-cols-1 d-flex justify-content-center text-center">
          <div className="col">
            <h1>Entrenamiento Personal para Deportes de Resistencia</h1>
            <p className="text-center text-white">Elige entre nuestras modalidades semanal o mensual para maximizar tu rendimiento</p>
          </div>
        </div>
      </div>
      {/* MARK: -- DESCRIPTION */}
      <div className="container mt-md-5 description">
        <div className="row row-cols-1 d-flex justify-content-center text-center">
          <div className="col">
            <h2 className="text-dark">Optimiza tu rendimiento con nuestros entrenamientos personalizados</h2>
            <p className="text-center">Nuestro entrenamiento está diseñado específicamente para deportistas de resistencia, incluyendo ciclistas (carretera, gravel, MTB, ciclocrós), triatletas, runners y trail runners. Con dos modalidades a elegir, semanal o mensual, te ofrecemos un plan adaptado a tus necesidades para mejorar tu fuerza, resistencia y rendimiento general.</p>
          </div>
        </div>
      </div>
      {/* MARK: -- TRAINING OPTIONS */}
      <div className="container mt-5 training-options">
        <div className="row text-center justify-content-center">
          <div className="col-12">
            <h3>Nuestras Modalidades de Entrenamiento</h3>
            <div className="row justify-content-center mt-4 gap-2">
              {/* Card para Entrenamiento Semanal */}
              <div className="col-12 col-md-5 mb-4">
                <div className="card h-100">
                  <img className="card-img-top w-100" src={sp} alt="Entrenamiento Semanal" />
                  <div className="card-body">
                    <h4 className="card-title">Entrenamiento Semanal</h4>
                    <p className="card-text">
                      <ul>
                        <li>2 sesiones semanales de 1 hora</li>
                        <li>Entrenamientos adaptados a tu nivel</li>
                        <li>Mejora tu fuerza y resistencia</li>
                        <li>Entrenamientos al aire libre</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
              {/* Card para Entrenamiento Mensual */}
              <div className="col-12 col-md-5 mb-4">
                <div className="card h-100">
                  <img className="card-img-top w-100" src={mp} alt="Entrenamiento Mensual" />
                  <div className="card-body">
                    <h4 className="card-title">Entrenamiento Mensual</h4>
                    <p className="card-text">
                      <ul>
                        <li>2 sesiones semanales de 1 hora</li>
                        <li>Entrenamientos adaptados a tu nivel</li>
                        <li>Mejora tu fuerza y resistencia</li>
                        <li>Entrenamientos al aire libre</li>
                      </ul>
                    </p>
                  </div>
                </div>
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
              <button className={`btn btn-bioent text-white px-3 py-2`}>Contacto</button>
            </NavLink>
          </div>
        </div>
      </div>
      <br /><br />
    </>
  );
};

export default PersonalTrainingScreen;
