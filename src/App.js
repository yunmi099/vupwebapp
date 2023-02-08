import "./App.css";
import Layout from "./components/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ansan from "./pages/mainchart/ansan";
import Sihwa from "./pages/mainchart/sihwa";
import SeoulSihwa from "./pages/mainchart/seoulsihwa";
import Splash from "./pages/splash";
import PrevAnsan from "./pages/preview/prevAnsan";
import PrevSeoulSihwa from "./pages/preview/prevSeoulsihwa";
import PrevSihwa from "./pages/preview/prevSihwa";
import { LoginProvider } from "./context/loginContext";
import { DateProvider } from "./context/dateContext";
import { DeviceProvider } from "./context/deviceContext";
import CalAnsan from "./pages/calculation/calAnsan";
import CalSeoulsihwa from "./pages/calculation/calSeoulsihwa";
import CalSihwa from "./pages/calculation/calSihwa";
import RoutingTable from "./pages/routingtable/RoutingTable";
import { SourceProvider } from "./context/sourcesinkContext/sourceProvider";
import { TotalvalueProvider } from "./context/totalvalueContext/totalvalueProvider";
import { RefProvider } from "./context/refContext";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <LoginProvider>
          <TotalvalueProvider>
            <DateProvider>
              <DeviceProvider>
                <SourceProvider>
                  <RefProvider>
                    <Routes>
                      <Route path="/" element={<Splash />} />
                      <Route
                        path="/ansan"
                        element={<Layout children={<Ansan />} />}
                      />
                      <Route
                        path="/sihwa"
                        element={<Layout children={<Sihwa />} />}
                      />
                      <Route
                        path="/seoulsihwa"
                        element={<Layout children={<SeoulSihwa />} />}
                      />
                      <Route path="/prevansan" element={<PrevAnsan />} />
                      <Route path="/prevsihwa" element={<PrevSihwa />} />
                      <Route
                        path="/prevseoulsihwa"
                        element={<PrevSeoulSihwa />}
                      />
                      <Route path="/calansan" element={<CalAnsan />} />
                      <Route path="/calsihwa" element={<CalSihwa />} />
                      <Route
                        path="/calseoulsihwa"
                        element={<CalSeoulsihwa />}
                      />
                      <Route path="/routingtable" element={<RoutingTable />} />
                    </Routes>
                  </RefProvider>
                </SourceProvider>
              </DeviceProvider>
            </DateProvider>
          </TotalvalueProvider>
        </LoginProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
