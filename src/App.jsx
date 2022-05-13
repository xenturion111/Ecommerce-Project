import './App.css'
import Navbar from './components/navbar/index'
import Home from './page/home/index'
import Products from './page/products/index'
import Profile from './page/profile/index'
import ProtectedRoute from './components/navbar/ProtectedRoute'
import Login from './page/login/index'
import NavbarLayout from './components/outlet/index'
import {  Routes, Route } from "react-router-dom";

const App = () =>  {

  return (
    
    <div className="App">
        <Routes>
           <Route element={<NavbarLayout />} >
            <Route exact path="/" element={<Home />} />
            <Route  path="/Product" element={ <Products />} />
            <Route
            path="/Profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          >
          </Route>
          </Route>
          <Route  path="/login" element={<Login />} />
        </Routes>
    </div>
  )

}

const defaultContainer = () => {
  <div>
    
  </div>
}
export default App
