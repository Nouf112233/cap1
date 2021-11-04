import React ,{useState ,useEffect} from 'react'
import './style.css'

const Timer = () => {
    const [counter ,setCounter] = useState(60);

    useEffect(() => {
        const timer =
        counter > 0 && setInterval(()=> setCounter(counter - 1),1000);
        return () => {
            clearInterval(timer);
        }
    }, [counter])
    return (
        <div className="timer">
            <h3> Lift Time : {counter}</h3>
        </div>
    )
}

export default Timer
