import "./App.css";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Cards from "./components/Cards/Cards"
import { useState } from "react";

function App() {

  const [newItems, setNewItems] = useState([]);

  return (
    <div className="app">
      <Header listItem={["Home", "About", "Login"]} />
      <Form newItems={newItems} setNewItems={setNewItems}/>
      <Cards newItems={newItems}  setNewItems={setNewItems}/>
    </div>
  );
}

export default App;
