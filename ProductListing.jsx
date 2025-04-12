import { plants } from '../data/productData';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cartSlice';

export default function ProductListing() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const isAdded = id => cartItems.some(item => item.id === id);

  return (
    <div>
      {["Indoor", "Medicinal", "Outdoor", "Hanging"].map(cat => (
        <div key={cat}>
          <h2>{cat}</h2>
          <div className="grid">
            {plants.filter(p => p.category === cat).map(plant => (
              <div key={plant.id}>
                <img src={plant.image} alt={plant.name} />
                <p>{plant.name}</p>
                <p>${plant.price}</p>
                <button 
                  onClick={() => dispatch(addToCart(plant))} 
                  disabled={isAdded(plant.id)}>
                  {isAdded(plant.id) ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
