import React, { useState } from "react";
import Product from "./Product";

const ListProduct = () => {
  // state untuk datanya
  // state adalah data yang hidup dalam sebuah komponen
  const [makanan, setMakanan] = useState([
    { nama: "ayam", harga: "10000" },
    { nama: "eatlah", harga: "10000" },
    { nama: "kfc", harga: "10000" },
    { nama: "mcd", harga: "10000" },
  ]);

  return (
    <div>
      <Product eat={makanan} minum="teh pucuk" />
      {/* <Product nama="pensil" harga={2000} /> */}
      {/* <Product nama="penggaris" harga={3000}/> */}
      {/* {makanan.map((item) => (
        <div>
          <p>Nama Makanan: {item.nama}</p>
          <p>Harga Makanan: {item.harga}</p>
        </div>
      ))} */}
    </div>
  );
};

export default ListProduct;
