import React from "react";

export default function Header() {
  return (
    <div className="block col-1">
      'Header'
      <div>
        <a href="#/">
          <h2>Simple Shopping Cart</h2>
        </a>
        <div>
          <a href="#/cart">Cart</a>
          <a href="#/signin">Sign In</a>
        </div>
      </div>
    </div>
  );
}
