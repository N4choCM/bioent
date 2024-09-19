import { Route, Routes } from "react-router-dom";
import Navbar from "../components/0-navbar/Navbar";
import Footer from "../components/8-footer/Footer";
import HomeScreen from "../pages/HomeScreen";

const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        {/* <Route path="/about" element={<AboutScreen />} />
        <Route path="/services/fitness" element={<FitnessScreen />} />
        <Route path="/services/personal-training" element={<PersonalTrainingScreen />} />
        <Route path="/services/biomechanics" element={<BiomechanicsScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/privacy" element={<LegalWarningScreen type="privacy" />} />
        <Route path="/cookies" element={<LegalWarningScreen type="cookies" />} />
        <Route path="/legal" element={<LegalWarningScreen type="legal" />} />
        <Route path="*" element={<ErrorScreen />} /> */}
      </Routes>
      <Footer />
    </>
  );
};

export default MainRoutes;