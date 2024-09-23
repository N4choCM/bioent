import {
  BookContacts20Regular,
  Home20Regular,
  WeatherMoon20Regular,
  WeatherSunny20Regular
} from "@fluentui/react-icons";
import ConstructionIcon from '@mui/icons-material/Construction';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import EmailIcon from '@mui/icons-material/Email';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { useContext, useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AppStateContext } from "../../../src/state/AppProvider";
import Logo from "../../assets/img/bioent_logo_horizontal-removebg-preview.png";
import "./Navbar.css";
import { useLocation } from "react-router-dom"; // Import useLocation

const NavBar = () => {
  const appStateContext = useContext(AppStateContext);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const navbarCollapseRef = useRef(null);
  const location = useLocation(); // Get the current location

  const handleDarkModeClick = () => {
    appStateContext?.dispatch({ type: "TOGGLE_DARK_MODE" });
    closeMenu();
  };

  const closeMenu = () => {
    if (navbarCollapseRef.current && navbarCollapseRef.current.classList.contains("show")) {
      navbarCollapseRef.current.classList.remove("show");
    }
  };

  useEffect(() => {
    document.body.classList.remove("app-mode-dark", "app-mode-light");
    document.body.classList.add(
      `app-mode-${appStateContext?.state.isDarkMode ? "dark" : "light"}`
    );
  }, [appStateContext?.state.isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to top when the location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); // Dependency on location

  const navItems = [
    { to: "/", label: "Inicio", icon: <Home20Regular className="mobile-bigger" />, onClick: closeMenu },
    { to: "/about", label: "Sobre mí", icon: <BookContacts20Regular className="mobile-bigger" />, onClick: closeMenu },
    { 
      label: "Servicios", 
      icon: <FitnessCenterIcon className="mobile-bigger mui-icon me-1"/>, 
      subItems: [
        { to: "/services/fitness-training", label: "Entrenamientos Fitness", icon: <DirectionsRunIcon className="mobile-bigger mui-icon me-1"/>, onClick: closeMenu },
        { to: "/services/personal-training", label: "Entrenamientos Personales", icon: <DirectionsBikeIcon className="mobile-bigger mui-icon me-1"/>, onClick: closeMenu },
        { to: "/services/biomechanics", label: "Biomecánica", icon: <ConstructionIcon className="mobile-bigger mui-icon me-1"/>, onClick: closeMenu },
      ] 
    },
    { to: "/contact", label: "Contacto", icon: <EmailIcon className="mobile-bigger mui-icon me-1"/>, onClick: closeMenu }
  ];

  return (
    <header className="fixed-top">
      <nav
        className={`
          navbar navbar-expand-lg navbar-dark ${
            !scrolled ? 
            "navbar-transparent" : 
            "bg-navbar-bioent" 
          }
        `}
      >
        <div className="container">
        <NavLink
                        to="/"
                        className="navbar-brand custom-pointer"
                        onClick={closeMenu()}
                      >
            <div>
              <img
                className={"img-logo"}
                src={Logo}
                alt="logo"
              />
            </div>
                      </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav" ref={navbarCollapseRef}>
            <ul className="navbar-nav ms-auto">
              {navItems.map((item, index) => (
                <li 
                  key={index} 
                  className={`nav-item navbar-hover-custom text-white me-1 navbar-flex ${item.subItems ? "dropdown" : ""}`}
                >
                  {!item.subItems ? (
                      <NavLink
                        to={item.to}
                        className="nav-link custom-pointer"
                        onClick={item.onClick}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </NavLink>
                    ) : (
                      <>
                        <a
                          href="#"
                          className="nav-link dropdown-toggle custom-pointer"
                          id={`navbarDropdown-${index}`}
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {item.icon}
                          <span>{item.label}</span>
                        </a>
                        <ul 
                          className={`dropdown-menu ${appStateContext?.state.isDarkMode ? "dropdown-dark" : "dropdown-light"}`}
                          aria-labelledby={`navbarDropdown-${index}`}
                        >
                          {item.subItems.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <NavLink
                                to={subItem.to}
                                className="dropdown-item"
                                onClick={subItem.onClick}
                              >
                                {subItem.icon}
                                <span>{subItem.label}</span>
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </>
                    
                  )}
                </li>
              ))}
            </ul>
            <div className="d-flex navbar-hover-custom navbar-flex">
              <button 
                className="btn"
                onClick={handleDarkModeClick}
              >
                {appStateContext?.state.isDarkMode 
                  ? <WeatherSunny20Regular className="text-light mobile-bigger-dark-mode" /> 
                  : <WeatherMoon20Regular className="text-light mobile-bigger-dark-mode"/>
                }
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
