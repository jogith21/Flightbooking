import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import FlightCard from "../components/FlightCard";

function Matches() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFlights() {
      const { data, error } = await supabase
        .from("flights")
        .select("*");

      if (error) {
        console.log(error);
      } else {
        setFlights(data);
      }

      setLoading(false);
    }

    fetchFlights();
  }, []);

  return (
    <div className="page">

      <h1>Available Flights</h1>

      <p className="subtitle">
        Choose a flight for your journey
      </p>

      {loading ? (
        <p>Loading flights...</p>
      ) : (
        <div className="flight-container">

          {flights.map((flight) => (
            <FlightCard
              key={flight.id}
              flight={flight}
            />
          ))}

        </div>
      )}

    </div>
  );
}

export default Matches;