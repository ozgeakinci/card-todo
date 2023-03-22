import { useState } from "react";
import "./App.css";

function App() {
  // USE STATE ********

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
    setNewItems((preNewItems) =>
      preNewItems.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="app">
      {/* HEADER START */}
      <header className="header">
        <span className="logo">1ui1ux</span>
        <p className="text-center">Create New Product</p>
      </header>
      {/* HEADER END */}

      {/* FORM START */}
      <form action="" className="form d-flex column">
        <h3 className="first-text">Add Product</h3>
        {/* First Input */}
        <div className="input-control">
          <label className="label" htmlFor="name">
            Product Name
          </label>
          <input
            type="text"
            className="btn"
            id="name"
            //value değeri ile set ettiğimiz name'i bağlıyoruz. Two way binding denilmekte.
            value={name}
            //State üzerinde value değeri girildiğinde set edilen değeri almak için kullanılır.
            onChange={(event) => {
              event.target.value && setErrorName(false);
              setName(event.target.value);
            }}
            placeholder="Apple"
          />
          {/* Error varsa hata mesajını göster */}
          {errorName && <h6 className="err">This field must be filled</h6>}
        </div>

        {/* Second Input */}
        <div className="input-control">
          <label className="label" htmlFor="number">
            Pruduct Serial Number
          </label>
          <input
            type="text"
            className="btn"
            id="number"
            value={number}
            onChange={(event) => {
              event.target.value && setErrorNumber(false);
              setNumber(event.target.value);
            }}
            placeholder="9834834 9335 6464"
          />
          {errorNumber && <h6 className="err">This field must be filled </h6>}
        </div>

        {/*Third Input  */}
        <div className="input-control">
          <label className="label" htmlFor="color">
            Pruduct Color
          </label>
          <input
            type="text"
            className="btn"
            id="color"
            value={color}
            onChange={(event) => {
              event.target.value && setErrorColor(false);
              setColor(event.target.value);
            }}
            placeholder="Gray"
          />
          {errorColor && <h6 className="err">This field must be filled</h6>}
        </div>
        {/* ADD BUTONU */}
        <input
          className="btn btn-primary"
          type="submit"
          value="Add"
          onClick={handleCreateItem}
        />
      </form>

      {/* FORM END */}

      {/* NEW PRODUCT CARD START */}

      {newItems.map((item) => (
        <div className="product-container d-flex" >
          <h2 className="product-text ">Product</h2>
          <i
            className="fa-solid fa-trash"
            onClick={() => {
              handleDelete(item.id);
            }}
          ></i>

          <ul>
            <li>
              <span className="list-item"> Product Name:</span> {item.name}
            </li>
            <li>
              <span className="list-item"> Product Number:</span> {item.number}{" "}
            </li>
            <li>
              <span className="list-item"> Product Color:</span> {item.color}{" "}
            </li>
          </ul>
        </div>
      ))}
      {/* NEW PRODUCT CARD START */}
    </div>
  );
}

export default App;
