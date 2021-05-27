import React from "react";
function Footer(props) {
  const list = props.arr.map(element => <li key={element}>{element}</li>);
  return <ul>{list}</ul>;
}

export default Footer;
