import { useEffect, useState } from 'react'
import './App.css'



function App() {
  
  const[temp, setTemp] = useState(10);
  const[color, setColor] = useState('cold');


  const increaseTemp = ()=>
  {
    setTemp(temp+1);
  }

  const decreaseTemp = ()=>
  {
    setTemp(temp-1);
  }

  useEffect(()=>
  {
    if(temp>=15)
    {
      setColor('hot');
    }
    else{
      setColor('cold');
    }
  },[temp])


  return (
    <>
    <div className="maincontainer">
      Color Change by temprature
      <div className="temp-disp">
        <div className={`${color}`}>
          {temp}℃
        </div>
      </div>
      
      <div className="button-container">
          <button onClick={increaseTemp}>+</button>
          <button onClick={decreaseTemp}>-</button>
        </div>
    </div>
    </>
  )
}

export default App
