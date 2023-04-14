import React, { useState } from 'react';
import './checkbox.css'

const Checkbox = () => {

    const data = [
        {
            name:"John",
            isProgrammer:true
        },
        {
            name:"Joseph",
            isProgrammer:false
        }


    ]

    const[checked,setChecked] = useState(data)
    

    const checkHandler = (ind) =>
    {
        
       let updatedCheck = [...checked]
       
       updatedCheck[ind].isProgrammer = !updatedCheck[ind].isProgrammer;
    
       setChecked(updatedCheck)
       
        
       
    }
  return (
    <div className="checkbox">
      <h3> Changing the state of default checkboxes</h3>
      <hr/>

      <div className='data'>
        {checked.map((item, index) => (
          <>
            <span>{item.name}</span>
            <input
              type="checkbox"
              checked={item.isProgrammer ? true : false}
              value={checked}
              key={index}
              onChange={() => {
                checkHandler(index);
              }}
            />
            <br />
          </>
        ))}
      </div>
    </div>
  );
}

export default Checkbox