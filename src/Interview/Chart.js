import React from 'react';
import "./checkbox.css"

const Chart = () => {
  return (
    <div className="checkbox">
      <div>
        <h4>Piechart</h4>
        <input type="range" value={10} />
        <div className='piechart' style='--percentage:10%'>
            
        </div>
      </div>
    </div>
  );
}

export default Chart