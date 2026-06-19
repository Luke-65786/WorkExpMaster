import React from 'react';
import data from './data.json'
import './DataItems.css';

function GallaryDataTable ({setView, setItemNo}){

    function itemClicked(itemNo)
  {
    setView("Individual");
    setItemNo(itemNo);
  }

    function getRow (lastIndex)  
    
    {
        var remainder = (lastIndex + 1) % 4;
        
        if (lastIndex >= 3 && remainder === 0)
            return (<tr index = {lastIndex}>
                        <td><img className='gallaryImage' src={`../img/${data[lastIndex - 3].pic}`} alt="product pic" onClick={() => itemClicked(lastIndex - 3)} title= {data[lastIndex - 3].price.toFixed(2)}/></td>
                        <td><img className='gallaryImage' src={`../img/${data[lastIndex - 2].pic}`} alt="product pic" onClick={() => itemClicked(lastIndex - 2)} title= {data[lastIndex - 2].price.toFixed(2)}/></td>
                        <td><img className='gallaryImage' src={`../img/${data[lastIndex - 1].pic}`} alt="product pic" onClick={() => itemClicked(lastIndex - 1)} title= {data[lastIndex - 1].price.toFixed(2)}/></td>
                        <td><img className='gallaryImage' src={`../img/${data[lastIndex - 0].pic}`} alt="product pic" onClick={() => itemClicked(lastIndex - 0)} title= {data[lastIndex - 0].price.toFixed(2)}/></td>
                    </tr>)

        if ((lastIndex + 1) === data.length)
            
            return (<tr index = {lastIndex} >
                        {remainder === 3 ? <td><img className='gallaryImage' src={`../img/${data[lastIndex - 2].pic}`} alt="product pic" onClick={() => itemClicked(lastIndex - 2)} title= {data[lastIndex - 2].price.toFixed(2)}/></td> : null }
                        {remainder >= 2 ? <td><img className='gallaryImage' src={`../img/${data[lastIndex - 1].pic}`} alt="product pic"  onClick={() => itemClicked(lastIndex - 1)} title= {data[lastIndex - 1].price.toFixed(2)}/></td> : null }
                        {remainder >= 1 ? <td><img className='gallaryImage' src={`../img/${data[lastIndex - 0].pic}`} alt="product pic"  onClick={() => itemClicked(lastIndex - 0)} title= {data[lastIndex - 0].price.toFixed(2)}/></td> : null }
                    </tr>)
    }

    return (
        <table>
            <tbody>
                {data.map((item, index) =>  getRow(index) )}
            </tbody>
        </table>
    )

 
   }
   
export default GallaryDataTable