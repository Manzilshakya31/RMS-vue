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
          <Route path="/" element={<Layout />}>
            <Route path="/landingpage" element={<LandingPage />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/profile" element={<RProfile />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
