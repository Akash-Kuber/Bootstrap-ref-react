import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement } from '../redux/slices/CounterSlice';


const Counter = () => {

    // For state accessing
    // state.counter.value ---> state is keyword, counter is name which is setted in slicer function and vlaue is variable name (value=0)
    const count = useSelector((state) => state.counter.value);
    
    // For function accessing
    const dispatch =useDispatch();

  return (
    <div>
      <div>
        <button
        onClick={() => dispatch(increment())}
        >
            Increment
        </button>
        <br />
        <br />

        <div>{count}</div>
        <br />
        <br />

        <button
        onClick={() => dispatch(decrement())}
        >
            Decrement
        </button>
      </div>
    </div>
  )
}

export default Counter
