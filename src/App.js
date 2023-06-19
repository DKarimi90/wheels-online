import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react'
import Chat from "./components/Chat";
import Contact from "./components/Contact";
import Details from "./components/Details";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Oops from "./components/Oops";
import Purchase from "./components/Purchase";
import Shop from "./components/Shop";
import Help from "./components/Help";
import Footer from "./components/Footer";
import Team from "./components/Team";
function App() {
const [cars, setCars] = useState([])

  useEffect(() => {
      fetch('https://wheels-hazel.vercel.app/cars')
      .then(res => {
          if(res.ok){
              return res.json()
          }
          else {
              throw Error("Resource not found")
          }
      })
      .then(data => {
          console.log(data)
          setCars(data)
      })
      
  }, [])
  return (
    <div>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="shop" element={<Shop cars={cars}/>}/>
            <Route path="contact" element={<Contact />}/>
            <Route path="shop/cars/:id" element={<Details />}/>
            <Route path="shop/cars/:id/purchase" element={<Purchase />}/>
            <Route path="oops" element={<Oops />}/>
            <Route path="help" element={<Help />}/>
            <Route path="team" element={<Team />}/>
          </Routes>
          <Chat />
          <Footer />
      </Router>
    </div>
  );
}

export default App;
