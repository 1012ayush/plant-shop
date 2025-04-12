import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, deleteItem } from '../features/cartSlice';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const { items, totalCount, totalCost } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Total Items: {totalCount}</p>
      <p>Total Cost: ${totalCost}</p>

      {items.map(item => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} width={50} />
          <p>{item.name}</p>
          <p>${item.price}</p>
          <button onClick={() => dispatch(increment(item.id))}>+</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(decrement(item.id))}>-</button>
          <button onClick={() => dispatch(deleteItem(item.id))}>Delete</button>
        </div>
      ))}

      <button onClick={() => alert("Coming Soon")}>Checkout</button>
      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
}
