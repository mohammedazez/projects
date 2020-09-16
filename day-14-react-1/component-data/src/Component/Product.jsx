import React from "react";

const Product = ({ eat, minum }) => {
  // props adalah state yang sudah diturunkan
  // console.log(props);
  return (
    <div>
      <h1>Component product</h1>
      {/* {props.makanan.map((item) => (
        <div>
          <h1>{item.nama}</h1>
        </div>
      ))} */}
      {eat.map((item) => (
        <div>
          <p>{item.nama}</p>
          <p>{item.harga}</p>
        </div>
      ))}
      <p>{minum}</p>
    </div>
  );
};

export default Product;
