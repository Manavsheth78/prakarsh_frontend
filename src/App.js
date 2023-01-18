import "./App.css"
import EventsPage from "./Pages/EventsPage/EventsPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import SponsersPage from "./Pages/SponsersPage/SponsersPage";
import ParticipantsPage from "./Pages/ParticipantsPage/ParticipantsPage";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import Footer from "./Pages/Footer/Footer";
import LoginPage from "./Pages/LoginPage/LoginPage";

function App() {

  return (
    <>
      {/* <LoginPage /> */}
      <Navbar />
      <HomePage />
      <AboutPage />
      <EventsPage />
      <SponsersPage />
      <ParticipantsPage />
      <Footer />
    </>
  );

}
/* prakarash*/
export default App;
