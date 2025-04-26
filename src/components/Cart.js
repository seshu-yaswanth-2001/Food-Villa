import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../Utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <h1>Cart Items</h1>
      <button onClick={handleClear}>Clear Cart</button>
      {cartItems.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </>
  );
};
export default Cart;
