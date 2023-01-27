import "./App.css";
import Layout from "./components/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ansan from "./pages/mainchart/ansan";
import Sihwa from "./pages/mainchart/sihwa";
import SeoulSihwa from "./pages/mainchart/seoulsihwa";
import Splash from "./pages/splash";
import { RecoilRoot } from "recoil";
import PrevAnsan from "./pages/preview/prevAnsan";
import PrevSeoulSihwa from "./pages/preview/prevSeoulsihwa";
import PrevSihwa from "./pages/preview/prevSihwa";

function App() {
  return (
    <RecoilRoot>
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
            <Route path="/prevansan" element={<PrevAnsan />} />
            <Route path="/prevsihwa" element={<PrevSihwa />} />
            <Route path="/prevseoulsihwa" element={<PrevSeoulSihwa />} />
          </Routes>
        </div>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
