import React from 'react'
import Home from './Screens/homeScreen/homeScreen'
import  Productscreen from './Screens/ProductScreen/productScreen'
import  Register from './Screens/RegisterScreen/registerScreen'
import Footer from './Components/Footer';
import Navbar from './Components/Navbar'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'   
var isLoggin = false
function App() {

  return (
    <>
    <Router>
        <Navbar />
          <Routes>
            <Route  path = '/' element={<Home/>} />
              <Route  path = '/products' element={<Productscreen/>} />
            <Route  path = '/register' element={<Register userRegistered = {isLoggin} />} />
          </Routes>
        <Footer />
    </Router>
</>
  );
}

export default App;
