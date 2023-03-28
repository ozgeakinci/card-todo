import React from "react";
import { useState } from "react";


const Form = ({ newItems, setNewItems }) => {
  // const [name, setName] = useState("");
  // const [number, setNumber] = useState("");
  // const [color, setColor] = useState("");

  const [user, setUser] = useState({name: '' , number: '', color: ''});

  // const [errorName, setErrorName] = useState(false);
  // const [errorNumber, setErrorNumber] = useState(false);
  // const [errorColor, setErrorColor] = useState(false);

  const [error, setError] =useState({name : false, number: false , color: false })

  const handleCreateItem = (event) => {
  

    event.preventDefault();
      //Tıklandığında Error mesajlarının gözükmemesi için false yapıyoruz.
      setError({name: false, number: false, color: false});
    // name, number, color değerleri varsa yeni bir card yarat
    if (user.name && user.number && user.color) {
      setNewItems([
        ...newItems,
        {
          id: ` ${Date.now()}${Math.floor(Math.random() * 1000)}`,
         ...user
        },
      ]);
     
      setUser({name:'', number:'', color: '' })
      

      // eğer name, number, color yoksa, error mesajını aktif et
    } 
    else {
      !user.name && setError((preverr) => ({...preverr, name:true}) )
      !user.number && setError((preverr) => ({...preverr, number:true}) )
      !user.color && setError((preverr) => ({...preverr, color:true}))
    }
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
              value={user.name}
              //State üzerinde value değeri girildiğinde set edilen değeri almak için kullanılır.
              onChange={(event) => {
                event.target.value && setError({...error, name:false});
                setUser({...user , name: event.target.value});
              }}
              placeholder="Apple"
            />
          </label>
          {/* Error varsa hata mesajını göster */}
          {error.name && <h6 className="err">This field must be filled</h6>}
        </div>

        {/* Second Input */}
        <div className="input-control">
          <label className="label" htmlFor="number">
            Pruduct Serial Number
            <input
              type="text"
              className="btn"
              id="number"
              value={user.number}
              onChange={(event) => {
                event.target.value && setError({...error, number:false});
                setUser({...user , number: event.target.value});
              }}
              placeholder="9834834 9335 6464"
            />{" "}
          </label>
          {error.number && <h6 className="err">This field must be filled </h6>}
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
            value={user.color}
            onChange={(event) => {
              event.target.value && setError({...error, color:false});
              setUser({...user, color:event.target.value});
            }}
            placeholder="Gray"
          />
          {error.color && <h6 className="err">This field must be filled</h6>}
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
