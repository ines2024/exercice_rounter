
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Component/Contact';
import Login from './Component/Login';
import Navbar1 from './Component/Navbar';
import data from './Component/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home';
import Shoplist from './Component/ProductList';
function App() {
  
  var object=JSON.parse(localStorage.getItem("product"))
  data.push(object)
  return (
    <div className="App">
      <Navbar1/>
      <Routes>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Products' element={<Shoplist shopping={data}/>}/>
      </Routes>






    </div>
  );
}

export default App;
