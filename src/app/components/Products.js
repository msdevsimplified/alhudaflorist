"use client"
import React from "react";
import Card from "./Card";

const Products = ({ products, cardStyle }) => {

  return (
    <div
      id="Projects"
      className={`w-full mx-auto grid ${!cardStyle ? 'grid-cols-1 lg:grid-cols-3' : 'grid-cols-1 lg:grid-cols-1'} justify-items-center bg-white justify-evenly w-full `}
    >
      {products.map((product, index) => (
        <Card key={index} index={index} products={products} product={product} cardStyle={cardStyle} />
      ))}
    </div>
  );
};

export default Products;
