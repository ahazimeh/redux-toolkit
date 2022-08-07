import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddEdit from "./pages/AddEdit";
import Home from "./pages/Home";
import Info from "./pages/Info";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddContact" element={<AddEdit />} />
          <Route path="/editContact/:id" element={<AddEdit />} />
          <Route path="/info/:id" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
