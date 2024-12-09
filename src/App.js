import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Header from './Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Protected from './Protected';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        { /*<Header />*/ }
        <Routes>
          <Route path="/login" element={<Login />} />   
          <Route path="/register" element={<Register />} />

          { /*
          <Route path="/add" element={<AddProduct />} />
          <Route path="/update" element={<UpdateProduct />} />
          */ }

          <Route path="/add" element=
          {<Protected Cmp={AddProduct} />} />
          <Route path="/update" element=
          {<Protected Cmp={UpdateProduct} />} />
       

          
    
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
