import Map from '../components/7-map/Map';
import Contact from '../components/6-contact/Contact';
import { useContext, useEffect } from "react";
import { AppStateContext } from "../state/AppProvider";
import ContactTitle from '../components/6-contact/ContactTitle';

const ContactScreen = () => {
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
    <br /><br /> <br /> <br />
      <div className="container mt-5">
        <ContactTitle />
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col col-md-6">
            <Map />
          </div>
          <div className="col col-md-6">
            <Contact />
          </div>
        </div>
      </div>
      <br /><br />
    </>
  );
};

export default ContactScreen;