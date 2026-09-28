import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

function BookingHistory() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    async function fetchBookings() {
      const { data, error } = await supabase
        .from("bookings")
        .select(`
        *,
        flights (
          airline,
          source,
          destination,
          flight_date
        )
      `);

      if (error) {
        console.log(error);
      } else {
        setBookings(data);
      }
    }

    fetchBookings();
  }, []);

  return (
    <div className="page">

      <h1>Booking History</h1>

      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (

        <div className="history-container">

          {bookings.map((booking) => (

            <div className="booking-card" key={booking.id}>

              <h3>{booking.flights?.airline}</h3>

              <p>
                {booking.flights?.source}
                {" → "}
                {booking.flights?.destination}
              </p>

              <p>Passenger: {booking.passenger_name}</p>

              <p>Email: {booking.email}</p>

              <p>Seats: {booking.seats}</p>

              <p>
                Date: {booking.flights?.flight_date}
              </p>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default BookingHistory;