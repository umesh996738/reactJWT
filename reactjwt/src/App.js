import React from 'react'
import './App.css';
import { useSelector ,useDispatch } from 'react-redux';
import { decrementNum, incrementNum } from './Action';


function App() {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();

  return (
    <>
      <div className='container'>
      <h1> Increment/decrement counter</h1>
      <h4> using react and redux</h4>
      <div className="container1">
          <button className='minus' title='decrement'
            onClick={ () =>dispatch(decrementNum())}><span> - </span></button>
          <input name="quantity" type="text" className='input1' value={ myState} />
          <button className='plus' title='increment'
            onClick={ ()=>dispatch(incrementNum())}><span> + </span></button>
        

        </div>
        </div>
    </>
  )
}

export default App