import "./App.css";
import Header from "./components/shared/Header/Header";
import Form from "./components/app/Form/Form";
import ProductList from "./components/app/Product/Product-List/ProductList"
import { useState } from "react";

const App = () => {

  const [newItems, setNewItems] = useState([]);

  return (
    <div className="app">
      <Header listItem={["Home", "About", "Login"]} />
      <Form newItems={newItems} setNewItems={setNewItems}/>
      <ProductList newItems={newItems} setNewItems={setNewItems}/>
    </div>
  );
}

export default App;
