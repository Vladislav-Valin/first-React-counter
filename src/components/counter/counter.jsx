import React, {useState} from 'react'
import './counter.css'
import Button from 'react-bootstrap/Button';

function Counter() {

  const [counter, setCounter] = useState(0)

  return (
    <div className="counter">
        <h4>Clicked {counter}</h4>
        <Button variant="outline-info" onClick={() => setCounter(counter + 1)}>+</Button>
        <Button variant="outline-info" onClick={() => setCounter(counter - 1)}>-</Button>
        <Button variant="outline-warning" onClick={() => setCounter(0)}>Reset</Button>
    </div>
  )
}

export default Counter