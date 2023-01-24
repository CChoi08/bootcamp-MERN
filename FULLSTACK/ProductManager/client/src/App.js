import './App.css';
import Main from './views/Main';
import {Routes, Route} from "react-router-dom";
import OneProduct from './views/oneProduct';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element = {<Main />} path = "/" />
        <Route element = {<OneProduct />} path = "/product/:id" />
      </Routes>
    </div>
  );
}

export default App;
