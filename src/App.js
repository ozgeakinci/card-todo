import "./App.css";
import Header from "./components/shared/Header/Header";
import Form from "./components/app/Form/Form";
import ProductList from "./components/app/Product/Product-List/ProductList"
import { useState } from "react";
import axios from "axios";

const App = () =>{

  const [newItems, setNewItems] = useState([
    { id: "0001", name: "iPhone 14 ", number:"878594 8473 3473",  color: "Gray" },
    { id: "0002", name: "iPhone 14", number: "1873947 6474 9348", color: "Red" },
    { id: "0003", name: "iPhone 13", number:"734836 3465 3443", color: "Black" },
    { id: "0004", name: "iPhone SE", number: "9347340 3432 2198", color: "Gray" },
  ]);

  axios("http://localhost:5050/people/").then(res=> console.log(res.data))

  return (
    <div className="app">
      <Header listItem={["Home", "About", "Login"]} />
      <Form newItems={newItems} setNewItems={setNewItems}/>
      <ProductList newItems={newItems} setNewItems={setNewItems}/>
    </div>
  );
}

export default App;
