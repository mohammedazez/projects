import React from 'react';

const Product = (props) => {
  return (
    <div>
      <h3>{props.nama}</h3>
      <h3>{props.harga}</h3>
      <hr/>
    </div>
  );
}

export default Product;
