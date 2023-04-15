import React, { useState } from 'react'
import { useEffect } from 'react'

const Searchbar = () => {
    const[user,setUser] = useState([])
    const[filteredData,setFilteredData] = useState("")

    const fetchHandler = async() =>{
       try{
        const data = await fetch("https://jsonplaceholder.typicode.com/users")
        const response = await data.json()
        setUser(response)
       }
       catch(err){
        throw new err
       }
    }

    useEffect(()=>{
        fetchHandler()
    },[])

    const searchHandler = (e)=>{
        setFilteredData(e.target.value)
       console.log(e.target.value);

    }
     console.log(filteredData);
  return (
    <div>
        <h4>Filtering the data</h4>
        <div>
            <input type="text" onChange={searchHandler}/>
            {
           user.filter(val=>{
            if (filteredData=="") return val
            else if(val.name.toLowerCase().includes(filteredData.toLowerCase())) return val
           }).map(item=>(
            <p >{item.name}</p>
           ))
            }
        </div>
    </div>
  )
}

export default Searchbar