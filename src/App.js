import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Card from "./components/Card/Card";

function App() {
  // USE STATE ********//

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [color, setColor] = useState("");

  const [newItems, setNewItems] = useState([]);

  const [errorName, setErrorName] = useState(false);
  const [errorNumber, setErrorNumber] = useState(false);
  const [errorColor, setErrorColor] = useState(false);

  const handleCreateItem = (event) => {
    //Tıklandığında Error mesajlarının gözükmemesi için false yapıyoruz.
    setErrorName(false);
    setErrorNumber(false);
    setErrorColor(false);
    event.preventDefault();

    // name, number, color değerleri varsa yeni bir card yarat
    if (name && number && color) {
      setNewItems([
        ...newItems,
        {
          id: ` ${Date.now()}${Math.floor(Math.random() * 1000)}`,
          name,
          number,
          color,
        },
      ]);
      setName("");
      setColor("");
      setNumber("");

      // eğer name, number, color yoksa, error mesajını aktif et
    } else {
      !name && setErrorName(true);
      !number && setErrorNumber(true);
      !color && setErrorColor(true);
    }
  };

  const handleDelete = (id) => {
    setNewItems((preNewItems) => preNewItems.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <Header listItem={["Home", "About", "Login"]} />
      <Form
        name={name}
        setName={setName}
        number={number}
        setNumber={setNumber}
        color={color}
        setColor={setColor}
        errorName={errorName}
        setErrorName={setErrorName}
        errorNumber={errorNumber}
        setErrorNumber={setErrorNumber}
        errorColor={errorColor}
        setErrorColor={setErrorColor}
        handleCreateItem={handleCreateItem}
      />
      <Card newItems={newItems} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
