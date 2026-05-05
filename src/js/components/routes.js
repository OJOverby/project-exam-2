import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home.js";
import { Venues } from "../pages/venues.js";
import { Venue } from "../pages/venue.js";
import { Profile } from "../pages/profile.js";
import { ManagerProfile } from "../pages/manager/managerProfile.js";
import { Layout } from "./layout.js";
import { RouteNotFound } from "../pages/routenotfound.js";
import { RegisterUser } from "../pages/registerUser.js";
import { RegisterManager } from "../pages/manager/registerManager.js";
import { LoginUser } from "../pages/login.js";
import { Booking } from "../pages/booking.js";
import { NewVenue } from "../pages/manager/newVenue.js";
import { Search } from "../pages/search.js";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="venues/" element={<Venues />} />
        <Route path="venue/:id" element={<Venue />} />
        <Route path="profile/" element={<Profile />} />
        <Route path="managerprofile/" element={<ManagerProfile />} />
        <Route path="newvenue/" element={<NewVenue />} />
        <Route path="login/" element={<LoginUser />} />
        <Route path="registeruser/" element={<RegisterUser />} />
        <Route path="registermanager/" element={<RegisterManager />} />
        <Route path="booking/:id" element={<Booking />} />
        <Route path="search" element={<Search />} />
        <Route path="*" element={<RouteNotFound />} />
      </Route>
    </Routes>
  );
}
