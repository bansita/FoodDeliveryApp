import Home from './screen/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './screen/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Signup from './screen/Signup.js';
import { CartProvider } from './components/UseContext.js';
import MyOrder from './screen/MyOrder.js';
function App() {
  return (
    <CartProvider>
    <Router> 
    <div >
      <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/login' element={<Login/>}></Route>
      <Route exact path='/signup' element={<Signup/>}></Route>
      <Route exact path='/myOrder' element={<MyOrder/>}></Route>
      </Routes>
    </div>
    </Router>   
    </CartProvider>
  );
}

export default App;
