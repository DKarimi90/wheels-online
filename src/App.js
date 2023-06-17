import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Details from "./components/Details";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Purchase from "./components/Purchase";
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
            <Route path="shop/cars/:id/purchase" element={<Purchase />}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
