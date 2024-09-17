import Login from './pages/login';
import Home from './pages/home';
import Detail from './pages/detail';
import Collection from './pages/collection';
import Staff from './pages/staff';
import Cart from './pages/cart';
import ScrollToTop from './until/scroll';

import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <ScrollToTop/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/detail/:MaSanPham" element={<Detail/>} />
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
