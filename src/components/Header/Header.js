import React from "react";

const Header = ({listItem }) => {
  return (
    <header className="header d-flex">
      <h3 className="logo">Create New Product</h3>
      <nav className="navbar">
        <ul>
          {listItem.map((item) => (
            <li>
             <a>{item}</a> 
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
