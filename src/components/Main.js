/*概念上來說，component 就像是 JavaScript 的function，它接收任意的參數（稱之為「props」）並且回傳描述畫面的React element。*/
import React from "react";
import Product from "./Product";

export default function Main(props) {
  const { products, onAdd, } = props;

  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) =>
        {
          return (
            // 這裡插入key被products.id給賦予 因為warning: each child in a list should hv a unique "key" prop.
            // <div key={products.id}>{products.name}</div>

            // <Product key={product.id} product={product}></Product>

            <Product key={product.id} product={product} onAdd={onAdd}></Product>
          );
        }

        )}
      </div>
    </main>
  );
}
