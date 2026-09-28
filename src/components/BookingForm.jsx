import { useState } from "react";
import { supabase } from "../lib/supabase";

function BookingForm({ flight }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [seats, setSeats] = useState(1);

  async function handleSubmit(e) {
    e.preventDefault();

    const { error } = await supabase
      .from("bookings")
      .insert([
        {
          flight_id: flight.id,
          passenger_name: name,
          email: email,
          seats: Number(seats)
        }
      ]);

    if (error) {
      alert("Booking failed");
      console.log(error);
    } else {
      alert("Booking successful! ✈️");

      setName("");
      setEmail("");
      setSeats(1);
    }
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Passenger Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="number"
        min="1"
        max={flight.available_seats}
        value={seats}
        onChange={(e) => setSeats(e.target.value)}
        required
      />

      <button type="submit">
        Confirm Booking
      </button>

    </form>
  );
}

export default BookingForm;