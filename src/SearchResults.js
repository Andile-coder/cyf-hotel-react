import React from "react";
import "./App.css";
let useState = React.useState;
const moment = require("moment");
function SearchResults(props) {
  const [color, setColor] = useState("white");
  const highlighter = e => {
    if (color == "white") {
      e.target.parentNode.style.backgroundColor = "red";
      setColor("red");
    } else {
      e.target.parentNode.style.backgroundColor = "white";
      setColor("white");
    }
    console.log(e.target);
  };
  let booking = props.results.map(element => (
    <tr key={element.id} className={color} onClick={highlighter}>
      <td>{element.id}</td>
      <td>{element.title}</td>
      <td>{element.firstName}</td>
      <td>{element.surname}</td>
      <td>{element.email}</td>
      <td>{element.roomId}</td>
      <td>{element.checkInDate}</td>
      <td>{element.checkOutDate}</td>
      <td>
        {moment(moment(element.checkOutDate)).diff(
          moment(element.checkInDate),
          "days"
        )}
      </td>
    </tr>
  ));
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="col">ID</th>
          <th className="col">Title</th>
          <th className="col">First Name</th>
          <th className="col">Surname</th>
          <th className="col">email</th>
          <th className="col">room id</th>
          <th className="col">check in date</th>
          <th className="col">check out date</th>
          <th className="col"> Number of nights </th>
        </tr>
      </thead>
      <tbody>{booking}</tbody>
    </table>
  );
}
export default SearchResults;
