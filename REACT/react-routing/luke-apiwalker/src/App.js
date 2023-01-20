import React, {useState} from "react";
import SearchForm from "./components/SearchForm"
import Api from "./components/Api";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [unit, setUnit] = useState("people");
  const [oneId, setOneId] = useState(1);
  return (
    <>
      <SearchForm unit={unit} setUnit={setUnit} oneId={oneId} setOneId={setOneId} />
      <Routes>
        <Route path="/:category/:id" element = {<Api oneId={oneId} setOneId={setOneId} />} />
      </Routes>
    </>
  );
}

export default App;
