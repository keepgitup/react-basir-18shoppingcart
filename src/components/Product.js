import React from 'react';


export default function Prodcut(props){
  const { product, onAdd } = props;


  return (
    <div className="card">
      <img className="small" src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <h3>${product.price}</h3>
        <div>
          <button onClick={() => onAdd(product)}>Add to Cart</button>
        </div>
    </div>
  );
}