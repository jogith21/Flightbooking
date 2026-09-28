import { useNavigate } from "react-router-dom";

function FlightCard({ flight }) {
  const navigate = useNavigate();

  function handleBooking() {
    navigate("/booking", {
      state: { flight }
    });
  }

  return (
    <div className="flight-card">
      <h3>{flight.airline}</h3>

      <div className="route">
        <strong>{flight.source}</strong>
        <span>→</span>
        <strong>{flight.destination}</strong>
      </div>

      <p>📅 {flight.flight_date}</p>

      <p>💺 {flight.available_seats} seats available</p>

      <h3>₹{flight.price}</h3>

      <button onClick={handleBooking}>
        Book Now
      </button>
    </div>
  );
}

export default FlightCard;