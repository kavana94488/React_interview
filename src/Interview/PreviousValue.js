import React, { useRef, useState } from 'react'
import { useEffect } from 'react'

const PreviousValue = () => {

    const value = useRef(null)

   
    const[number,setNumber] = useState(0)
    
     useEffect(() => {
       value.current = number;
     }, [number]);

  return (
    <div>
        <p>PreviousValue {value.current}</p>
        <p>Current value {number}</p>
        <button onClick={()=>{setNumber(number+1)}}>Click Me</button>
    </div>
  )
}

export default PreviousValue