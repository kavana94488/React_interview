import React, { useState } from 'react'
import "./checkbox.css"

const Deleting = () => {
    const data = [
      {
        id: 1,
        name: "kavana",
        job: "Software Engineer",
      },
      {
        id: 2,
        name: "pavana",
        job: "Software Developer",
      },
      {
        id: 3,
        name: "namana",
        job: "Deveops Engineer",
      },
      {
        id: 4,
        name: "gagana",
        job: "Test Engineer",
      },
    ];

    const[change,setChange] = useState(data)
    const deleteHandler = (ind) =>{
    //   console.log(ind)
        let result = change.filter((item,index)=>{
            console.log(item.id)
            return index!==ind
        })
        setChange(result)

    }
    console.log(change)
  return (
    <div className="checkbox">
        <h4>Deleting  options</h4>
      <div className='deletevalue'>
        {change.map((item, index) => {
          return (
            <div>
              <span>{item.job}</span>
              <button
                key={index}
                onClick={() => {
                  deleteHandler(index);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Deleting