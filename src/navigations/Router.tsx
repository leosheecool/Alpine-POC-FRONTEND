import { Routes, Route } from "react-router-dom";
import { Home, Settings, TripDetails, Trips, GPS } from "pages";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Trips />} />
      <Route path="home" element={<Home />} />
      <Route path="tripDetails/:id" element={<TripDetails />} />
      <Route path="settings" element={<Settings />} />
      <Route path="Trips" element={<Trips />} />
      <Route path="GPS" element={<GPS />} />
    </Routes>
  );
};

export default Router;
