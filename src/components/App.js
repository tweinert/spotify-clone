import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Styles from "../styles/app.module.css";
import Nav from "./Nav/Nav";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";


function App() {
  return (
    <BrowserRouter>
      <div className={Styles.app}>
        <Nav />
        <Routes>
          {/* <Route path="/search"><Search /></Route> */}
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
