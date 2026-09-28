import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      <section className="hero">
        <h1>Travel Made Simple ✈️</h1>

        <p>
          Find your flight, book your seat,
          and enjoy your journey with FlyEasy.
        </p>

        <Link to="/matches">
          <button>Explore Flights</button>
        </Link>
      </section>

      <section className="about">
        <h2>Why FlyEasy?</h2>

        <div className="features">

          <div>
            <h3>✈️ Easy Booking</h3>
            <p>Book your flight in just a few clicks.</p>
          </div>

          <div>
            <h3>💰 Affordable</h3>
            <p>Find flights at simple and transparent prices.</p>
          </div>

          <div>
            <h3>📋 Manage Bookings</h3>
            <p>View your booking history anytime.</p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;