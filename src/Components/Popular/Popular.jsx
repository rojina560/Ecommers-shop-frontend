import React from 'react';
import './Popular.css'
import data_product from '../Assests/data'
import Items from '../Items/Items';

const Popular = () => {
    return (
      <div className="popular">
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular-item">
          {data_product.map((item) => (
            <Items key={item.id} item={item}></Items>
          ))}
          {/* {data_product.map((item, i) => {
                return<Items key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}></Items>;
          }
           
          )} */}
        </div>
      </div>
    );
};

export default Popular;