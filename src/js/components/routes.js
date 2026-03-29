import { Routes, Route} from "react-router-dom";
import { Home } from "../pages/home.js";
import { Venues } from "../pages/venues.js";
import { Venue } from "../pages/venue.js";
import { Layout } from "./layout.js";
import { RouteNotFound } from "../pages/routenotfound.js";
import { RegisterUser } from "../pages/registerUser.js";
import { RegisterVenueManager } from "../pages/registerVenueManager.js";


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="venues/" element={<Venues />} />
        <Route path="venue/:id" element={<Venue />} />
        <Route path="registeruser/" element={<RegisterUser />} />
        <Route path="registervenuemanager/" element={<RegisterVenueManager />} />
        <Route path="*" element={<RouteNotFound />} />
      </Route>
    </Routes>
  );
}
