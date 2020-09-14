import React from 'react';
import Product from './Product';

const ListProduct = () => {
  // state untuk datanya

  return (
    <div>
      <Product nama="buku" harga={4000} />
      <Product nama="pensil" harga={2000}/>
      <Product nama="penggaris" harga={3000}/>
    </div>
  );
}

export default ListProduct;
