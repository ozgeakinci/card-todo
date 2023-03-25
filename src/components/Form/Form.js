import React from "react";

const Form = ({
  name,
  setName,
  number,
  setNumber,
  color,
  setColor,
  errorName,
  setErrorName,
  errorNumber,
  setErrorNumber,
  errorColor,
  setErrorColor,
  handleCreateItem,

}) => {
  return (
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
          value={name}
          //State üzerinde value değeri girildiğinde set edilen değeri almak için kullanılır.
          onChange={(event) => {
            event.target.value && setErrorName(false);
            setName(event.target.value);
          }}
          placeholder="Apple"
        />
        </label>
        {/* Error varsa hata mesajını göster */}
        {errorName && <h6 className="err">This field must be filled</h6>}
      </div>

      {/* Second Input */}
      <div className="input-control">
        <label className="label" htmlFor="number">
          Pruduct Serial Number
       
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
        /> </label>
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
  );
};

export default Form;
