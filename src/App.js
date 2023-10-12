import Header from "./components/Header";
import Basket from "./components/Basket";
import Main from "./components/Main";
// import './App.css';
import data from "./data";

function App() {
  const { products } = data;
  return (
    <div>
      <Header />
      <div className="row">
        <Main products={products} />
        <Basket />
      </div>
    </div>
  );
}

export default App;
