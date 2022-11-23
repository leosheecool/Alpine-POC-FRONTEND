import { Routes, Route } from "react-router-dom";
import { Home, Settings, TripDetails, Trips } from "pages";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="tripDetails" element={<TripDetails />} />
      <Route path="settings" element={<Settings />} />
      <Route path="Trips" element={<Trips />} />
    </Routes>
  );
};

export default Router;
