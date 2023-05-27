import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './componentes/navbar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';

import Cart from './componentes/Cart/Cart';
import { CartProvider } from './context/CartContext';
import Checkout from './componentes/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element = {<Cart/>}/>
        <Route path='/Checkout' element={<Checkout/>}/>
        
      </Routes>
      </CartProvider>
      
      
      
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
