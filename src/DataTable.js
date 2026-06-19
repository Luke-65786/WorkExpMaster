import React from 'react';
import data from './data.json';
import DataItem from './DataItem';
import './App.css'

function DataTable({itemNo, setItemNo}) {

  function nextPage()
  {
    if (itemNo + 1 < data.length)
    {
      setItemNo(itemNo+1);
    }
  }

  function previousPage()
  {
    if (itemNo > 0)
    {
      setItemNo(itemNo-1);
    }
  }

  return (<div>
            <DataItem product={data[itemNo]} />
            <button className='button' onClick={() => setItemNo(0)}>First</button> 
            <button className='button' onClick={() => previousPage()}>Previous</button> 
            <button className='button' onClick={() => nextPage()}>Next</button>  
            <button className='button' onClick={() => setItemNo(data.length - 1)}>Last</button> 
            <p className='itemNum'>{itemNo + 1}</p>
          </div>);
}

export default DataTable; 