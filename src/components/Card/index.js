import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";

const Card = (props) => {
  const cards = props.cards;
  const numOfCards = Number(useParams().id);
  const [newCards, setNewCards] = useState([]);
  const [openedCard, setOpenedCard]=useState([]);
  const [matched,setMatched]=useState([]);

  function flipCard(index) {
    if(!openedCard.includes(index)){
      setOpenedCard((opened) => [...opened, index]);
    }
    
  }

  useEffect(() => {
    if(openedCard<2) return;

    const firstMatched = newCards[openedCard[0]];
    const secondMatched = newCards[openedCard[1]];

    if(secondMatched && firstMatched.id===secondMatched.id)
    {
      setMatched([...matched,firstMatched.id])
    }

    if(openedCard.length=== 2)setTimeout(() => setOpenedCard([]), 1000);

  }, [openedCard])

  useEffect(() => {
    let cardsNums = [];
    let cardsNumsEle = [];
    while (cardsNums.length !== numOfCards) {
      const randomCard = Math.floor(Math.random() * cards.length);

      if (!cardsNums.includes(randomCard)) {
        cardsNums.push(randomCard);
        cardsNumsEle.push(cards[randomCard]);
      }
    }

    cardsNums.length = 0

    while (cardsNums.length !== numOfCards) {
      const randomCard = Math.floor(Math.random() * numOfCards);

      if (!cardsNums.includes(randomCard)) {
        cardsNums.push(randomCard);
        cardsNumsEle.push(cardsNumsEle[randomCard]);
      }
    }
    
    setNewCards([...cardsNumsEle]);
  }, []);

  return (
    <div className="cards">
      {newCards.map((item, i) => {
         let isFlip = false;

         if(openedCard.includes(i))
         { isFlip = true; 
         
        };
         if(matched.includes(item.id)) isFlip = true;
        return (
          <div 
          key={i} 
          className={`card ${isFlip ? "flipped" : ""}`} 
           onClick={()=>flipCard(i)}
           >
             <div className="inner">
             <div className="front">


            <img src={item.img} alt="card img"/>
            {/* <h1>{item.id}</h1> */}
            </div>
            <div className="back"></div>

            </div>

          </div>
        );
      })}
    </div>
  );
};

export default Card;
