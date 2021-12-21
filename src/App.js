import React from 'react';
import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import {incNumber,decNumber} from './actions/index'

function App() {
  const myState = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch();
  return (
    <>
     <div className="container ms-5">
      <h1>Increment/decrement counter</h1>
      <h4>using React and Redux</h4>
      <div className="quantity">
      
       <a className="quantity_minus" title="Dcrement"onClick={() => dispatch(decNumber() )}><span><button> - </button> </span> </a>
         <input name="quantity" type="text" className="quantity_input" value={myState}></input>
       <a className="quantity_plus" title="Increment" onClick={() => dispatch(incNumber() )}><span> <button> + </button></span></a>
      </div>
     </div>
    </>
  )
}

export default App

