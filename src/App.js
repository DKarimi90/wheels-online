import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Details from "./components/Details";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="shop" element={<Shop />}/>
            <Route path="contact" element={<Contact />}/>
            <Route path="shop/cars/:id" element={<Details />}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
