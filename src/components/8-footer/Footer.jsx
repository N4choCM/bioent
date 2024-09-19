import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Logo from "../../assets/img/bioent_logo_vertical.jpg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className={`footer`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md mt-2 mt-md-0">
            <Link className="footer-items" to="/privacy">Política de privacidad</Link>
          </div>
          <div className="col-12 col-md">
            <Link className="footer-items" to="/cookies">Política de cookies</Link>
          </div>
          <div className="col-12 col-md mb-3 mb-md-0">
            <Link className="footer-items" to="/legal">Aviso legal</Link>
          </div>
          <div className="col-12 col-md">
            <a href="https://www.facebook.com/profile.php?id=100091285473692" target="_blank">
              <FaFacebook className="me-3 social-icons" />
            </a>
            <a href="https://www.instagram.com/bioent_/" target="_blank">
              <FaInstagram className="social-icons" />
            </a>
          </div>
        </div>
        <hr />
        <div className="row d-md-none">
          <img id="logo-footer" src={Logo} alt="Bioent Logo" />
        </div>
        <div className="row d-none d-md-block d-lg-none">
          <img id="logo-footer-md" src={Logo} alt="Bioent Logo" />
        </div>
        <div className="row d-none d-lg-block">
          <img id="logo-footer-lg" src={Logo} alt="Bioent Logo" />
        </div>
        <div className="row text-white">
          <p>©️ Bioent</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
