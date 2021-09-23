import React, { useState } from 'react'

const Count = (props) => {

    const [count, setCount] = useState(0)

    const countButtonHandler = () => {
      setCount((prevCount) => prevCount + 1)
    }
  
    const backButtonHandler = () => {
      setCount(count -1)
    }
    return (
        <div>
            <button onClick={backButtonHandler}>Count Down</button>
            <button onClick={countButtonHandler}>Count up</button>
            <h2>Current Count: {count}</h2>
        </div>
    )
}

export default Count
