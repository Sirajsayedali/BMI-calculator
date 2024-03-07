import React from 'react';
import './App.css';
import './index.css'
import { useState } from 'react';

function App() {
  //state
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState(0)
  const [message, setMessage] = useState(0)

  let imgSrc = ''


  let calcBmi = (e) => {
   
    e.preventDefault()
    if (weight === 0 || height === 0) {
      alert('pls enter valid weight and height')
    }
    else {
      let bmi = (weight / (height * height))
      setBmi(Math.floor(bmi))   
       /*    bmi.toFixed(1)       */
       //logic for message
     
  if(bmi<25){
    setMessage('you are underweight')
  }
  else if(bmi>=25 && bmi<30){
    setMessage('you are healthy')
  }
  else{
    setMessage('you are obese')
  }



    }
  }


let reload=()=>{
window.location.reload()
}







  return (
    <div className="app">
      <div className='container' >
        <h2 className='center'>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label >weight (kgs)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label >height (mtr)</label>
            <input value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit'>submit</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>reset</button>
          </div>
        </form>
        <div className='center'>
          <h3>your bmi is: {bmi} </h3>
          <p>{message}</p>
        </div>
        <div className='img-container'>
          <img src={imgSrc} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
