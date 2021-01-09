import React, {useState} from 'react'
//use hooks to hook into the state of the count property



function CounterWithHooks() {

    const [count, setCount] = useState(1) //count=getter, useCount=setter

    const incrementCounter = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => incrementCounter()}>Increment One</button>
        </div>
    )
}
export default CounterWithHooks