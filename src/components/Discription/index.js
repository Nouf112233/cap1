import React from 'react'
import {useNavigate} from 'react-router-dom'
import './style.css'

const Discription = () => {

    const navigate = useNavigate();

    const changeRoute = (id)=>{
        navigate(`/card/${id}`);
    }
    return (
        <div className="disc">
            <div className="but">
            
            <button onClick={()=>changeRoute(5)} className="easy">Easy</button>
            <button onClick={()=>changeRoute(7)} className="medium">Medium</button>
            <button onClick={()=>changeRoute(10)} className="hard">Hard</button>
            </div>
            
        </div>
    )
}

export default Discription;
