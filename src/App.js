import React, { useState } from "react";
import { Route, Routes } from "react-router";
import Card from "./components/Card";
import Game from "./components/Game";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Error404 from "./components/Error404";
import c1 from "./imges/f1.jpg";
import c2 from "./imges/f2.jpg";
import c3 from "./imges/f3.jpg";
import c4 from "./imges/f4.jpg";
import c5 from "./imges/f5.jpg";
import c6 from "./imges/f6.jpg";

import "./App.css";

function App() {
  const [cards, setCards] = useState([
    { id: 1, img: c1 },
    { id: 2, img: c2 },
    { id: 3, img: c3 },
    { id: 4, img: c4 },
    { id: 5, img: c5 },
    { id: 6, img: c6 },
  ]);

  return (
    <div className="App">
      <p>hello</p>
      <Start />
      <Routes>
        <Route exact path="/start" element={<Start />} />
        <Route exact path="/game" element={<Game />} />
        <Route  path="/card/:id" element={<Card cards={cards} />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
