import React from "react"
import Main from "./views/Main";
import Create from "./views/Create";
import Edit from "./views/Edit"
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route element = {<Main />} path = "/" />
        <Route element = {<Create />} path = "/author/create" />
        <Route element = {<Edit />} path = "/author/edit/:id" />
      </Routes>
    </>
  );
}

export default App;
