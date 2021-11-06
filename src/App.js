import React, { useState } from "react";
import { Route, Routes } from "react-router";
import Card from "./components/Card";
import Discription from "./components/Discription";
import Start from "./components/Start";
import c1 from "./imges/f1.png";
import c2 from "./imges/f2.png";
import c3 from "./imges/f3.jpg";
import c4 from "./imges/f4.jpg";
import c5 from "./imges/f5.jpg";
import c6 from "./imges/f6.jpg";
import c7 from "./imges/f7.jpg";
import c8 from "./imges/f8.jpg";
import c9 from "./imges/f9.jpg";
import c10 from "./imges/f10.jpg";
import Logo from "./imges/logo.png";
// import Vidio from "./imges/bgvidio.mp4"
import "./App.css";

function App() {
  const [cards, setCards] = useState([
    { id: 1, img: c1 },
    { id: 2, img: c2 },
    { id: 3, img: c3 },
    { id: 4, img: c4 },
    { id: 5, img: c5 },
    { id: 6, img: c6 },
    { id: 7, img: c7 },
    { id: 8, img: c8 },
    { id: 9, img: c9 },
    { id: 10, img: c10 },
  ]);

  return (
    <div className="App">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <Start />
      <Routes>
        <Route exact path="/start" element={<Start />} />
        <Route exact path="/discription" element={<Discription />} />
        <Route  path="/card/:id" element={<Card cards={cards} />} />
      </Routes>
    </div>
  );
}

export default App;
