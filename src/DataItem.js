import React from 'react';
import './DataItems.css';

function DataItem({product}) {

     function CapitalzeFirstLetter (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
     }

      const averageRating =
         product.ratings.reduce((sum, num) => sum + num, 0) / product.ratings.length;

  return (
            <div className='DataItem'>
               <img className='image' src={`../img/${product.pic}`} alt="product pic" />
                 <div className='ItemDetails'>
                    <p className='paragraph'>Name: {CapitalzeFirstLetter(product.name)}</p>
                    <p className='paragraph'>Size: {CapitalzeFirstLetter(product.size)}</p>
                    <p className='paragraph'>Department: {CapitalzeFirstLetter(product.department)}</p>
                    <p className='paragraph'>Type: {CapitalzeFirstLetter(product.type)}</p>
                 </div>
                  <div className='price'>
                     <p className='paragraph'>Price: £{product.price.toFixed(2)}</p>
                     <p className='paragraph'>Rating: {String(averageRating.toFixed(1))} Stars</p>
                  </div>
            </div>
        );
}

export default DataItem; 