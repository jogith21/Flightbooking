import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>✈️ FlyEasy</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/matches">Flights</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/history">Booking History</Link>
      </div>
    </nav>
  );
}

export default Navbar;