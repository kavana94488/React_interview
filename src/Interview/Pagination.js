import React, { useEffect, useState } from 'react';
import './checkbox.css'

const Pagination = () => {
    const[product,setProduct] = useState([])
    const[page,setPage] = useState(1)

    const fetchHandler = async() =>{
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProduct(data.products);

    }

    useEffect(()=>{
        fetchHandler()
    },[])

    const setPageHandler = (ind)=>{
        if (ind >= 1 && ind <=product.length / 10 && ind!==page) 
        setPage(ind);

    }

  return (
    <div className="page">
      <h4>Pagination</h4>
      <div className="container">
        {product?.slice(page * 10 - 10, page * 10).map((item) => (
          <>
            <img src={item.thumbnail} alt="couldn't find it" />
          </>
        ))}
      </div>
      <div className='pagination'>
        <span
          className={page > 1 ? "" : "page__disabled"}
          onClick={() => {
            setPageHandler(page - 1);
          }}
        >
          ⏮️
        </span>
        {[...Array(product.length / 10)].map((item, i) => (
          <>
            <span
              onClick={() => {
                setPageHandler(i + 1);
              }}
              className={page === i + 1 ? "selected__page" : ""}
            >
              {i + 1}
            </span>
          </>
        ))}
        <span
          className={page < product.length / 10 ? "" : "page__disabled"}
          onClick={() => setPageHandler(page + 1)}
        >
          ⏭️
        </span>
      </div>
    </div>
  );
}

export default Pagination