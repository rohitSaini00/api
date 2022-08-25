import React from "react";

const Header = (props) => {
  return (
    <>
      <div>
        <div className="cart-img">
          <span className="length">{props.cardData.length}</span>
          <img src={require("../reduxImg/cart.png")} alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
