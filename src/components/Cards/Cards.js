import React from "react";

const Card = ({ newItems, setNewItems }) => {
  const handleDelete = (id) => {
    setNewItems((preNewItems) => preNewItems.filter((item) => item.id !== id));
  };
  return (
    <div>
      {newItems.map((item) => (
        <div className="product-container d-flex" key={item.id}>
          <h2 className="product-text ">Product</h2>
          <i
            className="fa-solid fa-trash"
            onClick={() => handleDelete(item.id)}
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
    </div>
  );
};

export default Card;
