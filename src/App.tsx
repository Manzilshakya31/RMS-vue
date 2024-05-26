import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Layout from "./pages/theme/Layout";
import LandingPage from "./pages/Landing/LandingPage";
import ScrollToTop from "./components/ScrollToTop";
import Menu from "./pages/Menu/Menu";
import Restaurant from "./pages/Restaurant/Restaurant";
import RProfile from "./pages/Restaurant/RProfile";
import Landing from "./pages/Landing/Landing";
import PrivateRoute from "./pages/routes/PrivateRoute";
import Map from "./pages/Map/Map";
// import Heropage from "./components/Landing/Heropage";

function App() {
  return (
    <>
      {/* <Heropage /> */}
      {/* <LandingPage /> */}

      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/" element={<PrivateRoute component={Layout} />}>
            <Route
              path="/landingpage"
              element={<PrivateRoute component={LandingPage} />}
            />
            <Route path="/menu" element={<PrivateRoute component={Menu} />} />
            <Route
              path="/restaurant"
              element={<PrivateRoute component={Restaurant} />}
            />
            <Route
              path="/profile"
              element={<PrivateRoute component={RProfile} />}
            />
            <Route path="/map" element={<PrivateRoute component={Map} />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
