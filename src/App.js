import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import PackingList from "./pages/PackingList";
import TransportGuidance from "./pages/TransportGuidance"; // Import the new page
import CookingPage from "./pages/CookingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/packing" element={<PackingList />} />
        <Route path="/transport" element={<TransportGuidance />} />
        <Route path="/cooking" element={<CookingPage />} />
      </Routes>
    </Router>
  );
}

export default App;