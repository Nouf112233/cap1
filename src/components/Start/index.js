import React  from 'react'
import {useNavigate} from 'react-router-dom'
// import Timer from '../Timer';
import './style.css'

const Start = () => {
    const navigate = useNavigate();

    const changeRoute = (id)=>{
        navigate(`/card/${id}`);
    }

    const changeRoutedis=()=>{
        navigate(`/discription`);
    }
    return (
        
            <div className="discription">
            <button onClick={()=>changeRoutedis()}>Explain</button>
            </div>
            
            

            
        
    )
}

export default Start
