import React from "react";
import Quotes from "./Pages/Quotes";
import Stock from "./Pages/Stock";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Stock></Stock>}></Route>
        <Route path="/quotes/:id" element={<Quotes></Quotes>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
