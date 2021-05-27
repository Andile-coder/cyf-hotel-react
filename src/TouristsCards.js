import React from "react";
function TouristInfoCards(props) {
  return (
    <div className="card">
      <img src={props.src} className="card-img-top" />
      <div className="card-body">
        <a href={props.href} target="blank" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
export default TouristInfoCards;
