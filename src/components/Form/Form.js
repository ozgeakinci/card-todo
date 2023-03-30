import React from "react";
import { useState } from "react";

const Form = ({ newItems, setNewItems }) => {
  //input states
  const [product, setProduct] = useState({ name: "", number: "", color: "" });

  //input Errors
  const [isProductValid, setIsProductValid] = useState({
    name: true,
    number: true,
    color: true,
  });

  const handleCreateItem = (event) => {
    event.preventDefault();
    //Tıklandığında Error mesajlarının gözükmemesi için false yapıyoruz.
    setIsProductValid({...product });
    // name, number, color değerleri varsa yeni bir card yarat
    // if (product.name && product.number && product.color) 
    if(!(Object.values(product).some(value => !value))) {
      setNewItems([
        ...newItems,
        {
          id: ` ${Date.now()}${Math.floor(Math.random() * 1000)}`,
          ...product,
        },
      ]);
      // { name: "", number: "", color: "" }
      setProduct(Object.fromEntries( Object.keys(product).forEach(key => product[key] = '')));
   

      // eğer name, number, color yoksa, error mesajını aktif et
    } 
    // else {
    //   !product.name && setIsProductValid((preverr) => ({ ...preverr, name: true }));
    //   !product.number && setIsProductValid((preverr) => ({ ...preverr, number: true }));
    //   !product.color && setIsProductValid((preverr) => ({ ...preverr, color: true }));
    // }
  };

  return (
    <>
      <form action="" className="form d-flex column">
        <h2 className="first-text">Add Product</h2>
        {/* First Input */}
        <div className="input-control">
          <label className="label" htmlFor="name">
            Product Name
            <input
              type="text"
              className="btn"
              id="name"
              //value değeri ile set ettiğimiz name'i bağlıyoruz. Two way binding denilmekte.
              value={product.name}
              //State üzerinde value değeri girildiğinde set edilen değeri almak için kullanılır.
              onChange={(event) => {
                event.target.value && setIsProductValid({ ...isProductValid, name: true });
                setProduct(prevProduct=>({ ...prevProduct, name: event.target.value }));
              }}
              placeholder="Apple"
            />
          </label>
          {/* Error varsa hata mesajını göster */}
          {!isProductValid.name && <h6 className="err">This field must be filled</h6>}
        </div>

        {/* Second Input */}
        <div className="input-control">
          <label className="label" htmlFor="number">
            Pruduct Serial Number
            <input
              type="text"
              className="btn"
              id="number"
              value={product.number}
              onChange={(event) => {
                event.target.value && setIsProductValid({ ...isProductValid, number: true });
                setProduct( prevProduct => ({ ...prevProduct, number: event.target.value }));
              }}
              placeholder="9834834 9335 6464"
            />{" "}
          </label>
          {!isProductValid.number && <h6 className="err">This field must be filled </h6>}
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
            value={product.color}
            onChange={(event) => {
              event.target.value && setIsProductValid({ ...isProductValid, color: true });
              setProduct(prevProduct => ({ ...prevProduct, color: event.target.value }));
            }}
            placeholder="Gray"
          />
          {!isProductValid.color && <h6 className="err">This field must be filled</h6>}
        </div>
        <div>
          <input
            className="btn btn-primary"
            type="submit"
            value="Add"
            onClick={handleCreateItem}
          />
        </div>
      </form>
    </>
  );
};

export default Form;
