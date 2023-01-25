import './App.css';
import Main from './views/Main';
import {Routes, Route} from "react-router-dom";
import OneProduct from './views/oneProduct';
import EditProduct from './views/EditProduct';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element = {<Main />} path = "/" />
        <Route element = {<OneProduct />} path = "/product/:id" />
        <Route element = {<EditProduct />} path = "/product/edit/:id" />
      </Routes>
    </div>
  );
}

export default App;
