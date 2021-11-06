import React, { useEffect, useState } from "react";
import { useParams , useNavigate } from "react-router-dom";
import "./style.css";

const Card = (props) => {
  const cards = props.cards;
  // const vidio = props.video;
  const numOfCards = Number(useParams().id);
  const [newCards, setNewCards] = useState([]);
  const [openedCard, setOpenedCard]=useState([]);
  const [matched,setMatched]=useState([]);
  const [counter ,setCounter] = useState(60);
  const navigate = useNavigate();

  function flipCard(index) {
    if(!openedCard.includes(index)){
      setOpenedCard((opened) => [...opened, index]);
    }
    
  }

  const newStart = () => {
    setMatched([]);
    setOpenedCard([]);
    setCounter(60);

}

  useEffect(() => {
    const timer =
    counter > 0 && setInterval(()=> setCounter(counter - 1),1000);

    if((counter===0)&&(matched.length<numOfCards))
    {
      
      alert("Time's up, you're lost, try again");
      setMatched([]);
      setOpenedCard([]);
      setCounter(60);
      

    }
    if((counter>0)&&(matched.length===numOfCards))
    {
      
      alert("congratulations for winning, try again");
      setMatched([]);
      setOpenedCard([]);
      setCounter(60);
    }
    return () => {
        clearInterval(timer);
    }
   
    
}, [counter])


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
    <div className="counter">
    <div className="timer">
    
           <button onClick={()=>newStart()} className="time">newStart</button> 
            <h3 className="time"> Lift Time : {counter}</h3>
    </div>
   
       
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
            
            </div>
            <div className="back"></div>

            </div>

          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Card;
