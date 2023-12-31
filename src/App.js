import { useState } from 'react';
import Header from './components/Header';
import Basket from './components/Basket';
import Main from './components/Main';
// import Product from './components/Product';
// import './App.css';
import data from './data';

function App() {
  const [cartItems,setCartItems] = useState([]);
  const { products } = data;



   const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div>
      <Header />
      <div className="row">
        <Main onAdd={onAdd} onRemove={onRemove} products={products} />
        <Basket />
      </div>
    </div>
  );
}

export default App;