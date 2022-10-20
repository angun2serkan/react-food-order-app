import React from "react";
import HeaderCartButton from "./HeaderCartButton.js";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img
          src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg"
          alt="a table full of delicious food"
        ></img>
        {/* if we have got image in our folders we need to import it  then give it to the src attribute as an object */}
      </div>
    </>
  );
};

export default Header;
