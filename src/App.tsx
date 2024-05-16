import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Layout from "./pages/theme/Layout";
import LandingPage from "./pages/Landing/LandingPage";
import ScrollToTop from "./components/ScrollToTop";
import Menu from "./pages/Menu/Menu";
// import Heropage from "./components/Landing/Heropage";

function App() {
  return (
    <>
      {/* <Heropage /> */}
      {/* <LandingPage /> */}

      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/Menu" element={<Menu />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
