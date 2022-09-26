import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "../styles/App.css";
import Home from "./Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          {/* <Nav /> */}
          {/* <Route path="/search"><Search /></Route> */}
          <Route path="/" element={<Home />} />
          {/* <Player /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
