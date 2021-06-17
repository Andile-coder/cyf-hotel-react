import React, { useState } from "react";
let useEffect = React.useEffect;
const CustomerProfile = props => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (props.id != "") {
      fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
        .then(response => response.json())
        .then(res => {
          setData(res);
        });
    }
  }, [props.id]);
  if (props.id != "") {
    let elem;
    data.vip ? (elem = "true") : (elem = "false");
    return (
      <div>
        <ul>
          <li>{data.email}</li>
          <li>{data.id}</li>
          <li>{data.phoneNumber}</li>
          <li>{elem}</li>
        </ul>
      </div>
    );
  } else {
    return <div />;
  }
};

export default CustomerProfile;
