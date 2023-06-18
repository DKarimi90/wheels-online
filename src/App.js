import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/Chat";
import Contact from "./components/Contact";
import Details from "./components/Details";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Oops from "./components/Oops";
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
            <Route path="oops" element={<Oops />}/>
          </Routes>
          <Chat />
      </Router>
    </div>
  );
}

export default App;
