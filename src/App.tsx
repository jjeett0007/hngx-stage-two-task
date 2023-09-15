import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Component/Homepage";
import Page from "./Component/Pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movie/:id" element={<Page />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
