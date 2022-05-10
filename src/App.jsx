import './App.css'
import Navbar from './components/navbar/index'
import Home from './page/home/index'
import Product from './page/product/index'

const App = () =>  {

  return (
    <div className="App">
        <Navbar />
        <Home />
        <Product />
    </div>
  )
}

export default App
