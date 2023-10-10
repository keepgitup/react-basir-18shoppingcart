/*概念上來說，component 就像是 JavaScript 的function，它接收任意的參數（稱之為「props」）並且回傳描述畫面的React element。*/
import React from "react";

export default function Main(props) {
  const { products } = props;
  return (
    <div className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {products.map((products) => (
          <div>{products.name}</div>
        ))}
      </div>
    </div>
  );
}
