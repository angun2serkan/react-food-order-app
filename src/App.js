import {useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart.js";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <>
    {cartIsShown && <Cart onClose={hideCartHandler}></Cart>}
      <Header onShowCart = {showCartHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </>
  );
}

export default App;
