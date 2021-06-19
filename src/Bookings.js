import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
let useState = React.useState;
let useEffect = React.useEffect;

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);

    if (searchVal === "") {
      setBooking(booking);
    } else {
      let filterBookings = booking.filter(Element => {
        return (
          Element.firstName.toLowerCase().includes(searchVal) ||
          Element.surname.toLowerCase().includes(searchVal)
        );
      });
      setBooking(filterBookings);
    }
  };
  const [booking, setBooking] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(res => {
        if (res.ok) {
          console.log("res is ok");
        } else {
          setError(true);
        }
        return res.json();
      })
      .then(data => {
        setLoading(false);
        setBooking(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={booking} load={loading} err={error} />
      </div>
    </div>
  );
};

export default Bookings;
