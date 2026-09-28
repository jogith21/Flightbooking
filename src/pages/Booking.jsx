import { useLocation, Link } from "react-router-dom";
import BookingForm from "../components/BookingForm";

function Booking() {
  const location = useLocation();

  const flight = location.state?.flight;

  if (!flight) {
    return (
      <div className="page">
        <h2>No flight selected</h2>

        <Link to="/matches">
          <button>View Flights</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="booking-page">

      <h1>Book Your Flight</h1>

      <div className="selected-flight">

        <h2>{flight.airline}</h2>

        <p>
          {flight.source} → {flight.destination}
        </p>

        <p>📅 {flight.flight_date}</p>

        <p>💰 ₹{flight.price}</p>

        <p>💺 {flight.available_seats} seats available</p>

      </div>

      <BookingForm flight={flight} />

    </div>
  );
}

export default Booking;