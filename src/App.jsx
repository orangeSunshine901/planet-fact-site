import { createRoot } from "react-dom/client";
import Nav from "./Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mercury from "./pages/Mercury";
import Venus from "./pages/Venus";
import Earth from "./pages/Earth";
import Mars from "./pages/Mars";
import Jupiter from "./pages/Jupiter";
import Saturn from "./pages/Saturn";
import Uranus from "./pages/Uranus";
import Neptune from "./pages/Neptune";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<Mercury />}></Route>
        <Route path="/mercury" element={<Mercury />}></Route>
        <Route path="/venus" element={<Venus />}></Route>
        <Route path="/earth" element={<Earth />}></Route>
        <Route path="/mars" element={<Mars />}></Route>
        <Route path="/jupiter" element={<Jupiter />}></Route>
        <Route path="/saturn" element={<Saturn />}></Route>
        <Route path="/uranus" element={<Uranus />}></Route>
        <Route path="/neptune" element={<Neptune />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container); // createRoot is the new api of the old api that was ReactDOM.render("container", <App/>)
root.render(<App />);
