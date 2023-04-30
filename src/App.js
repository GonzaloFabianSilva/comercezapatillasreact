import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './componentes/navbar/NavBar';
import ItemListContainer from './componentes/itemListContainer/itemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<h1>404 not found</h1>}/>
      </Routes>
      
      
      
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
