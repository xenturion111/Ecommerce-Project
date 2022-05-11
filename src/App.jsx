import './App.css'
import Navbar from './components/navbar/index'
import Home from './page/home/index'
import Products from './page/products/index'
import Product from './page/product/index'
import Login from './page/login/index'
import {  Routes, Route } from "react-router-dom";

const App = () =>  {

  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Product" element={ <Products />} />
          <Route exact path="/Product/:id" element={ <Product />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
    </div>
  )
}

export default App
