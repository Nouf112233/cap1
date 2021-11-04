import React from 'react'
import { useParams } from 'react-router-dom'
import './style.css'

const Card = (props) => {
    const cards = props.cards;
    console.log("hello")
    const id= Number(useParams().id);
    
    console.log(id);
    let newCards=[];

    function getRand(newArr,arr){
        let card = arr[Math.floor(Math.random()*arr.length)];
        if(!newArr.includes(card))
        {
            newArr.push(card);
        }
        else{
            getRand(newArr.arr);
        }
    }

    for(let i=0; i<id ; i++)
    {
        getRand(newCards,cards);
    }

    newCards=[...newCards,...newCards];

    let newCardsRand =[];

    for(let i=0;i <newCards.length ;i++)
    {
        getRand(newCardsRand,newCards);
    }


    return (<>
    <h1>hiioii</h1>
        <div className="cards">
            {newCardsRand.map((item,i)=>{
                return (
                    <div key={i} className="card">
                        <img src={item.img} alt="card img"/>
                    </div>
                )
            })}
            
        </div>
        </>
    )
}

export default Card
