import React from 'react';
import './Items.css'
const Items = ({item}) => {
    const  {image,name,old_price,new_price} = item 
    return (
        <div>
            <img src={image} alt="" />
            <p>{name}</p>
            <div className='item-prices'>
                <div className='item-price-new'>
                    {new_price}

                </div>
                <div className='item-price-old'>
                    {
                     old_price
                    }

                </div>
            </div>
        </div>
    );
};

export default Items;