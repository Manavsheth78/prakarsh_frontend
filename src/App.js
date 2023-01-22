import "./App.css";
import EventsPage from "./Pages/EventsPage/EventsPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import SponsersPage from "./Pages/SponsersPage/SponsersPage";
import ParticipantsPage from "./Pages/ParticipantsPage/ParticipantsPage";
import Navbar from "./Pages/Navbar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import Footer from "./Pages/Footer/Footer";
import LoginPage from "./Pages/LoginPage/LoginPage";
import GlimpseJSON from "./Pages/Glimpse/GlimpseJSON";

function App() {
  return (
    <div className="app">
      {/* <LoginPage /> */}
      <Navbar />
      <HomePage />
      <AboutPage />
      <EventsPage />
      <GlimpseJSON />
      <SponsersPage />
      <ParticipantsPage />
      <Footer />
    </div>
  );
}
/* prakarash*/
export default App;
