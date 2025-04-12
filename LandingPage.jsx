import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div style={{ backgroundImage: 'url("/bg.jpg")', padding: 40 }}>
      <h1>Green Haven</h1>
      <p>Welcome to our online plant store! We bring nature closer to you.</p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
}
