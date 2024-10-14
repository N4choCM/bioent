/* eslint-disable react/jsx-key */
import up1 from "../../assets/img/user1.jpg";
import up2 from "../../assets/img/user2.jpg";
import up3 from "../../assets/img/user3.jpg";
import up4 from "../../assets/img/user4.jpg";
import { Zoom } from 'react-reveal';

import json from "../../assets/text/opinions.json";
import "./Opinions.css";
import { AppStateContext } from "../../../src/state/AppProvider";
import { useContext } from "react";

const Opinions = () => {
  const appStateContext = useContext(AppStateContext);

  // Array con las imágenes de los usuarios
  const images = [up1, up2, up3, up4];

  return (
    <div
      id="opinions"
      className="carousel slide carousel-fade anchor"
      data-bs-ride="carousel"
    >
      <div className="container">
        <Zoom>
          <div className="row my-4">
            <div className="col text-center text-uppercase">
              <h3>{json.title}</h3>
            </div>
          </div>
        </Zoom>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {json.name.map((name, index) => (
            <Zoom>
              <div className="col col-md-6 col-lg-3 g-4" key={index}>
                <div>
                  <img
                    src={images[index]} 
                    alt={name}
                    className="rounded-circle avatar-img" 
                  />
                  <h5 className="mt-3 text-center">{name}</h5> 
                  <p className={`${appStateContext?.state.isDarkMode ? "text-color-dark-mode" : ""}`}> {json.paragraph[index]}</p>
                </div>
              </div>
            </Zoom>
          ))}
        </div>
      </div>
      <br />
    </div>
  );
};

export default Opinions;
