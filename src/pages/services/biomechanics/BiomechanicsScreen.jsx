import { useContext, useEffect } from "react";
import { AppStateContext } from "../../../state/AppProvider";
import bp from "../../../assets/img/biomechanics2.jpg";
import bp2 from "../../../assets/img/biomechanics3.jpg";
import "./BiomechanicsScreen.css";
import { NavLink } from "react-router-dom";

const BiomechanicsScreen = () => {
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
      <div className="container mt-5 biomechanics-banner">
        <div className="row row-cols-1 d-flex justify-content-center text-center">
          <div className="col">
            <h1>Servicios de Biomecánica para Ciclismo</h1>
            <p className="text-center text-white">Optimiza tu postura y rendimiento sobre cualquier tipo de bicicleta</p>
          </div>
        </div>
      </div>
      {/* MARK: -- DESCRIPTION */}
      <div className="container mt-md-5 description">
        <div className="row row-cols-1 d-flex justify-content-center text-center">
          <div className="col">
            <h2 className="text-dark">Mejora tu postura y eficiencia con nuestros análisis biomecánicos</h2>
            <p className="text-center">Nuestros servicios están diseñados para ciclistas de todas las modalidades (carretera, gravel, MTB, ciclocrós) que buscan mejorar su postura, evitar lesiones y optimizar su rendimiento. Ofrecemos planes adaptados a una o dos bicicletas para que puedas rodar con la mejor configuración posible.</p>
          </div>
        </div>
      </div>
      {/* MARK: -- PLAN OPTIONS */}
      <div className="container mt-5 training-options">
        <div className="row text-center justify-content-center">
          <div className="col-12">
            <h3>Nuestros Planes de Biomecánica</h3>
            <div className="row justify-content-center mt-4 gap-2">
              {/* Card para 1 Bicicleta */}
              <div className="col-12 col-md-5 mb-4">
                <div className="card h-100">
                  <img className="card-img-top w-100" src={bp} alt="Análisis para 1 Bicicleta" />
                  <div className="card-body">
                    <h4 className="card-title">Análisis para 1 Bicicleta</h4>
                    <p className="card-text">
                      <ul>
                        <li>Análisis completo de postura y ajustes personalizados</li>
                        <li>Optimización del rendimiento sobre una bicicleta</li>
                        <li>Corrección de posibles desbalances y prevención de lesiones</li>
                        <li>Sesión al aire libre o en interior</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
              {/* Card para 2 Bicicletas */}
              <div className="col-12 col-md-5 mb-4">
                <div className="card h-100">
                  <img className="card-img-top w-100" src={bp2} alt="Análisis para 2 Bicicletas" />
                  <div className="card-body">
                    <h4 className="card-title">Análisis para 2 Bicicletas</h4>
                    <p className="card-text">
                      <ul>
                        <li>Análisis y ajustes personalizados para dos bicicletas</li>
                        <li>Optimización del rendimiento sobre bicicletas de diferentes modalidades</li>
                        <li>Corrección de postura y prevención de lesiones</li>
                        <li>Sesiones al aire libre o en interior</li>
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
            <h3>¡Contáctanos para obtener más información!</h3>
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

export default BiomechanicsScreen;
