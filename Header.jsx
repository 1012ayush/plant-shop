import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const total = useSelector(state => state.cart.totalCount);
  return (
    <header>
      <nav>
        <Link to="/products">Shop</Link> | 
        <Link to="/cart">Cart ({total})</Link>
      </nav>
    </header>
  );
}
