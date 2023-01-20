import "./App.css";
import Layout from "./components/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ansan from "./pages/ansan";
import Sihwa from "./pages/sihwa";
import SeoulSihwa from "./pages/seoulsihwa";
import Splash from "./pages/splash";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/ansan" element={<Layout children={<Ansan />} />} />
          <Route path="/sihwa" element={<Layout children={<Sihwa />} />} />
          <Route
            path="/seoulsihwa"
            element={<Layout children={<SeoulSihwa />} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
