import React from 'react';

const NewCollection = ({ collection }) => {
    const {id,image,name,old_price,new_price} = collection
    return (
        <div className='new-collections'>
            <h1>New Collections</h1>
        <img src={image} alt="" />
        <p>{name}</p>
        <div className="collection-prices">
          <div className="collection-price-new">{new_price}</div>
          <div className="collection-price-old">{old_price}</div>
        </div>
      </div>
    );
};

export default NewCollection;