import { useEffect } from 'react';
import { Zoom } from 'react-reveal';
import bp1 from "../assets/img/banner1.jpg";
import bp2 from "../assets/img/banner2.jpg";
import bp3 from "../assets/img/banner3.jpg";
import bp4 from "../assets/img/banner4.jpg";
import bp5 from "../assets/img/banner5.jpg";
import Banner from "../components/1-banner/Banner";
import About from "../components/2-about/About";
import Divider from "../components/core/divider/Divider";
import Contact from "../components/6-contact/Contact";
import Services from "../components/3-services/Services";
import { useMediaQuery } from 'react-responsive';

const HomeScreen = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const imagesMobile = [bp2, bp3, bp4];
  const imagesTabletPC = [bp1, bp2, bp3, bp4, bp5];

  const images = isMobile ? imagesMobile : imagesTabletPC;

  const heading1 = "bioent";
  const heading2 = "Biomecánica y Entrenamiento";
  const buttonText = "Conócenos! 😀";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Banner images={images} heading1={heading1} heading2={heading2} buttonText={buttonText} buttonLink={"about"} />
      <Zoom>
        <About />
        <Divider />
      </Zoom>
      <Zoom>
        <Services />
        <Divider />
      </Zoom>
      <Zoom>
        <Contact />
      </Zoom>
    </>
  );
};

export default HomeScreen;